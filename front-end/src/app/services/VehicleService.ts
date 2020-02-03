import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Http} from '@angular/http';
import {AppComponent} from '../app.component';
import { Observable } from 'rxjs';
import { Vehicle } from '../model/model.vehicle';

@Injectable()
export class VehicleService {
  
  constructor(public http: HttpClient) { }

  createVehicle(vehicle: Vehicle) {
    return this.http.post(AppComponent.API_URL + '/vehicle/add', vehicle);
  }

   private baseUrl = 'http://localhost:3000';

  getVehicle(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl + '/vehicle/vehicleEditData'}/${id}`);
  }

  updateVehicle(vehicleid: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl+'/vehicle/assingvehicle'}/${vehicleid}`, value);
  }

  deleteVehicle(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl +'/vehicle/delete'}/${id}`, { responseType: 'text' });
  }

  getVehicleList(): Observable<any> {
    return this.http.get(`${this.baseUrl+'/vehicle/vehicleList'}`);
  }
}
