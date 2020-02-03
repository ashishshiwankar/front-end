import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Driver} from '../model/model.driver';
import {Http} from '@angular/http';
import {AppComponent} from '../app.component';
import { Observable } from 'rxjs';
import { Vehicle } from '../model/model.vehicle';
import { UserGroup } from '../model/model.usergroup';

@Injectable()
export class UserGroupService {
  AppComponent: any;
  constructor(public http: HttpClient) { }

  createUserGroup(usergroup: UserGroup) {
    return this.http.post(AppComponent.API_URL + '/usergroup/add', usergroup);
  }

   private baseUrl = 'http://localhost:3000';

  getGroup(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl + '/usergroup/listByone'}/${id}`);
  }

  updateGroup(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl+'/usergroup/update'}/${id}`, value);
  }

  deleteGroup(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl +'/usergroup/delete'}/${id}`, { responseType: 'text' });
  }

  getGroupList(): Observable<any> {
    return this.http.get(`${this.baseUrl+'/usergroup/list'}`);
  }
}
