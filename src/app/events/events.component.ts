import { Component, OnInit } from '@angular/core';
import { MatDialog  } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { APIService, Event } from '../API.service';
import { PostsComponent } from '../posts/posts.component';
import { EventComponent } from './event/event.component';
 

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  /* declare events variable */
  public events: Array<Event> = []; 

  displayedColumns: string[] = ['id', 'eventtitle', 'createdAt', 'updatedAt', 'Actions'];
  listData!: MatTableDataSource<Event>;

  constructor(
    private api: APIService,
    // private fb: FormBuilder, 
    public dialog: MatDialog,

  ) {}

  async ngOnInit() {
    /* fetch events when app loads */
    await this.api.ListEvents().then((event) => {
    this.events = event.items as Event[];
    // console.log('EVENTS FETCHED: ', this.events)
  });
  this.loadEvents()
  }
  loadEvents(){
    /* fetch users when app loads */
    this.api.ListEvents().then((event) => {
      this.events = event.items as Event[];
      // console.log('EVENTS FETCHED: ', typeof(this.events))
    });
    this.listData = new MatTableDataSource(this.events);
    // console.log('Activities in List EVENT Data: ', this.listData)

}

openPost(element: any){
  let dialogRef = this.dialog.open( PostsComponent , {
    width: '95%',
    height: '95%',
    data: {
      eventId: element.id
    }
  }); 

  dialogRef.afterClosed().subscribe(result => {
    // console.log('The dialog was closed'),
    // console.log(result)
  })
}

openAddEvent(){
  let dialogRef = this.dialog.open( EventComponent , {
    width: '95%',
    height: '95%',
    data: {
      title: "Add new event here!"
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    // console.log('The dialog was closed'),
    // console.log(result)
  })
}
printOut(element: any){
  // console.log('This element selected: ', element)
}


}
