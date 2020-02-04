import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Http} from '@angular/http';
import {AppComponent} from '../app.component';
import { Observable } from 'rxjs';
import { Vehicle } from '../model/model.vehicle';
import { RequestMst } from '../model/model.requestmst';
import { Trip } from '../model/Trip';

@Injectable()
export class RequestService {
  
  constructor(public http: HttpClient,private  httpClient:HttpClient) { }

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


  public getRequestList2(useremail: String): Observable<any>  {
    return this.http.get(`${this.baseUrl+'/trip/getTrip?useremail="+useremail'}`);
  }



  public getRequestList1(useremail:String):Observable<any>{
    return  this.httpClient.get(this.baseUrl+"/trip/getTrip?useremail="+useremail);

  }

  //getAppprovwlBySupvisoremail(useremail: String): Observable<any> {
  //  return this.http.get(`${this.baseUrl + '/approvel/data?useremail=+useremail'}`);
 // }


  startTrip(trip: Trip) {
    return this.http.post(AppComponent.API_URL + '/trip/start', trip);
  }

  startTrip1(requestmasterid: number,requestnumber: String): Observable<Object> {
  //  return this.http.get(`${this.baseUrl + "/trip/start?requestmasterid="+requestmasterid+"&requestnumber="+requestnumber"}`);
    return  this.http.get(this.baseUrl+"/trip/start?requestmasterid="+requestmasterid+"&requestnumber="+requestnumber);
  }

  }
