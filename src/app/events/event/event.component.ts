import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
    public dialog: MatDialog
  ) {
    this.createEventForm = this.fb.group({
      eventtitle: ["", Validators.required]
    });
  }

  async ngOnInit() {
    /* fetch users when app loads */
    await this.api.ListEvents().then((event) => {
    this.events = event.items as Event[];
    console.log('EVENTS FETCHED: ', this.events)
  });
  this.loadEvents()
  }
  loadEvents(){
    /* fetch users when app loads */
    this.api.ListEvents().then((event) => {
      this.events = event.items as Event[];
      console.log('EVENTS FETCHED: ', this.events)
    })
}
onCreateEvent(newevent: any){
  console.log('New Event ', newevent)
  this.api.CreateEvent(newevent)
}
openPost(){
  let dialogRef = this.dialog.open( PostComponent , {
    width: '95%',
    height: '95%',
    data: {
      eventId: "7e50b27c-316a-4a1f-9104-e10f7f93a6aa"
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed'),
    console.log(result)
  })
}
}
