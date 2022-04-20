import { Component, OnInit } from '@angular/core';
import { MatDialog  } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Auth } from 'aws-amplify';
import { Activity, APIService, User } from '../API.service';
import { ActivityComponent } from './activity/activity.component';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  /* declare events variable */
  public events: Array<Activity> = []; 

  /* declare user variable */
  public users: Array<User> = [];

  userId = "";
  public frmObj = {};


   /* declare activities variable */
   public activities: Array<Activity> = [];
   public activitiesBuffer: Array<any> = [];
   public eventsElements: Array<any> =[];

   public events2: Array<any> =[];


  displayedColumns: string[] = ['NAME', 'EVENTTITLE', 'COMPLETED', 'REPORTED', 'ACTIONS'];
  listActivityData!: MatTableDataSource<Activity>;
  
  constructor(
    private api: APIService,
    public dialog: MatDialog,
  ) {}

  async ngOnInit() {     
    await Auth.currentUserInfo().then((event)=> {
      this.userId = event.attributes.sub;
      // console.log('User id found: ', this.userId);
      this.fetchUserActivity(this.userId);
    }).catch(Error => {
      console.log('No user information found!!', Error)
    });

  }
  
  async fetchUserActivity(userid: string){

    await this.api.ListActivitys().then((event) => {
      event.items.forEach(element => {
        if (element?.owneId && element?.owneId?.toString().valueOf() === userid){
          this.activitiesBuffer.push(element);
        }
        
      });
    })
    .catch(Error => {
      console.log('No Activities!: ', Error)
    });

    this.listActivityData = new MatTableDataSource(this.activitiesBuffer as Activity[]);
  }

  
  createActivity(){

  let dialogRef = this.dialog.open( ActivityComponent , {
    width: '95%',
    height: '95%',
    data: {
      title: "Generate new activities from here!" ,
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed'),
    console.log(result)
  })
  }
  
  async deleteActivity(element:any){
    console.log(element.id, 'will be deleted!');
    await this.api.DeleteActivity({id: element.id}).catch(err => {
      console.log('Error occured, activity cannot be deleted!: ', err);
    });
    console.log(element, 'has been deleted!');
  }
 
}
