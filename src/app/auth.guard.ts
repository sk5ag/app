import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../app/Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ){

  }

  async canActivate(): Promise<boolean> {
    if (await this._authService.loggedIn()){
      return true
    }
    else{
      this._router.navigate(['/profile'])
      return false
    }
  }
  
}
