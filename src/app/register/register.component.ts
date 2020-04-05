import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  registerForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastController: ToastController,
    public loadingController: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: ''
    });
  }

  registerUser() {
    this.presentLoading();

    var user: User = {
      firstName: this.registerForm.get('firstName').value,
      lastName: this.registerForm.get('lastName').value,
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value,
      phone: this.registerForm.get('phone').value,
      role: "User"
    };

    this.userService.addUser(user)
      .subscribe(res => {
        this.loadingController.dismiss();
        this.router.navigateByUrl("home");
      },
      err => {
        this.handleError(err, err.message)
      })
  }

  cancel() {
    this.router.navigateByUrl('login');
  }

  passwordMatch(): boolean {
    var password = this.registerForm.get('password').value;
    var confirmPassword = this.registerForm.get('confirmPassword').value;

    if(password === confirmPassword) {
      return true;
    }
    else {
      return false;
    }
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

  private handleError(err: HttpErrorResponse, errMessage) {
    console.log(err + err.message)
    alert(errMessage);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your profile has been created.',
      duration: 2000
    });
    toast.present();
  }
}
