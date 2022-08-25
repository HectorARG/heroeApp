import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroersService {

  private baseURL: string = environment.baseUrl;

  constructor( private http: HttpClient) { }


  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseURL}/heroes`);
  }

  viewHeroes(id: any): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseURL}/heroes/${id}`);
  }
}
