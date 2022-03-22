import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { APIService, Comment } from '../../API.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

      /* declare events variable */
      public comments: Array<any> = []; 
      public createCommentsForm: FormGroup;

  constructor(
    private api: APIService,
    private fb: FormBuilder, 
    public dialofRef: MatDialogRef<CommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.createCommentsForm = this.fb.group({
      content: ["", Validators.required],
      commentPostId: [data.postId]
    });
   }

   async ngOnInit() {
    
    /* fetch comments when app loads */
    await this.api.ListComments().then((event) => {
      // this.comments = event.items as Comment[];
      let commentsList = event.items.map( result => {
        console.log('results', result);
        if (result?.post?.id === "cee77d43-4258-4705-80a8-b3dc6f6d63ad"){
          this.comments.push(result)
        }
      })
      console.log('Comments FETCHED: ', this.comments)
    });
  }
  onCreateComment(newcomment: any){
    console.log('New Comment ', newcomment)
    this.api.CreateComment(newcomment)
  }
  
  onClose(){
    this.dialofRef.close('IT WAS CLOSED')
  }
}
