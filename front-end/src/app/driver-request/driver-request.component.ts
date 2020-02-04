import { Component, OnInit } from '@angular/core';
import { RequestMst } from '../model/model.requestmst';
import { Observable } from 'rxjs';
import { RequestService } from '../services/requestService';
import {ActivatedRoute, Router} from '@angular/router';
import { Trip } from '../model/Trip';
import {ApprovelHisytory} from '../model/ApprovelHisytory';

@Component({
  selector: 'app-driver-request',
  templateUrl: './driver-request.component.html',
  styleUrls: ['./driver-request.component.css']
})
export class DriverRequestComponent implements OnInit {

  employees: Observable<RequestMst[]>;
  requestMsts: Observable<any>;

  trip: Trip = new Trip();
  errorMessage: string;
  useremail: String;

  approvelHisytories: ApprovelHisytory[];

  constructor(private requestService: RequestService, private router: Router,private route: ActivatedRoute) {}



  reloadData() {
    //this.approvelHisytory = new ApprovelHisytory();

    this.useremail = this.route.snapshot.params['useremail'];

    this.requestService.getRequestList1(this.useremail)
      .subscribe(data => {
        console.log(data)
        this.approvelHisytories = data;
      }, error => console.log(error));
  }


  ngOnInit(){
    this. reloadData();
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


  start(requestmasterid: number,requestnumber: String) {
    this.requestService.startTrip1(requestmasterid,requestnumber)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }





}


