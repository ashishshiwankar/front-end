import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/model/model.driver';
import { DriverService } from 'src/app/services/DriverService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  driver: Driver = new Driver();
  errorMessage: string;

  constructor(public driverService: DriverService, public router: Router) {
  }

  ngOnInit() {
  }

  registerDriver() {
    this.driverService.createDriver(this.driver).subscribe(data => {
        this.router.navigate(['D-List']);
      }, err => {
        console.log(err);
        this.errorMessage = 'username already exist';
      }
    );
  }
}
