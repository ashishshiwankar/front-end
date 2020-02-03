import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/model/model.vehicle';
import { UserMst } from 'src/app/model/model.userMst';
import { Driver } from 'src/app/model/model.driver';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from 'src/app/services/VehicleService';
import { DriverService } from 'src/app/services/DriverService';


@Component({
  selector: 'app-driverassign',
  templateUrl: './driverassign.component.html',
  styleUrls: ['./driverassign.component.css']
})
export class DriverassignComponent implements OnInit {

  vehicleid: number;
  vehicle: Vehicle;
  userMsts: UserMst[];
  vehicles: Vehicle[];
  drivers : Driver[]



  constructor(private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService,private driverService: DriverService) { }






    ngAfterViewInit(){
      this.reloadData();
    
    }

    reloadData() {
      this.driverService.getDriverList().subscribe(
        data => {
          this.drivers = data;
          setTimeout(function () {
          
          }, 1000);
        },
        error => {
  
        }
      );
  
      
    }

  ngOnInit() {
    this.vehicle = new Vehicle();

    this.vehicleid = this.route.snapshot.params['vehicleid'];
    
    this.vehicleService.getVehicle(this.vehicleid)
      .subscribe(data => {
        console.log(data)
        this.vehicle = data;
      }, error => console.log(error));
  }

  updateDriver() {
    this.vehicleService.updateVehicle(this.vehicleid, this.vehicle)
      .subscribe(data => console.log(data), error => console.log(error));
    this.vehicle = new Vehicle();
    this.gotoList();
  }

  onSubmit() {
    this.updateDriver();    
  }

  gotoList() {
    this.router.navigate(['v-list']);
  }
}
