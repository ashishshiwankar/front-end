import { Component, OnInit } from '@angular/core';
import { ApprovelHisytory } from 'src/app/model/ApprovelHisytory';
import { Observable } from 'rxjs';
import { RequestService } from 'src/app/services/requestService';
import { Router } from '@angular/router';
import { ApprovelService } from 'src/app/services/approvelService';


@Component({
  selector: 'app-assign-request-to-vehcile',
  templateUrl: './assign-request-to-vehcile.component.html',
  styleUrls: ['./assign-request-to-vehcile.component.css']
})
export class AssignRequestToVehcileComponent implements OnInit {

  employees: Observable<ApprovelHisytory[]>;
  approvelHisytorys: Observable<any>;
  requestMsts: Observable<any>;
  userMsts: Observable<any>;
  

  constructor(private requestService: RequestService,
     private router: Router,
    private approvelService:ApprovelService ) {}

 






  reloadData() {

    this.approvelHisytorys = this.approvelService.getApprovelFinalList();

  }

  ngOnInit() {
    this.reloadData();
  }

  ApprovelDetails(approvalhistoryid: number){
    this.router.navigate(['updData', approvalhistoryid]);
  }

  AssisnToVEhcile(approvalhistoryid: number){
    this.router.navigate(['tovechile', approvalhistoryid]);
  }

}


