import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/services/user.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {

  passwordForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private userService: UserService,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      email: "",
      lastName: "",
      password: ""
    })
  }

  forgotPassword() {
    var body = {
      email: this.passwordForm.get("email").value,
      lastName: this.passwordForm.get("lastName").value,
      password: this.passwordForm.get("password").value
    };

    this.userService.forgotPassword(body)
      .subscribe(res => {
        this.presentToast();
        this.modalController.dismiss();
      },
      err => {
        alert("Error")
      })
  }

  cancel() {
    this.modalController.dismiss();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Password has been changed.',
      duration: 2000
    });
    toast.present();
  }

}
