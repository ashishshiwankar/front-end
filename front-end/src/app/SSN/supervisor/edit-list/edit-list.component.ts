import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprovelService } from 'src/app/services/approvelService';
import { ApprovelHisytory } from 'src/app/model/ApprovelHisytory';
import { UserMst } from 'src/app/model/model.userMst';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  approvalhistoryid;
  requestmasterid;
  requestnumber;
  approvelHisytory: ApprovelHisytory;
  //approvelHisytories: ApprovelHisytory[];
  approvelHisytorys: ApprovelHisytory[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private driverService: ApprovelService) { }






  ngOnInit() {
    this.approvelHisytory = new ApprovelHisytory();

    this.approvalhistoryid = this.route.snapshot.params['approvalhistoryid'];
    
    this.driverService.getAppprovwl(this.approvalhistoryid)
      .subscribe(data => {
        console.log(data)
        this.approvelHisytorys = data;
        //this.approvalhistoryid = data.approvalhistoryid;
        //this.requestmasterid = data.requestmasterid;
        //this.requestnumber = data.requestnumber;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['drivers']);
  }
}
