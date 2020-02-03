import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Driver} from '../model/model.driver';
import {Http} from '@angular/http';
import {AppComponent} from '../app.component';
import { Observable } from 'rxjs';
import { UserMst } from '../model/model.userMst';

@Injectable()
export class UserMstService {
  AppComponent: any;
  constructor(public http: HttpClient) { }

  createUserMst(userMst: UserMst) {
    return this.http.post(AppComponent.API_URL + '/apiuser/user', userMst);
  }



   private baseUrl = 'http://localhost:3000';



  getUserMst(userid: number): Observable<any> {
    return this.http.get(`${this.baseUrl + '/apiuser/getOne'}/${userid}`);
  }

 
  updateUser(userid: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl+'/apiuser/update'}/${userid}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl +'/apiuser/delete'}/${id}`, { responseType: 'text' });
  }

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl+'/apiuser/userList'}`);
  }


}
