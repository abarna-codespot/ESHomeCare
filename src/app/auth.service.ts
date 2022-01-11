import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
export class AuthService {
  constructor(public jwtHelper: JwtHelperService) {}
  // ...
  public isAuthenticated(): boolean {
    const token = window.localStorage.getItem('currentUser') as string | undefined;
    // Check whether the token is expired and return
    // true or false
    console.log(token);
    if(token)
    return true;
    return false;
  }
}
