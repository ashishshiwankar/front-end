import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Driver} from '../model/model.driver';
import {Http} from '@angular/http';
import {AppComponent} from '../app.component';
import { Observable } from 'rxjs';
import { UserMst } from '../model/model.userMst';
import { ApprovelHisytory } from '../model/ApprovelHisytory';

@Injectable()
export class ApprovelService {
  AppComponent: any;
  constructor(public http: HttpClient,private  httpClient:HttpClient) { }

  createApprovel(approvelHisytory: ApprovelHisytory) {
    return this.http.post(AppComponent.API_URL + '/approvel/assigne', approvelHisytory);
  }



   private baseUrl = 'http://localhost:3000';



  getAppprovwl(approvalhistoryid: number): Observable<any> {
    return this.http.get(`${this.baseUrl + '/approvel/approvelList1'}/${approvalhistoryid}`);
  }

  getAppprovwlBySupvisoremail(useremail: String): Observable<any> {
    return this.http.get(`${this.baseUrl + '/approvel/data?useremail=+useremail'}`);
  }


  
 
  updateApprovel(approvalhistoryid: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl+'/approvel/update'}/${approvalhistoryid}`, value);
  }

 

  getUserSuperVList(): Observable<any> {
    return this.http.get(`${this.baseUrl+'/approvel/listsuperisor'}`);
  }

  getApprovelList(): Observable<any> {
    return this.http.get(`${this.baseUrl+'/approvel/approvelList'}`);
  }


 
 
  public validateUser(useremail:String):Observable<any>{
    return  this.httpClient.get(this.baseUrl+"/approvel/data?useremail="+useremail);

}

///jiooo
ApprpovedApprovel(approvalhistoryid: number ,value: any): Observable<Object> {
  return this.http.put(`${this.baseUrl +'/approvel/approved'}/${approvalhistoryid}`, value);
}

rejectApprovel(approvalhistoryid: number, value: any): Observable<Object> {
  return this.http.put(`${this.baseUrl+'/approvel/reject'}/${approvalhistoryid}`, value);
}

/// working for approved or reject
deleteDriver(approvalhistoryid: number): Observable<any> {
  return this.http.put(`${this.baseUrl +'/approvel/approved'}/${approvalhistoryid}`, { responseType: 'text' });
}

rejectRequest(approvalhistoryid: number): Observable<any> {
  return this.http.put(`${this.baseUrl +'/approvel/reject'}/${approvalhistoryid}`, { responseType: 'text' });
}

// for pcmc



getUserSuperPCMCVList(): Observable<any> {
  return this.http.get(`${this.baseUrl+'/approvel/listpcmc'}`);
}

getApprovelList1(): Observable<any> {
  return this.http.get(`${this.baseUrl+'/approvel/ApprovedListBySuperVisor'}`);
}


updateApprovelpcmc(approvalhistoryid: number, value: any): Observable<Object> {
  return this.http.put(`${this.baseUrl+'/approvel/updatebypcmc'}/${approvalhistoryid}`, value);
}


public validateUser1(useremail:String):Observable<any>{
  return  this.httpClient.get(this.baseUrl+"/approvel/datapcmcc?useremail="+useremail);

}

deleteDriver1(approvalhistoryid: number): Observable<any> {
  return this.http.put(`${this.baseUrl +'/approvel/approvedpcmc'}/${approvalhistoryid}`, { responseType: 'text' });
}

rejectRequest1(approvalhistoryid: number): Observable<any> {
  return this.http.put(`${this.baseUrl +'/approvel/rejectpcmc'}/${approvalhistoryid}`, { responseType: 'text' });
}

//final segments
getApprovelFinalList(): Observable<any> {
  return this.http.get(`${this.baseUrl+'/approvel/finalList'}`);
}


getTRejectFinalList(): Observable<any> {
  return this.http.get(`${this.baseUrl+'/approvel/rejecrList'}`);
}


getVehicleList(): Observable<any> {
  return this.http.get(`${this.baseUrl+'/approvel/vehicleList'}`);
}


updateAssigntoVehcile(approvalhistoryid: number, value: any): Observable<Object> {
  return this.http.put(`${this.baseUrl+'/approvel/assignRequestToVeh'}/${approvalhistoryid}`, value);
}
}