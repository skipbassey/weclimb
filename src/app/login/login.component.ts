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
import { ModalController } from '@ionic/angular';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { ForgotUsernameComponent } from '../forgot-username/forgot-username.component';
import { LoadingService } from 'src/services/loading.service';
import { ToasterService } from 'src/services/toaster.service';
import { Auth } from 'aws-amplify';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: any;

  checked = false;

  constructor(
    public events: Events,
    public amplifyService: AmplifyService,
    private formBuilder: FormBuilder,
    public router: Router,
    private userService: UserService,
    private loginService: LoginService,
    private authService: AuthService,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private loadingService: LoadingService,
    private toasterService: ToasterService,
  
  ) { }

    ngOnInit() { 
      this.loginForm = this.formBuilder.group({
        email: '',
        password: '',
        toggle: ''
      });

      this.getRememberMeCredentials();
    }

    navigateToHome() {
      this.router.navigateByUrl('home');
    }

    async signIn() {
      this.loadingService.presentLoading();

      try {
        const res = await Auth.signIn(
          this.loginForm.get("email").value,
          this.loginForm.get("password").value
        )
        console.log(Auth.currentUserInfo());
        if(res) {
          console.log(res);
          this.authService.setAuthorization(
            res.signInUserSession.idToken.jwtToken,
            res.signInUserSession.refreshToken.token
          )
          this.userService.setUserInfo(res.signInUserSession.idToken.payload);
          this.navigateToHome();
        }
      }
      catch(err) {
        console.log(err);
        this.toasterService.presentToast(err.message, "danger")
      }
      
    }

    login() {
      this.loadingService.presentLoading();
      var email = this.loginForm.get('email').value;
      var password = this.loginForm.get('password').value;
      
      this.loginService.login(email, password)
        .pipe(
          tap(data => {
          }),
          switchMap( () => {
            return this.userService.getUser(email)
          }),
          tap(data => {
            this.userService.setUserInfo(data);
            this.navigateToHome();
          })
        )
        .subscribe(res => {
          this.loadingController.dismiss();
        },
        err => {
          this.toasterService.presentToast(err.message, "danger")
        })
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

  async presentForgotPasswordModal() {
    const modal = await this.modalController.create({
      component: ForgotPasswordComponent
    });
    return await modal.present();
  }

  async presentForgotUsernameModal() {
    const modal = await this.modalController.create({
      component: ForgotUsernameComponent
    });
    return await modal.present();
  }

  rememberMe(event: any) {
    switch(event.detail.checked) {
      case true:
        window.localStorage.setItem ("email", this.loginForm.get("email").value);
        window.localStorage.setItem ("password", this.loginForm.get("password").value);
        window.localStorage.setItem("checked", "true");
        break;
      case false:
        window.localStorage.setItem ("email", "");
        window.localStorage.setItem ("password", "");
        window.localStorage.setItem("checked", "false");

        this.loginForm.controls["email"].setValue(window.localStorage.getItem("email"));
        this.loginForm.controls["password"].setValue(window.localStorage.getItem("password"));
        break;
    }
  }

  private getRememberMeCredentials() {
    this.loginForm.controls["email"].setValue(window.localStorage.getItem("email"));
    this.loginForm.controls["password"].setValue(window.localStorage.getItem("password"));

    switch(window.localStorage.getItem("checked")) {
      case "true":
        this.checked = true;
        break;
      case "false":
        this.checked = false;
        break;
    }  
  }
}
