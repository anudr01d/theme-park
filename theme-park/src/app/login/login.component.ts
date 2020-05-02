import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { AppUser } from './../interfaces/app-user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  appUser: AppUser;

  constructor(private authService: AuthService, private router: Router) { }

  login () {
    this.authService.login();
  }

  async ngOnInit() {
    this.authService.appUser$.subscribe(appUser => {
      this.appUser = appUser
      if(this.appUser) {
        this.router.navigate(['/home']);
      }
    });
  }

}
