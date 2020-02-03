import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from 'src/app/services/DriverService';
import { Driver } from 'src/app/model/model.driver';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/services/tokenstorage';

@Component({
  selector: 'app-sup-home',
  templateUrl: './sup-home.component.html',
  styleUrls: ['./sup-home.component.css']
})
export class SupHomeComponent implements OnInit {

  employees: Observable<Driver[]>;
  drivers: Observable<any>;
  currentUser: any;
  tokenStorageService: any;
  constructor(private driverService: DriverService,
    private router: Router,private token: TokenStorageService) {}

 

  reloadData() {
    this.currentUser = this.token.getUser();
  }


  ngOnInit() {
    this.reloadData();
  }

  deleteDriver(id: number) {
    this.driverService.deleteDriver(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  approvelDetails(useremail: String){
    this.router.navigate(['supRequest', useremail]);
  }


  updateDetails(id: number){
    this.router.navigate(['updateDetail', id]);
  }
//pcmc
  approvelDetailspcmc(useremail: String){
    this.router.navigate(['supRequestpcmc', useremail]);
  }

}


