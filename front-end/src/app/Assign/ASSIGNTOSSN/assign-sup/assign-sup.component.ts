import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { UserMst } from 'src/app/model/model.userMst';
import { ApprovelHisytory } from 'src/app/model/ApprovelHisytory';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprovelService } from 'src/app/services/approvelService';


@Component({
  selector: 'app-assign-sup',
  templateUrl: './assign-sup.component.html',
  styleUrls: ['./assign-sup.component.css']
})
export class AssignSupComponent implements OnInit {

  employees: Observable<UserMst[]>;
  approvalhistoryid: number;
  approvelHisytory: ApprovelHisytory;
  userMsts: UserMst[];
  

 
 

  constructor(private route: ActivatedRoute,
    private router: Router,
    private approvelService: ApprovelService) { }


    ngAfterViewInit(){
      this.reloadData();
    
    }

    reloadData() {
      this.approvelService.getUserSuperVList().subscribe(
        data => {
          this.userMsts = data;
          setTimeout(function () {
          
          }, 1000);
        },
        error => {
  
        }
      );
  
      
    }

   

  

  ngOnInit() {
    
    this.approvelHisytory = new ApprovelHisytory();

    this.approvalhistoryid = this.route.snapshot.params['approvalhistoryid'];
    
    this.approvelService.getAppprovwl(this.approvalhistoryid)
      .subscribe(data => {
        console.log(data)
        this.approvelHisytory = data;
      }, error => console.log(error));

  
  }

  updateApp() {
    this.approvelService.updateApprovel(this.approvalhistoryid, this.approvelHisytory)
      .subscribe(data => console.log(data), error => console.log(error));
    this.approvelHisytory = new ApprovelHisytory();
    this.gotoList();
  }

  onSubmit() {
    this.updateApp();    
  }

  gotoList() {
    this.router.navigate(['assignRe']);
  }





}
