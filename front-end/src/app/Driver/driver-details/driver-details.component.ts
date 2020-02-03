import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from 'src/app/model/model.driver';
import { DriverService } from 'src/app/services/DriverService';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {

  id: number;
  driver: Driver;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private driverService: DriverService) { }



  ngOnInit() {
    this.driver = new Driver();

    this.id = this.route.snapshot.params['id'];
    
    this.driverService.getDriver(this.id)
      .subscribe(data => {
        console.log(data)
        this.driver = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['drivers']);
  }
}