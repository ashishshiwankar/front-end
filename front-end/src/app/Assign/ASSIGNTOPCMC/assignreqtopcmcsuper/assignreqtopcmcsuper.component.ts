import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ApprovelHisytory } from 'src/app/model/ApprovelHisytory';
import { RequestService } from 'src/app/services/requestService';
import { Router } from '@angular/router';
import { ApprovelService } from 'src/app/services/approvelService';


@Component({
  selector: 'app-assignreqtopcmcsuper',
  templateUrl: './assignreqtopcmcsuper.component.html',
  styleUrls: ['./assignreqtopcmcsuper.component.css']
})
export class AssignreqtopcmcsuperComponent implements OnInit {

  employees: Observable<ApprovelHisytory[]>;
  approvelHisytorys: Observable<any>;
 
  //approvelHisytorys: OApprovelHisytory[];
 

  constructor(private requestService: RequestService,
     private router: Router,
    private approvelService:ApprovelService ) {}

 





  reloadData() {

    this.approvelHisytorys = this.approvelService.getApprovelList1();
    
  }

  ngOnInit() {
    this.reloadData();
  }


  




  ApprovelDetails(approvalhistoryid: number){
    this.router.navigate(['updData', approvalhistoryid]);
  }

  Approvelupdateme(approvalhistoryid: number){
    this.router.navigate(['tosupvisor1', approvalhistoryid]);
  }

}


