import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { Zone } from 'src/app/model/model.zone';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'app-zonelist',
  templateUrl: './zonelist.component.html',
  styleUrls: ['./zonelist.component.css']
})
export class ZonelistComponent implements OnInit {

  employees: Observable<Zone[]>;
  zones: Observable<any>;

  constructor(private zoneService: ZoneService,
    private router: Router) {}

 

  reloadData() {
    this.zones = this.zoneService.getZoneList();
  }

  ngOnInit() {
    this.reloadData();
  }

  deleteZone(id: number) {
    this.zoneService.deleteZo(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  zoneDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updatezone(id: number){
    this.router.navigate(['driverassign', id]);
  }
}


