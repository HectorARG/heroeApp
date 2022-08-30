import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogIn } from 'src/app/auth/interfaces/login.interfaces';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container {
      margin: 10px;
    }
  `]
})
export class HomeComponent implements OnInit {

  // auth!: LogIn;

  get auth() {
    return this.loginService.auth;
  }

  constructor( private router: Router,
               private loginService: LoginService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigate(['./auth/login'])
  }

}
