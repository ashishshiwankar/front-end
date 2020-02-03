import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { Customer } from 'src/app/model/model.customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  employees: Observable<Customer[]>;
  customers: Observable<any>;

  constructor(private customerService: CustomerService,
    private router: Router) {}

 

  reloadData() {
    this.customers = this.customerService.getCustomerList();
  }


  ngOnInit() {
    this.reloadData();
  }

  deleteCust(custId: number) {
    this.customerService.deleteCustomer(custId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  custDetails(custId: number){
    this.router.navigate(['details', custId]);
  }


  updateDetails(custId: number){
    this.router.navigate(['updateDetail', custId]);
  }
}


