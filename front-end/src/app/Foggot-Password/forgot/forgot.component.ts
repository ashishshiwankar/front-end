import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/model.user';
import { ForgetService } from 'src/app/services/forget.serveice';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  user: User = new User();
  errorMessage: string;

  constructor(public passService: ForgetService, public router: Router) {
  }

  ngOnInit() {
  }

  changed() {
    this.passService.passAccount(this.user).subscribe(data => {
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
        this.errorMessage = 'facing error';
      }
    );
  }
}
