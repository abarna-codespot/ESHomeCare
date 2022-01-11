import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor() {}
  canActivate(): boolean {
    
    return (localStorage.getItem('currentUser'))? true : false;
  }
}