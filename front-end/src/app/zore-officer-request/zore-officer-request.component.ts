import { Component, OnInit } from '@angular/core';
import { ApprovelHisytory } from '../model/ApprovelHisytory';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprovelService } from '../services/approvelService';

@Component({
  selector: 'app-zore-officer-request',
  templateUrl: './zore-officer-request.component.html',
  styleUrls: ['./zore-officer-request.component.css']
})
export class ZoreOfficerRequestComponent implements OnInit {

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
    
    this.approvelService.validateUserZone1(this.useremail)
      .subscribe(data => {
        console.log(data)
        this.approvelHisytories = data;
      }, error => console.log(error));
  }


  ngOnInit(){
    this. reloadData();
  }



  gotoList() {
    this.router.navigate(['D-List']);
  }

  ApprovelDetails(approvalhistoryid: number){
    this.router.navigate(['details1', approvalhistoryid]);
  }

///


  
  onSubmit() {
  
  }



//working for approved or reject
  
deleteDriver(approvalhistoryid: number) {
    this.approvelService.deleteDriver1(approvalhistoryid)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


 
  rejectDriver(approvalhistoryid: number) {
    this.approvelService.rejectRequest1(approvalhistoryid)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
