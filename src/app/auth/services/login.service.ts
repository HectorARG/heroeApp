import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LogIn } from '../interfaces/login.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = environment.baseUrl;
  private _auth: LogIn | undefined;

  get auth(): LogIn {
    return { ...this._auth! }
  }

  constructor( private http: HttpClient ) { }

  verificaAutentificacion(): Observable<boolean> {
    if(!localStorage.getItem('token')){
      // return of(false);
      return of(false);
    }

    return this.http.get<LogIn>(`${this.url}/usuarios/1`).pipe(
      map( auth =>  {
        this._auth = auth;
        return true;
      })
    )

    // return of(true);
    // return true;
  }

  usuarios(){
    return this.http.get<LogIn>(`${this.url}/usuarios/1`)
                    .pipe(
                      tap( auth => this._auth = auth ),
                      tap( auth => localStorage.setItem('token', auth.id)),
                      );
  }

}
