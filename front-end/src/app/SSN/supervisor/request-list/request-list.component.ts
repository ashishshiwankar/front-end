import { Component, OnInit } from '@angular/core';
import { ApprovelHisytory } from 'src/app/model/ApprovelHisytory';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprovelService } from 'src/app/services/approvelService';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestSupListComponent implements OnInit {
  approvalhistoryid:number;
  useremail: String;
  supervisorid:number;
  approvelHisytory:ApprovelHisytory;
  approvelHisytories: ApprovelHisytory[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private approvelService: ApprovelService) { }

  
  reloadData() {
    this.approvelHisytory = new ApprovelHisytory();

    this.useremail = this.route.snapshot.params['useremail'];
    
    this.approvelService.validateUser(this.useremail)
      .subscribe(data => {
        console.log(data)
        this.approvelHisytories = data;
      }, error => console.log(error));
  }


  ngOnInit(){
    this. reloadData();
  }


// still not using
  updateAPpriver() {
    this.approvelService.updateApprovel(this.supervisorid, this.approvelHisytory)
      .subscribe(data => console.log(data), error => console.log(error));
    this.approvelHisytory = new ApprovelHisytory();
    this.gotoList();
  }

 // onSubmit() {
   //// this.updateAPpriver();    
  //}

  gotoList() {
    this.router.navigate(['D-List']);
  }

  ApprovelDetails(approvalhistoryid: number){
    this.router.navigate(['details1', approvalhistoryid]);
  }

///


  ApprovedDriver() {
    this.approvelService.ApprpovedApprovel(this.approvalhistoryid, this.approvelHisytory)
      .subscribe(
        data => {
          console.log(data);
          this.approvelHisytory = new ApprovelHisytory();
          this.ngOnInit();
        },
        error => console.log(error));
  }


  rejectDDriver() {
    this.approvelService.rejectApprovel(this.approvalhistoryid,this.approvelHisytory)
      .subscribe(
        data => {
          console.log(data);
          this.approvelHisytory = new ApprovelHisytory();
          this.ngOnInit();
        },
        error => console.log(error));
  }


  
  onSubmit() {
    this.  ApprovedDriver();    
  }



//working for approved or reject
  
  deleteDriver(approvalhistoryid: number) {
    this.approvelService.deleteDriver(approvalhistoryid)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


 
  rejectDriver(approvalhistoryid: number) {
    this.approvelService.rejectRequest(approvalhistoryid)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
