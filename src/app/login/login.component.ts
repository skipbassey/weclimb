import { Component, OnInit, AfterContentInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Events } from '@ionic/angular';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {


  signUpConfig = {
    header: 'My Customized Sign Up',
    hideAllDefaults: true,
    defaultCountryCode: '1',
    signUpFields: [
      {
        label: 'Username',
        key: 'username',
        required: true,
        displayOrder: 1,
        type: 'string',
      },
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 2,
        type: 'string',
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 3,
        type: 'password'
      },
      {
        label: 'Phone Number',
        key: 'phone_number',
        required: true,
        displayOrder: 4,
        type: 'string'
      },
      {
        label: 'First Name',
        key: 'name',
        required: true,
        displayOrder: 5,
        type: 'string',
      },
      {
        label: 'Last Name',
        key: 'family_name',
        required: true,
        displayOrder: 6,
        type: 'string',
      }
    ]
  }

  authState: any;

  constructor(
    public events: Events,
    public amplifyService: AmplifyService,
    public router: Router
  ) {
    this.authState = { signedIn: false };

    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.authState.signedIn = authState.state === 'signedIn';
        this.events.publish('data:AuthState', this.authState);
        this.redirectSignIn();
      });
    }

    ngOnInit() { }

    redirectSignIn() {
      if(this.authState.signedIn) {
        this.router.navigateByUrl('home');
      }
    }
}
