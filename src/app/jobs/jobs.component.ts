import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { APIService, Jobs } from '../API.service';

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

  async ngOnInit() { 
        /* fetch events when app loads */
        await this.api.ListJobss().then((event) => {
          this.jobs = event.items as Jobs[];
          console.log(this.jobs);
        })
        this.loadJobs()
  }

  loadJobs(){
    /* fetch users when app loads */
    this.api.ListJobss().then((event) => {
      this.jobs = event.items as Jobs[];
      console.log('JOBS FETCHED: ', typeof(this.jobs))
    });
    this.listData = new MatTableDataSource(this.jobs);
    console.log('Activities in List JOBS Data: ', this.listData)

    //Subscribe to changes
    this.api.OnCreateJobsListener.subscribe((event:any) => {
      const newJob = event.value.data.onCreateJob;
      this.jobs = [newJob, ...this.jobs];
      this.listData = new MatTableDataSource(this.jobs);
    });
    this.api.OnUpdateJobsListener.subscribe((event:any) => {
      const newJob = event.value.data.onChange;
      this.jobs = [newJob, ...this.jobs];
      this.listData = new MatTableDataSource(this.jobs);
    });
    this.api.OnDeleteJobsListener.subscribe((event:any) => {
      const deletedJob = event.value.data.onDeleteJob
      if (deletedJob){
        this.jobs = this.jobs.filter((r) => r.id !=deletedJob.id);
        this.listData = new MatTableDataSource(this.jobs);
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

  openSnackBar(msg: string, actiontext: string, hposition: any, vposition: any) {
    this.horizontalPosition = hposition;
    this.verticalPosition = vposition;
    this._snackBar.open(msg, actiontext, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  
  onClose(){
    return null
  }  

}
