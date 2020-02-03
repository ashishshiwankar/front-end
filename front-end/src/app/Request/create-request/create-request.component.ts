import { Component, OnInit } from '@angular/core';
import { RequestMst } from 'src/app/model/model.requestmst';
import { RequestService } from 'src/app/services/requestService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {

  requestMst: RequestMst = new RequestMst();
  errorMessage: string;

  constructor(public requestService: RequestService, public router: Router) {
  }

  ngOnInit() {
  }

  registerDriver() {
    this.requestService.createRequest(this.requestMst).subscribe(data => {
        this.router.navigate(['D-List']);
      }, err => {
        console.log(err);
        this.errorMessage = 'username already exist';
      }
    );
  }
}
