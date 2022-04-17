import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Auth } from 'aws-amplify';
import { APIService, Event, Post } from '../../API.service';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

    /* declare events variable */ 
    public events: Array<Event> = []; 
    public events2: Array<any> =[];
    public posts: Array<any> =[];

    /* declare user info variable */ 
    public userInfo: string = "";   
    
    // arrEvent = [{}];
    // obj = {};
    // eventsForm!: FormGroup;    
    displayedColumns: string[] = ['TITLE', 'ACTIONS'];
    listActivityData!: MatTableDataSource<Event>;

  constructor(
    private api: APIService,
    private fb: FormBuilder, 
    public dialog: MatDialog,
    public dialofRef: MatDialogRef<ActivityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ){
    /* Who is the logged in user */
    Auth.currentUserInfo().then((event) => {
      this.userInfo = event.attributes.sub;
    });


  }

  async ngOnInit() {
    await this.getEvents();
    // console.log('Hello World: ', this.events2);
    this.listActivityData = new MatTableDataSource(this.events2 as Event[]);


    // this.eventsForm = new FormGroup({

    //   name: new FormControl(
    //     this.events2.map((res: any) => {
    //       console.log(res);
    //       Object.assign(this.obj, {name: res});
    //       Object.assign(this.obj, {state: true})
    //       this.arrEvent.push(this.obj)
    //       //  this.arrEvent.push(Object.assign({name: res, state: false}));
    //     })
    //   )    
    // })

  }

  createActivity(){
    // console.log('Values in topics: ', this.topics.value);
    // for (const [key, value] of Object.entries(this.topics.value)) {
    //   console.log(`${key}: ${value}`);
    //   if (value == true){
    //     console.log(`A ${key} job will be created....`);
    //     this.api.CreateActivity({name: key, activityUserId: this.userInfo, owneId:this.userInfo, completed: false, reported: false}).then().catch(Error => {
    //       console.log('Add activity error: ', Error)
    //     })
    //   }
    // }
    // console.log('Items in the Activity Table: ', this.api.ListActivitys())
  }
  

  async getEvents(){
    await this.api.ListEvents()
    .then((event) => {
      event.items.forEach(element => {
        this.events2.push(element)
      });
    }) 
    .catch(Error => {
    console.log('No activities found in the database! or sothing went wrong! :', Error)
  });
  // console.log('FINAL CALL RETURNED: ', this.events2);
  return this.events2;
  }

  addEventToActivitiesTable(element: any){
    // console.log('This element will be added - ACTIVITY: ', element);
    this.api.GetEvent(element.id)
    .then(
      (event) => {
        // console.log('Post Found in DynamoDB Table: ', event.posts?.items);
        this.postItemsToActivityTable(event.posts?.items);
      }
    )
    .catch(err =>
      console.log('HEY! I catched this error: ', err));
  }

  postItemsToActivityTable(myItems: any){
    // console.log('You chose these items to be added to your activity table: ', myItems);

    if (myItems.length > 0) {
      
      myItems.forEach((element: any) => {

        // find the event name for each each item that will be added to the database
        this.api.GetEvent(element.postEventId)
        .then((event)=> {
          // console.log('Event name for the postEventId is: ', event.eventtitle);
          this.api.CreateActivity({name: element.title, activityUserId: this.userInfo, owneId:this.userInfo, completed: false, reported: false, eventId: element.postEventId, eventTitle: event.eventtitle})
          .then((event) => {
            // console.log(event.name , '--> Item added to activities.')
          })
          .catch(err => {
            console.log('Error adding posts to DB: ', err)
          })
        })
        .catch(err => {
          console.log('Could not find eventname for the postEventId: ', err);
        })


      });
    } else {
      console.log(myItems.length , ' Items added to activities.')
    }
  }

}
