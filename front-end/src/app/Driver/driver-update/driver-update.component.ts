import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/model/model.driver';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverService } from 'src/app/services/DriverService';


@Component({
  selector: 'app-driver-update',
  templateUrl: './driver-update.component.html',
  styleUrls: ['./driver-update.component.css']
})
export class DriverUpdateComponent implements OnInit {

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

  updateDriver() {
    this.driverService.updateDriver(this.id, this.driver)
      .subscribe(data => console.log(data), error => console.log(error));
    this.driver = new Driver();
    this.gotoList();
  }

  onSubmit() {
    this.updateDriver();    
  }

  gotoList() {
    this.router.navigate(['D-List']);
  }
}
