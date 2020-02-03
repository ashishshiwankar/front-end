import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserMstService } from 'src/app/services/userMst.service';
import { UserMst } from 'src/app/model/model.userMst';


@Component({
  selector: 'app-user-mst-list',
  templateUrl: './user-mst-list.component.html',
  styleUrls: ['./user-mst-list.component.css']
})
export class UserMstListComponent implements OnInit {

  employees: Observable<UserMst[]>;
  userMsts: Observable<any>;

  constructor(private userMstService: UserMstService,
    private router: Router) {}

 

  reloadData() {
    this.userMsts = this.userMstService.getUserList();
  }


  ngOnInit() {
    this.reloadData();
  }

  deleteUserMst(userid: number) {
    this.userMstService.deleteUser(userid)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  userDetails(userid: number){
    this.router.navigate(['details', userid]);
  }


  updateuserDetails(userid: number){
    this.router.navigate(['updateDetail', userid]);
  }
}


