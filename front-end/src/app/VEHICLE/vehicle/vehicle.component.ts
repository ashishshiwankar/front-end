import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Vehicle } from 'src/app/model/model.vehicle';
import { VehicleService } from 'src/app/services/VehicleService';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicle: Vehicle = new Vehicle();
  errorMessage: string;

  constructor(public vehicleService: VehicleService, public router: Router) {
  }

  ngOnInit() {
  }

  registerVehicle() {
    this.vehicleService.createVehicle(this.vehicle).subscribe(data => {
        this.router.navigate(['D-List']);
      }, err => {
        console.log(err);
        this.errorMessage = 'username already exist';
      }
    );
  }
}
