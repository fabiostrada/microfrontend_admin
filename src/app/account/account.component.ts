import { Component, OnInit } from '@angular/core';
import { AuthenticatorService, User, StateService } from 'my-authenticator-lib';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public user: User | undefined;
  public property1!: string;

  constructor(public authenticatorService: AuthenticatorService,
              private stateService: StateService) {  }

  ngOnInit(): void {
      this.stateService.setProperty1('XXXXX_' + Math.random());
      this.property1 =this.stateService.getProperty1(); 
      this.authenticatorService.currentUser()
          .subscribe(user => {
              this.user = user;
          })
  }

}
