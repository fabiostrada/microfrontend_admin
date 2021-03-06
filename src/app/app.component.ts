import { Component, OnInit } from '@angular/core';
import { AuthenticatorService, User } from 'my-authenticator-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public user!: User | undefined;

  constructor(public authenticatorService: AuthenticatorService) {  }

  ngOnInit(): void {
      this.authenticatorService.currentUser()
          .subscribe(user => {
              this.user = user;
          })
  }
}
