import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';

import {AccountService} from './services/account.service';
import { ProfileComponent } from './components/profile/profile.component';
import {routing} from './app.routing';
import {UrlPermission} from './urlPermission/url.permissions';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { ViewDeatilsComponent } from './view-deatils/view-deatils.component';
import { Routes, RouterModule } from '@angular/router';

import { DriverComponent } from './Driver/driver/driver.component';
import { VehicleComponent } from './VEHICLE/vehicle/vehicle.component';
import { UsergroupComponent } from './UserGroup/usergroup/usergroup.component';
import { DriverListComponent } from './Driver/driver-list/driver-list.component';

import { DriverUpdateComponent } from './Driver/driver-update/driver-update.component';
import { ForgotComponent } from './Foggot-Password/forgot/forgot.component';
import { PasswordchangeComponent } from './Foggot-Password/passwordchange/passwordchange.component';
import { VehiclelistComponent } from './VEHICLE/vehiclelist/vehiclelist.component';
import { DriverassignComponent } from './Driver/driverassign/driverassign.component';
import { RequestListComponent } from './Request/request/request-list/request-list.component';
import { CreateRequestComponent } from './Request/create-request/create-request.component';
import { ZonelistComponent } from './Zone/zonelist/zonelist.component';
import { UserMstComponent } from './User/users/users.component';
import { UserMstListComponent } from './User/user-mst-list/user-mst-list.component';
import { UsergroupListComponent } from './UserGroup/usergroup-list/usergroup-list.component';
import { CreatezoneComponent } from './Zone/createzone/createzone.component';
import { CustomerComponent } from './Customer/customer/customer.component';
import { CustomerlistComponent } from './Customer/customerlist/customerlist.component';
import { SignupComponent } from './LOGIN/signup/signup.component';
import { SigninComponent } from './LOGIN/signin/signin.component';
import { AssignReqToSupervComponent } from './Assign/ASSIGNTOSSN/assign-req-to-superv/assign-req-to-superv.component';
import { AssignSupComponent } from './Assign/ASSIGNTOSSN/assign-sup/assign-sup.component';
import { SupHomeComponent } from './SSN/supervisor/sup-home/sup-home.component';
import { RequestSupListComponent } from './SSN/supervisor/request-list/request-list.component';
import { EditListComponent } from './SSN/supervisor/edit-list/edit-list.component';
import { AssignToPcmcComponent } from './Assign/ASSIGNTOPCMC/assign-to-pcmc/assign-to-pcmc.component';
import { AssignreqtopcmcsuperComponent } from './Assign/ASSIGNTOPCMC/assignreqtopcmcsuper/assignreqtopcmcsuper.component';
import { PcmcHomeComponent } from './PCMC/pcmc/pcmc-home/pcmc-home.component';
import { IncomingRequestComponent } from './PCMC/pcmc/incoming-request/incoming-request.component';
import { AssignRequestToVehcileComponent } from './Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign-request-to-vehcile/assign-request-to-vehcile.component';
import { AssignComponent } from './Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign.component';
import { HeaderComponent } from './HEADER/header/header.component';
import { DriverDetailsComponent } from './Driver/driver-details/driver-details.component';
import { DriverService } from './services/DriverService';
import { VehicleService } from './services/VehicleService';
import { UserGroupService } from './services/UserGroupService';
import { RequestService } from './services/requestService';
import { ForgetService } from './services/forget.serveice';
import { UserMstService } from './services/userMst.service';
import { ZoneService } from './services/zone.service';
import { CustomerService } from './services/customer.service';
import { AuthService1 } from './services/AuthService1';
import { UserService1 } from './services/userserice';
import { ApprovelService } from './services/approvelService';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    LogoutComponent,
    NotFoundComponent,
    AddDetailsComponent,
    ViewDeatilsComponent,
    HeaderComponent,
    DriverComponent,
    VehicleComponent,
    UserMstComponent,
    UsergroupComponent,
    DriverListComponent,
    DriverDetailsComponent,
    DriverUpdateComponent,
    ForgotComponent,
    PasswordchangeComponent,
    DriverassignComponent,
    VehiclelistComponent,
    RequestListComponent,
    CreateRequestComponent,
    UserMstListComponent,
    UsergroupListComponent,
    CreatezoneComponent,
    ZonelistComponent,
    CustomerComponent,
    CustomerlistComponent,
    SignupComponent,
    SigninComponent,
    AssignReqToSupervComponent,
    AssignSupComponent,
    SupHomeComponent,
    RequestSupListComponent,
     EditListComponent, 
     AssignreqtopcmcsuperComponent, 
     AssignToPcmcComponent, 
     PcmcHomeComponent,
      IncomingRequestComponent,
       AssignRequestToVehcileComponent,
        AssignComponent 
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AccountService,
    UrlPermission,
    DriverService,
    VehicleService,
    UserGroupService,
    RequestService,
    ForgetService,
    UserMstService,
    ZoneService,
    CustomerService,
    AuthService1,
    UserService1,
    ApprovelService
  ],
 // providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
