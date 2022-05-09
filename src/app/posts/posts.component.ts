import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { APIService, Post } from '../API.service';
import { CommentComponent } from '../comments/comment/comment.component';
import { CommentsComponent } from '../comments/comments.component';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  /* declare events variable */
  public posts: Array<any> = []; 

  displayedColumns: string[] = ['id', 'title', 'createdAt', 'updatedAt', 'Actions'];
  listData!: MatTableDataSource<Post>;

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
    /* fetch posts when app loads */
    await this.api.ListPosts().then((event) => {
      // this.posts = event.items as Post[];
      // console.log('Posts FETCHED: ', this.posts)
      let postsList = event.items.map( result => {
        // console.log('results', result?.event?.id);
        if (result?.event?.id === this.data.eventId){
          this.posts.push(result)
        }
      })
      // console.log('Posts FETCHED: ', this.posts)
    });
    this.listData = new MatTableDataSource(this.posts);

  // this.loadEvents()
  }
//   loadEvents(){
//     /* fetch users when app loads */
//     this.api.ListPosts().then((event) => {
//       // this.posts = event.items as Post[];
//       // console.log('Posts FETCHED: ', this.posts)
//       let postsList = event.items.map( result => {
//         console.log('results', result?.event?.id);
//         if (result?.event?.id === this.data.eventId){
//           this.posts.push(result)
//         }
//       })
//       console.log('Posts FETCHED: ', this.posts)
//     });
//     this.listData = new MatTableDataSource(this.posts);
// }

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

openAddPost(){
  let dialogRef = this.dialog.open( PostComponent , {
    width: '95%',
    height: '95%',
    data: {
      title: "Add new post here!",
      eventId: this.data.eventId
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