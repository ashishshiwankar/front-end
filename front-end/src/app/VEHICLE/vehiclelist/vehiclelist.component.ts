import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/model/model.vehicle';
import { VehicleService } from 'src/app/services/VehicleService';


@Component({
  selector: 'app-vehiclelist',
  templateUrl: './vehiclelist.component.html',
  styleUrls: ['./vehiclelist.component.css']
})
export class VehiclelistComponent implements OnInit {

  employees: Observable<Vehicle[]>;
  vehicles: Observable<any>;

  constructor(private vehicleService: VehicleService,
    private router: Router) {}

 

  reloadData() {
    this.vehicles = this.vehicleService.getVehicleList();
  }

  ngOnInit() {
    this.reloadData();
  }

  deleteDriver(vehicleid: number) {
    this.vehicleService.deleteVehicle(vehicleid)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  vihcileDetails(vehicleid: number){
    this.router.navigate(['details', vehicleid]);
  }

  updateme(vehicleid: number){
    this.router.navigate(['driverassign', vehicleid]);
  }
}


