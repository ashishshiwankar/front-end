import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserMst } from 'src/app/model/model.userMst';
import { UserMstService } from 'src/app/services/userMst.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UserMstComponent implements OnInit {

  userMst: UserMst = new UserMst();
  errorMessage: string;

  constructor(public mstService: UserMstService, public router: Router) {
  }

  ngOnInit() {
  }

  registerUserMst() {
    this.mstService.createUserMst(this.userMst).subscribe(data => {
        this.router.navigate(['users']);
      }, err => {
        console.log(err);
        this.errorMessage = 'username already exist';
      }
    );
  }
}
