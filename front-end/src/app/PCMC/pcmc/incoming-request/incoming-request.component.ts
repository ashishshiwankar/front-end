import { Component, OnInit } from '@angular/core';
import { ApprovelHisytory } from 'src/app/model/ApprovelHisytory';
import { ApprovelService } from 'src/app/services/approvelService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-incoming-request',
  templateUrl: './incoming-request.component.html',
  styleUrls: ['./incoming-request.component.css']
})
export class IncomingRequestComponent implements OnInit {

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
    
    this.approvelService.validateUser1(this.useremail)
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
