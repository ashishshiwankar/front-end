import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { UserGroup } from 'src/app/model/model.usergroup';
import { UserGroupService } from 'src/app/services/UserGroupService';

@Component({
  selector: 'app-usergroup-list',
  templateUrl: './usergroup-list.component.html',
  styleUrls: ['./usergroup-list.component.css']
})
export class UsergroupListComponent implements OnInit {

  employees: Observable<UserGroup[]>;
  userGroups: Observable<any>;

  constructor(private groupService: UserGroupService,
    private router: Router) {}

 

  reloadData() {
    this.userGroups = this.groupService.getGroupList();
  }


  ngOnInit() {
    this.reloadData();
  }

  deletegroupMst(id: number) {
    this.groupService.deleteGroup(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  groupDetails(id: number){
    this.router.navigate(['details', id]);
  }


  updategroupDetails(id: number){
    this.router.navigate(['updateDetail', id]);
  }
}


