import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Driver} from '../model/model.driver';
import {Http} from '@angular/http';
import {AppComponent} from '../app.component';
import { Observable } from 'rxjs';
import { Customer } from '../model/model.customer';

@Injectable()
export class CustomerService {
  AppComponent: any;
  constructor(public http: HttpClient) { }

  createCustomer(customer: Customer) {
    return this.http.post(AppComponent.API_URL + '/apicust/customer', customer);
  }





   private baseUrl = 'http://localhost:3000';



  getCustomer(custId: number): Observable<any> {
    return this.http.get(`${this.baseUrl + '/apicust/getOne'}/${custId}`);
  }

 
  updateCustomer(custId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl+'/apicust/update'}/${custId}`, value);
  }

  deleteCustomer(custId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl +'/apicust/delete'}/${custId}`, { responseType: 'text' });
  }

  getCustomerList(): Observable<any> {
    return this.http.get(`${this.baseUrl+'/apicust/List'}`);
  }
}
