import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { APIService, User, Event } from "../API.service";
import { AuthService } from '../shared/auth.service';
import { ImageUploadComponent } from '../image-upload/image-upload.component';
import { FilesHandlerService } from '../shared/files-handler.service';
import { Storage } from 'aws-amplify';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  public createForm: FormGroup;

    /* declare users variable */
    public users: Array<User> = [];
    public events: Array<Event> = []; 
    public userInfo: Array<User> = [];
    
    userId = "";
    public myImage: string | undefined;
    imageKey:string | undefined ="";
    imgExist: boolean = false;
    private subscription: Subscription | null = null;

  constructor(
    private api: APIService, 
    private fb: FormBuilder, 
    public dialog: MatDialog,
    public authService: AuthService,
    public myfiles: FilesHandlerService
    ) {

      this.loadProfileImage();
      // this.listImages();

    this.createForm = this.fb.group({
      id: [""],
      username: ["", Validators.required],
      firstname: ["", Validators.required],
      secondname: ["", Validators.required],
      imageurl: ["", Validators.required],
      email: ["", Validators.required],
    });
  }
 
  async ngOnInit() {
    await this.listImages();
    this.authService.loggedIn().then(res => {
      console.log('Logged IN User is: ', res)
    })
    .catch(err => {
      console.log(err);
    });
        /* subscribe to new users being created */
        this.subscription = <Subscription>(
          this.api.OnCreateUserListener.subscribe((event: any) => {
            const newUser = event.value.data.onCreateUser;
            this.users = [newUser, ...this.users];
          })
        );
  }

  populateForm(data: User[]){

    this.createForm.patchValue({
      id: data[0].id,
      __typename: data[0].__typename,
      username: data[0].username,
      firstname: "Kardo",
      secondname: "Sarbast",
      imageurl: "https://google.com",
      email: data[0].email
    })

  }

  loadProfileImage(){
    this.authService.whichUser().then(async (event)=> {
      // this.imageKey = "NewProfileImage/"+ event.attributes.sub + ".jpg";
      await this.listImages()
      this.getImage( this.imageKey );
    })
  }

  getImage(_imgKey: string | undefined){

    if (_imgKey){
      Storage.get(_imgKey, { level: 'private' })
      .then ( (result) => { 
        console.log('1.', result); 
        this.imageKey = result;
        console.log('2. imageKey: ', this.imageKey)
      })
      .catch( (err) => { 
        console.log('3. No Image Found',err);
      });

    }else{
      console.log('Image was undefined!')
    }

  }

  async listImages(){
    await Storage.list('NewProfileImage/', { level: 'private' })
      .then ( (result) => { 
        console.log('LENGNTH: ', result.length);
        if (result.length > 0){
          this.imgExist = true;
        }
        result.map((r)=> {
          this.imageKey = r.key;
          console.log('While list image is processed: ', this.myImage);
          return this.myImage
        })
      })
      .catch( (err) => { 
        console.log(err);
      });
  }

  public onCreate(user: any) {
    // console.log('Form data received: ', user)
    this.api
      .UpdateUser(user)
      .then((event) => {
        // console.log("User: item updated!");
        this.createForm.reset();
      })
      .catch((e) => {
        console.log("error updating user...", e);
      });
  }  

  onUploadImage(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    // dialogConfig.width = "75%";
    dialogConfig.height = "auto";
    this.dialog.open(ImageUploadComponent, dialogConfig)
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }

}

