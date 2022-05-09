import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { elementAt } from 'rxjs';
import { APIService, Jobs } from '../API.service';
import { CommentComponent } from '../comments/comment/comment.component';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  gridColumns = 4;
  
    /* declare events variable */
    public jobs: Array<Jobs> = []; 
    searchKey: string ="";
    searchText: string ="";

      // displayedColumns: string[] = ['id', 'eventtitle', 'createdAt', 'updatedAt', 'Actions'];
  displayedColumns: string[] = ['jobname', 'jobdescription', 'user', 'jobcompleted', 'jobreported'];

  listData!: MatTableDataSource<Jobs>;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private api: APIService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() { 
        // /* fetch events when app loads */
        // await this.api.ListJobss().then((event) => {
        //   this.jobs = event.items as Jobs[];
        //   console.log(this.jobs);
        // })
        this.loadJobs()
  }

  async loadJobs(){
    /* fetch users when app loads */
    await this.api.ListJobss().then((event) => {
      event.items.forEach(element => {
        this.jobs = event.items as Jobs[];
        console.log('JOBS FETCHED: ', typeof(this.jobs));
        this.jobs.forEach((element,index)=> {
          if(element.jobcompleted == true) {
            this.jobs.splice(index,1)
          }
        })
      });
    });
    this.listData = new MatTableDataSource(this.jobs);
    console.log('Activities in List JOBS Data: ', this.listData)

  }

  openSnackBar(msg: string, actiontext: string, hposition: any, vposition: any) {
    this.horizontalPosition = hposition;
    this.verticalPosition = vposition;
    this._snackBar.open(msg, actiontext, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  openComment(element: any){
    console.log('Before opening comment window: ', element);
    let dialogRef = this.dialog.open( CommentComponent , {
      width: '95%',
      height: '95%',
      data: {
        postId: element.postId 
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'),
      console.log(result)
    })
  }

  async completeJob(element:any){
    console.log('This is related to job ID: ', element.id);
    await this.api.UpdateJobs({
      id: element.id,
      jobcompleted: true,

    });
    this.loadJobs();
  }
  
  onClose(){
    return null
  }  

}
