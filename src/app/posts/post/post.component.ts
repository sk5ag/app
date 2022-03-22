import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    public dialofRef: MatDialogRef<PostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) {
    this.createPostForm = this.fb.group({
      title: ["", Validators.required],
      postEventId: [data.eventId]
    });
   }

   async ngOnInit() {
    /* fetch users when app loads */
    await this.api.ListPosts().then((event) => {
    // this.posts = event.items as Post[];
    let postsList = event.items.map( result => {
      // console.log('results', result?.event?.id);
      if (result?.event?.id === '7e50b27c-316a-4a1f-9104-e10f7f93a6aa'){
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

}
