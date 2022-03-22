import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostComponent } from 'src/app/posts/post/post.component';
import { APIService, Event } from '../../API.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  /* declare events variable */
  public events: Array<Event> = []; 

  public createEventForm: FormGroup;

  constructor(
    private api: APIService,
    private fb: FormBuilder, 
    public dialog: MatDialog,
    public dialofRef: MatDialogRef<EventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.createEventForm = this.fb.group({
      eventtitle: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  //   /* fetch users when app loads */
  //   await this.api.ListEvents().then((event) => {
  //   this.events = event.items as Event[];
  //   console.log('EVENTS FETCHED: ', this.events)
  // });
  // this.loadEvents()
  }
//   loadEvents(){
//     /* fetch users when app loads */
//     this.api.ListEvents().then((event) => {
//       this.events = event.items as Event[];
//       console.log('EVENTS FETCHED: ', this.events)
//     })
// }
onCreateEvent(newevent: any){
  console.log('New Event ', newevent)
  this.api.CreateEvent(newevent)
}
}
