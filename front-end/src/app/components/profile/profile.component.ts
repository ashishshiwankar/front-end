import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/tokenstorage';
import { Router } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  tokenStorageService: any;

  constructor(private token: TokenStorageService,public router: Router) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
  }

/// by me// now work
  //logOut() {
  
   // localStorage.removeItem('currentUser');
   // this.router.navigate(['/signiii']);
  //}



  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/signiii']);
    window.location.reload();
    
  }
}
 