import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from '../model/model.user';
import {Http} from '@angular/http';
import {AppComponent} from '../app.component';
import { Observable } from 'rxjs';


@Injectable()
export class AccountService {
  constructor(public http: HttpClient) { }

  
  private baseUrl = 'http://localhost:3000';

  createAccount(user: User) {
    return this.http.post(AppComponent.API_URL + '/account/register', user);
  }

  updateUsers(tokenid: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl+'/account/update2'}/${tokenid}`, value);
  }

  updateUsersBytoken(confirmationToken: String, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl+'/account/update1'}/${confirmationToken}`, value);
  }


  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl + '/account/getOne'}/${id}`);
  }

}
