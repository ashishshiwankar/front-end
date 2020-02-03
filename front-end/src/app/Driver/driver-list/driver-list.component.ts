import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { Driver } from 'src/app/model/model.driver';
import { DriverService } from 'src/app/services/DriverService';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

  employees: Observable<Driver[]>;
  drivers: Observable<any>;

  constructor(private driverService: DriverService,
    private router: Router) {}

 

  reloadData() {
    this.drivers = this.driverService.getDriverList();
  }


  ngOnInit() {
    this.reloadData();
  }

  deleteDriver(id: number) {
    this.driverService.deleteDriver(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  driverDetails(id: number){
    this.router.navigate(['details', id]);
  }


  updateDetails(id: number){
    this.router.navigate(['updateDetail', id]);
  }
}


