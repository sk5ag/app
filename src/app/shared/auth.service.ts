import { Injectable } from '@angular/core';
import { AmplifyAuth0Button } from '@aws-amplify/ui-angular/legacy/proxies';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logInState = false;
  constructor() { }

  async loggedIn(){
    try {
      await Auth.currentAuthenticatedUser();
      return true
    } catch (error) {
      return false
    }     
  }
  async whichUser(){
    /* Who is the logged in user */

    try {
      return await Auth.currentUserInfo();
    } catch (error) {
      console.log(error)
    }
} 

}
