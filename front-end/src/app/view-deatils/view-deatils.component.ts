import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverService } from '../services/DriverService';
import { Driver } from '../model/model.driver';

@Component({
  selector: 'app-view-deatils',
  templateUrl: './view-deatils.component.html',
  styleUrls: ['./view-deatils.component.css']
})
export class ViewDeatilsComponent implements OnInit {

  id: number;
  driver: Driver;

  constructor(private route: ActivatedRoute,private router: Router,
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
    this.router.navigate(['D-List']);
  }
}

