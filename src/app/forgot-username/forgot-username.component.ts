import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { ToastController, ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-forgot-username',
  templateUrl: './forgot-username.component.html',
  styleUrls: ['./forgot-username.component.scss'],
})
export class ForgotUsernameComponent implements OnInit {

  usernameForm: any;

  username = "";

  loaded = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.usernameForm = this.formBuilder.group({
      phone: "",
      lastName: "",
    })
  }

  forgotUsername() {
    this.presentLoading();

    var phone = this.usernameForm.get("phone").value;
    var lastName = this.usernameForm.get("lastName").value;

    this.userService.forgotUserName(lastName, phone)
      .subscribe(res => {
        this.username = res;
        this.loadingController.dismiss;
      },
      err => {
        this.presentErrorToast();
      })
  }

  cancel() {
    this.modalController.dismiss();
  }

  async presentErrorToast() {
    const toast = await this.toastController.create({
      message: 'Error getting username',
      duration: 2000,
      color: "warning"
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000,
      mode: "ios"
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.loaded = true;
    console.log('Loading dismissed!');
  }

}