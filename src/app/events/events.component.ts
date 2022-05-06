import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog  } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { APIService, Event } from '../API.service';
import { PostsComponent } from '../posts/posts.component'; 
import {Observable} from 'rxjs';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  /* declare events variable */
  public events: Array<Event> = []; 
  public createEventForm: FormGroup;
  eventtitle = new FormControl('', [Validators.required]);
  isDisabled = false;
  searchKey: string ="";
  step = 0;

  // displayedColumns: string[] = ['id', 'eventtitle', 'createdAt', 'updatedAt', 'Actions'];
  displayedColumns: string[] = ['eventtitle', 'Actions'];

  listData!: MatTableDataSource<Event>;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private api: APIService,
    private fb: FormBuilder, 
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.createEventForm = this.fb.group({
      eventtitle: ["", Validators.required]
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  getErrorMessage() {
    if (this.eventtitle.hasError('required')) {
      return 'You must enter a value';
    }

    return this.eventtitle.hasError('Subject title') ? 'Not a valid input' : '';
  }

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

    //Subscribe to changes
    this.api.OnCreateEventListener.subscribe((event:any) => {
      const newEvent = event.value.data.onCreateEvent;
      this.events = [newEvent, ...this.events];
      this.listData = new MatTableDataSource(this.events);
    });
    this.api.OnDeleteEventListener.subscribe((event:any) => {
      const deletedEvent = event.value.data.onDeleteEvent
      if (deletedEvent){
        this.events = this.events.filter((r) => r.id !=deletedEvent.id);
        this.listData = new MatTableDataSource(this.events);
      }
    })

}

onSearchClear(){
  this.searchKey="";
  this.applyFilter();
}

applyFilter(){
  this.listData.filter = this.searchKey.trim().toLowerCase();
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
    console.log('The dialog ADD POST was closed'),
    console.log(result)
  })
}

openSnackBar(msg: string, actiontext: string, hposition: any, vposition: any) {
  this.horizontalPosition = hposition;
  this.verticalPosition = vposition;
  this._snackBar.open(msg, actiontext, {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
  });
}

// openAddEvent(){
//   let dialogRef = this.dialog.open( EventComponent , {
//     width: '95%',
//     height: '95%',
//     data: {
//       title: "Add new event here!"
//     }
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     // console.log('The dialog was closed'),
//     // console.log(result)
//   })
// }
printOut(element: any){
  // console.log('This element selected: ', element)
}

onCreateEvent(newevent: any){
  // console.log('New Event ', newevent)

    if (newevent.eventtitle != null && newevent.eventtitle != "") {
      this.api.CreateEvent(newevent)
      .then((event) => {
        this.openSnackBar('Event created: '+ event.eventtitle, 'close', 'end', 'top')
        
      }).catch(err => {
        console.log(err),
        this.openSnackBar('Error occured!', 'close', 'center', 'bottom')
      });
      this.createEventForm.reset();
    } else{
      this.openSnackBar('Subject title is missing!', 'close', 'center', 'bottom');
      this.step = 0;
    }
}
onDeleteEvent(deleteevent:any){
  // console.log('DELETE Event ', deleteevent)
  this.api.GetEvent(deleteevent.id)
  .then((event) => {
    console.log('This event have ', event.posts?.items.length, 'posts');
    if (event.posts?.items.length == 0){
      this.api.DeleteEvent({id: deleteevent.id});
    } else{
      this.openSnackBar('It cannot be deleted!', 'close', 'center', 'bottom')
    }
  })
  .catch(err => {
    this.openSnackBar(err, 'close', 'center', 'bottom')
  })
}
onClose(){
  return null
}
}
