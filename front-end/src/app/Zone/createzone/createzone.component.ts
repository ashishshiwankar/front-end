import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ZoneService } from 'src/app/services/zone.service';
import { Zone } from 'src/app/model/model.zone';

@Component({
  selector: 'app-createzone',
  templateUrl: './createzone.component.html',
  styleUrls: ['./createzone.component.css']
})
export class CreatezoneComponent implements OnInit {

  zone: Zone = new Zone();
  errorMessage: string;

  constructor(public zoneService: ZoneService, public router: Router) {
  }

  ngOnInit() {
  }

  registerZone() {
    this.zoneService.createZone(this.zone).subscribe(data => {
        this.router.navigate(['zonelist']);
      }, err => {
        console.log(err);
        this.errorMessage = 'username already exist';
      }
    );
  }
}