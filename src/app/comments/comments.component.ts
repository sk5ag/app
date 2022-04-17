import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { APIService, Comment } from '../API.service';
import { CommentComponent } from '../comments/comment/comment.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  /* declare events variable */
  public comments: Array<any> = []; 

  displayedColumns: string[] = ['id', 'content', 'createdAt', 'updatedAt', 'Actions'];
  listData!: MatTableDataSource<Comment>;

  constructor(
    private api: APIService,
    // private fb: FormBuilder, 
    public dialog: MatDialog,

    public dialofRef: MatDialogRef<CommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) {
    console.log('Data received - Posts: ', this.data)
  }

  async ngOnInit() {
    /* fetch comments when app loads */
    await this.api.ListComments().then((event) => {
      // this.posts = event.items as Post[];
      // console.log('Posts FETCHED: ', this.posts)
      let postsList = event.items.map( result => {
        // console.log('results', result);
        if (result?.post?.id === this.data.postId){
          this.comments.push(result)
        }
      })
      console.log('Comments FETCHED: ', this.comments)
    });
    this.listData = new MatTableDataSource(this.comments);

  // this.loadEvents()
  }
  openComment(element: any){
    let dialogRef = this.dialog.open( CommentsComponent , {
      width: '95%',
      height: '95%',
      data: {
        postId: element.id
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'),
      console.log(result)
    })
  }
  
openAddComment(){
  let dialogRef = this.dialog.open( CommentComponent , {
    width: '95%',
    height: '95%',
    data: {
      title: "Add new comment here!",
      postId: this.data.postId
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed'),
    console.log(result)
  })
}
printOut(element: any){
  console.log('This element selected: ', element)
}

}
