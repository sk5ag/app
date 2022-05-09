import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../app/auth.guard';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityComponent } from './activities/activity/activity.component';
import { CommentComponent } from './comments/comment/comment.component';
import { CommentsComponent } from './comments/comments.component';
import { EventComponent } from './events/event/event.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { PostComponent } from './posts/post/post.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes =  [ 

    { path: '',  redirectTo: 'home', pathMatch: 'full' },

    {path: 'events', component: EventsComponent, canActivate: [AuthGuard]},
    {path: 'event', component: EventComponent, canActivate: [AuthGuard]},

    {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
    {path: 'post', component: PostComponent, canActivate: [AuthGuard]},

    {path: 'comments', component: CommentsComponent, canActivate: [AuthGuard]},
    {path: 'comment', component: CommentComponent, canActivate: [AuthGuard]},

    {path: 'activities', component: ActivitiesComponent, canActivate: [AuthGuard]},
    {path: 'activity', component: ActivityComponent, canActivate: [AuthGuard]},    

    {path: 'jobs', component: JobsComponent, canActivate: [AuthGuard]},

    {path: 'profile', component: ProfileComponent},
    {path: 'home', component: HomeComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
