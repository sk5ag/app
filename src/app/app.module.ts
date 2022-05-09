import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { LegacyAmplifyUiModule } from '@aws-amplify/ui-angular/legacy';
import { FlexLayoutModule } from "@angular/flex-layout";


/* new form imports */
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadProfileImageComponent } from './profile/upload-profile-image/upload-profile-image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Material component imput */
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatSnackBarModule} from '@angular/material/snack-bar'; 

import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comments/comment/comment.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityComponent } from './activities/activity/activity.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { JobsComponent } from './jobs/jobs.component';
import { ListcommentsComponent } from './comments/listcomments/listcomments.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UploadProfileImageComponent,
    EventsComponent,
    EventComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    ActivitiesComponent,
    ActivityComponent,
    HomeComponent,
    ImageUploadComponent,
    ToolbarComponent,
    JobsComponent,
    ListcommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    /* configure App with AmplifyAuthenticatorModule */
    AmplifyAuthenticatorModule,
    LegacyAmplifyUiModule,
    /* configuring form modules */
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSnackBarModule       
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [
    PostsComponent,
    PostComponent,
    EventComponent,
    CommentComponent,
    CommentsComponent,
    ActivitiesComponent,
    ActivityComponent
  ],
})
export class AppModule { }
