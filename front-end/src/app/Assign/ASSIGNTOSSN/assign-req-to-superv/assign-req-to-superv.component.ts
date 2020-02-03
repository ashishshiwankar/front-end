import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { ApprovelHisytory } from 'src/app/model/ApprovelHisytory';
import { RequestService } from 'src/app/services/requestService';
import { ApprovelService } from 'src/app/services/approvelService';

@Component({
  selector: 'app-assign-req-to-superv',
  templateUrl: './assign-req-to-superv.component.html',
  styleUrls: ['./assign-req-to-superv.component.css']
})
export class AssignReqToSupervComponent implements OnInit {

  employees: Observable<ApprovelHisytory[]>;
  approvelHisytorys: Observable<any>;
  requestMsts: Observable<any>;
  userMsts: Observable<any>;
  

  constructor(private requestService: RequestService,
     private router: Router,
    private approvelService:ApprovelService ) {}

 






  reloadData() {
    this.requestMsts = this.requestService.getRequestList();
    this.userMsts = this.approvelService.getUserSuperVList();
    this.approvelHisytorys = this.approvelService.getApprovelList();
    
  }

  ngOnInit() {
    this.reloadData();
  }




  ApprovelDetails(approvalhistoryid: number){
    this.router.navigate(['details', approvalhistoryid]);
  }

  Approvelupdateme(approvalhistoryid: number){
    this.router.navigate(['tosupvisor', approvalhistoryid]);
  }

}


