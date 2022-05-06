import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isAuthenticated: boolean = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.loggedIn().then(res => {
      // console.log('Logged IN User is: ', res);
      this.isAuthenticated = res
    })
    .catch(err => {
      console.log(err);
    });
  }

  signout(){
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
}
