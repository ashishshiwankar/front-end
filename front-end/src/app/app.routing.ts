import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DriverComponent } from './Driver/driver/driver.component';
import { VehicleComponent } from './VEHICLE/vehicle/vehicle.component';
import { UsergroupComponent } from './UserGroup/usergroup/usergroup.component';
import { DriverListComponent } from './Driver/driver-list/driver-list.component';
import { ViewDeatilsComponent } from './view-deatils/view-deatils.component';
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


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'addDriver', component: DriverComponent},
  { path: 'addVehicle', component: VehicleComponent },
  { path: 'addUsergroup', component: UsergroupComponent },
  { path: 'D-List', component: DriverListComponent },
  { path: 'details/:id', component: ViewDeatilsComponent },
  { path: 'updateDetail/:id', component: DriverUpdateComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'pass/:tokenid', component: PasswordchangeComponent },
  { path: 'pass1/:confirmationToken', component: PasswordchangeComponent },
  { path: 'v-list', component: VehiclelistComponent },
  { path: 'driverassign/:vehicleid', component:DriverassignComponent },
  { path: 'assing', component:DriverassignComponent },
  { path: 'req', component:CreateRequestComponent },
  { path: 'reqlist', component:RequestListComponent },
  { path: 'users', component:UserMstListComponent },
  { path: 'createUser', component:UserMstComponent },
  { path: 'groupList', component:UsergroupListComponent },
  { path: 'createZone', component:CreatezoneComponent },
  { path: 'zonelist', component:ZonelistComponent },
  { path: 'customer', component:CustomerComponent },
  { path: 'customerlist', component:CustomerlistComponent },
  { path: 'signup', component:SignupComponent },
  
  { path: 'signiii', component:SigninComponent },
  { path: 'assignRe', component:AssignReqToSupervComponent },
  { path: 'tosupvisor', component:AssignSupComponent },
  { path: 'tosupvisor/:approvalhistoryid', component:AssignSupComponent },
  { path: 'suphome', component:SupHomeComponent },
  { path: 'supRequest', component:RequestSupListComponent },
  { path: 'supRequest/:useremail', component:RequestSupListComponent },
  { path: 'details1/:approvalhistoryid', component:EditListComponent },
  { path: 'tosupvisor1/:approvalhistoryid', component:AssignToPcmcComponent },
  { path: 'tosupvisor', component:AssignToPcmcComponent },
  { path: 'backtopcmc', component:AssignreqtopcmcsuperComponent },
  { path: 'pcmcHone', component:PcmcHomeComponent },
  { path: 'supRequestpcmc/:useremail', component:IncomingRequestComponent },
  { path: 'AssignVehcile', component:AssignRequestToVehcileComponent },
  { path: 'tovechile/:approvalhistoryid', component:AssignComponent },

 
  
 
  // otherwise redirect to profiles
  { path: '**', redirectTo: '/not-found' }
];

export const routing = RouterModule.forRoot(appRoutes);
