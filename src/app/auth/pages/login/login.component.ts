import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogIn } from '../../interfaces/login.interfaces';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent{

  constructor( private router: Router,
               private loginService: LoginService) { }

  login(): void {
    this.loginService.usuarios().subscribe(resp => {
        console.log(resp);
        if( resp.id ){
          this.router.navigate(['./heroes']);
        }
    });
  }

}
