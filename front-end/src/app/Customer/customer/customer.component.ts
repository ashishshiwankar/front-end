import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/model.customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: Customer = new Customer();
  errorMessage: string;

  constructor(public requestService: CustomerService, public router: Router) {
  }

  ngOnInit() {
  }

  registerCust() {
    this.requestService.createCustomer(this.customer).subscribe(data => {
        this.router.navigate(['customerlist']);
      }, err => {
        console.log(err);
        this.errorMessage = 'username already exist';
      }
    );
  }
}
