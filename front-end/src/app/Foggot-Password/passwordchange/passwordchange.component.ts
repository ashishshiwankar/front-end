import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/model.user';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-passwordchange',
  templateUrl: './passwordchange.component.html',
  styleUrls: ['./passwordchange.component.css']
})
export class PasswordchangeComponent implements OnInit {

  tokenid: number;
  confirmationToken: String;
  user: User;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService) { }

  ngOnInit() {
    this.user = new User();

    this.tokenid = this.route.snapshot.params['tokenid'];
    
    this.accountService.getUser(this.tokenid)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  updateUser() {
    this.accountService.updateUsers(this.tokenid, this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.gotoList();
  }

  onSubmit() {
    this.updateUser();    
  }

  updateUserByTken() {
    this.accountService.updateUsersBytoken(this.confirmationToken, this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.gotoList();
  }

  onSubmit1() {
    this.updateUserByTken();    
  }



  gotoList() {
    this.router.navigate(['/login']);
  }
}
