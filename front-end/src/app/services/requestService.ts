import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Http} from '@angular/http';
import {AppComponent} from '../app.component';
import { Observable } from 'rxjs';
import { Vehicle } from '../model/model.vehicle';
import { RequestMst } from '../model/model.requestmst';


@Injectable()
export class RequestService {
  
  constructor(public http: HttpClient) { }

  createRequest(requestMst: RequestMst) {
    return this.http.post(AppComponent.API_URL + '/requst/add', requestMst);
  }

   private baseUrl = 'http://localhost:3000';

  getRequest(requestmasterid: number): Observable<any> {
    return this.http.get(`${this.baseUrl + '/requst/getOne'}/${requestmasterid}`);
  }

  updateRequest(requestmasterid: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl+'/requst/assingvehicle'}/${requestmasterid}`, value);
  }

  deleteRequest(requestmasterid: number): Observable<any> {
    return this.http.delete(`${this.baseUrl +'/requst/delete'}/${requestmasterid}`, { responseType: 'text' });
  }

  getRequestList(): Observable<any> {
    return this.http.get(`${this.baseUrl+'/requst/list'}`);
  }
}
