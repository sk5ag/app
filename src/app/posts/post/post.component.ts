import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentComponent } from 'src/app/comments/comment/comment.component';
import { APIService, Post } from '../../API.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    /* declare events variable */
    public posts: Array<any> = []; 
    public createPostForm: FormGroup;


  constructor(
    private api: APIService,
    private fb: FormBuilder, 
    public dialog: MatDialog,

    public dialofRef: MatDialogRef<PostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) {
    this.createPostForm = this.fb.group({
      title: ["", Validators.required],
      postEventId: [this.data.eventId]
    });
   }

   async ngOnInit() {
    /* fetch posts when app loads */
    await this.api.ListPosts().then((event) => {
    // this.posts = event.items as Post[];
    let postsList = event.items.map( result => {
      // console.log('results', result?.event?.id);
      if (result?.event?.id === this.data.eventId){
        this.posts.push(result)
      }
    })
    console.log('Posts FETCHED: ', this.posts)
  });
  }

onCreatePost(newpost: any){
  console.log('New Post ', newpost)
  this.api.CreatePost(newpost)
}

onClose(){
  this.dialofRef.close('IT WAS CLOSED')
}

openComment(){
  let dialogRef = this.dialog.open( CommentComponent , {
    width: '95%',
    height: '95%',
    data: {
      postId: "21ccc1ad-7875-41b2-af8c-87e4a9a2a975"
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed'),
    console.log(result)
  })
}

}
