import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from '../model/model.user';
import {Http} from '@angular/http';
import {AppComponent} from '../app.component';

@Injectable()
export class ForgetService {
  constructor(public http: HttpClient) { }

  passAccount(user: User) {
    return this.http.post(AppComponent.API_URL + '/account/forggotpass', user);
  }
}
