import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserGroup } from 'src/app/model/model.usergroup';
import { UserGroupService } from 'src/app/services/UserGroupService';

@Component({
  selector: 'app-usergroup',
  templateUrl: './usergroup.component.html',
  styleUrls: ['./usergroup.component.css']
})
export class UsergroupComponent implements OnInit {

  group: UserGroup = new UserGroup();
  errorMessage: string;

  constructor(public userGroupService: UserGroupService, public router: Router) {
  }

  ngOnInit() {
  }

  registerGroup() {
    this.userGroupService.createUserGroup(this.group).subscribe(data => {
        this.router.navigate(['D-List']);
      }, err => {
        console.log(err);
        this.errorMessage = 'username already exist';
      }
    );
  }
}

