import { Component, OnInit } from '@angular/core';
import { RequestMst } from 'src/app/model/model.requestmst';
import { RequestService } from 'src/app/services/requestService';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  employees: Observable<RequestMst[]>;
  requestMsts: Observable<any>;

  constructor(private requestService: RequestService, private router: Router) {}

 

  reloadData() {
    this.requestMsts = this.requestService.getRequestList();
  }

  ngOnInit() {
    this.reloadData();
  }

  deleteDriver(requestmasterid: number) {
    this.requestService.deleteRequest(requestmasterid)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  driverDetails(requestmasterid: number){
    this.router.navigate(['details', requestmasterid]);
  }


  updateDetails(requestmasterid: number){
    this.router.navigate(['updateDetail', requestmasterid]);
  }
}


