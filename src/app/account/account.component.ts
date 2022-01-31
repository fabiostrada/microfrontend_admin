import { Component, OnInit } from '@angular/core';
import { AuthenticatorService, User } from 'my-authenticator-lib';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public user: User | undefined;

  constructor(public authenticatorService: AuthenticatorService) {  }

  ngOnInit(): void {
      this.authenticatorService.currentUser()
          .subscribe(user => {
              this.user = user;
          })
  }

}
