import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Auth } from 'aws-amplify';
import { Subscription } from 'rxjs';
import { APIService, User, Event } from "../API.service";
import { UploadProfileImageComponent } from './upload-profile-image/upload-profile-image.component';


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

    private subscription: Subscription | null = null;

  constructor(
    private api: APIService, 
    private fb: FormBuilder, 
    public dialog: MatDialog
    ) {
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
    /* Who is the logged in user */
    Auth.currentUserInfo().then((event) => {
      this.userInfo = event.id;
      // console.log('Current User Information: ', this.userInfo)
    })
    // /* fetch users when app loads */
    // this.api.ListUsers().then((event) => {
    //   this.users = event.items as User[];
    //   console.log('USERS FETCHED: ', this.users);

    //   this.populateForm(this.users);
      
    // });

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
    // dialogConfig.height = "90%";
    this.dialog.open(UploadProfileImageComponent, dialogConfig)
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }

}

