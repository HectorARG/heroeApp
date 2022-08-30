import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private loginService: LoginService,
              private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    return this.loginService.verificaAutentificacion().pipe(
        tap(estaLogueado => {
          this.router.navigate(['./auth/login'])
        }));


    // return true;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {

    return this.loginService.verificaAutentificacion().pipe(
        tap(estaLogueado => {
          this.router.navigate(['./auth/login'])
        }));

    //   if(this.loginService.auth.id){
    //     return true;
    //   }
    // return false;
  }
}
