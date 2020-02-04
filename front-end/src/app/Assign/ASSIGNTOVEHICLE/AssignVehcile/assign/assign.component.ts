import { Component, OnInit } from '@angular/core';
import { UserMst } from 'src/app/model/model.userMst';
import { ApprovelHisytory } from 'src/app/model/ApprovelHisytory';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprovelService } from 'src/app/services/approvelService';
import { Vehicle } from 'src/app/model/model.vehicle';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {

  employees: Observable<UserMst[]>;
  approvalhistoryid: number;
  approvelHisytory: ApprovelHisytory;
  userMsts: UserMst[];
  vehicles: Vehicle[];
  //vehicles: Observable<any>;
  

 
 

  constructor(private route: ActivatedRoute,
    private router: Router,
    private approvelService: ApprovelService) { }


    ngAfterViewInit(){
      this.reloadData();
    
    }

    reloadData() {
      this.approvelService.getVehicleList().subscribe(
        data => {
          this.vehicles = data;
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
    this.approvelService.updateAssigntoVehcile(this.approvalhistoryid, this.approvelHisytory)
      .subscribe(data => console.log(data), error => console.log(error));
    this.approvelHisytory = new ApprovelHisytory();
    this.gotoList();
  }

  onSubmit() {
    this.updateApp();    
  }

  gotoList() {
    this.router.navigate(['AssignVehcile']);
  }





}
