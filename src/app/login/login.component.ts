import { Component, OnInit, AfterContentInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Events } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { LoginService } from 'src/services/login.service';
import { AuthService } from '../../services/auth.service';
import { tap, switchMap } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


  signUpConfig = {
    header: 'Sign Up',
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

  loginForm: any;

  constructor(
    public events: Events,
    public amplifyService: AmplifyService,
    private formBuilder: FormBuilder,
    public router: Router,
    private userService: UserService,
    private loginService: LoginService,
    private authService: AuthService,
    private loadingController: LoadingController
  ) {
    this.authState = { signedIn: false };

    // this.amplifyService.authStateChange$
    //   .subscribe(authState => {
    //     this.authState.signedIn = authState.state === 'signedIn';
    //     this.events.publish('data:AuthState', this.authState);
    //     this.redirectSignIn();
    //   });
    }

    ngOnInit() { 
      this.loginForm = this.formBuilder.group({
        email: '',
        password: ''
      });
    }

    navigate() {
      this.router.navigateByUrl('home');
    }

    login() {
      this.presentLoading();
      var email = this.loginForm.get('email').value;
      var password = this.loginForm.get('password').value;
      
      this.loginService.login(email, password)
        .pipe(
          tap(data => {
            this.authService.setAuthorization(data.token);
          }),
          switchMap( () => {
            return this.userService.getUser(email)
          }),
          tap(data => {
            this.loadingController.dismiss();
            this.userService.setUserInfo(data);
            this.navigate();
          })
        )
        .subscribe()
    }

  register() {
    this.router.navigateByUrl('register');
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      mode: "ios",
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
