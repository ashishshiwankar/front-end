import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Http} from '@angular/http';
import {AppComponent} from '../app.component';
import { Observable } from 'rxjs';
import { Vehicle } from '../model/model.vehicle';
import { Zone } from '../model/model.zone';
import { ZoneAssign } from '../model/ZoneAssign';

@Injectable()
export class ZoneService {
  
  constructor(public http: HttpClient) { }

  createZone(zone: Zone) {
    return this.http.post(AppComponent.API_URL + '/api/zone', zone);
  }

   private baseUrl = 'http://localhost:3000';



  deleteZo(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl +'/api/delete'}/${id}`, { responseType: 'text' });
  }

  getZoneList(): Observable<any> {
    return this.http.get(`${this.baseUrl+'/api/zonelist'}`);
  }


  getZoneOfferList(): Observable<any> {
    return this.http.get(`${this.baseUrl+'/apizone/listzoneusers'}`);
  }

  creatmapping(zoneAssign: ZoneAssign) {
    return this.http.post(AppComponent.API_URL + '/apizone/zoneassign', zoneAssign);
  }


  
  getzoneAssignList(): Observable<any> {
    return this.http.get(`${this.baseUrl+'/apizone/assignList'}`);
  }

  
}
