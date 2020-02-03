import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../../model/model.user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SignIn } from 'src/app/model/signin';
import { AuthService1 } from 'src/app/services/AuthService1';
import { TokenStorageService } from 'src/app/services/tokenstorage';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService1, private tokenStorage: TokenStorageService,private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {

    
   // this.router.navigateByUrl('/pcmcHone');
    this.router.navigateByUrl('/suphome');
   // window.location.reload();
  }
}
