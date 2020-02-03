import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Driver} from '../model/model.driver';
import {Http} from '@angular/http';
import {AppComponent} from '../app.component';
import { Observable } from 'rxjs';

@Injectable()
export class DriverService {
  AppComponent: any;
  constructor(public http: HttpClient) { }

  createDriver(driver: Driver) {
    return this.http.post(AppComponent.API_URL + '/account/register2', driver);
  }





   private baseUrl = 'http://localhost:3000';



  getDriver(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl + '/account/getOne'}/${id}`);
  }

 
  updateDriver(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl+'/account/update'}/${id}`, value);
  }

  deleteDriver(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl +'/account/delete'}/${id}`, { responseType: 'text' });
  }

  getDriverList(): Observable<any> {
    return this.http.get(`${this.baseUrl+'/account/List'}`);
  }
}
