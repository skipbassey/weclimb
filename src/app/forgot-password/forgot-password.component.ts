import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/services/user.service';
import { Auth } from 'aws-amplify';
import { ToasterService } from 'src/services/toaster.service';
import { LoadingService } from 'src/services/loading.service';
import { PlatformService } from 'src/services/platform.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {

  passwordForm: any;

  codeSent = false;

  mode = "";

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private userService: UserService,
    private toasterService: ToasterService,
    private loadingService: LoadingService,
    private platformService: PlatformService
  ) { }

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      email: "",
      code: "",
      password: ""
    })

    this.mode = this.platformService.getPlatform();
  }

  async forgotPasswordRequest() {
    this.loadingService.presentLoading();
    try {
      const res = await Auth.forgotPassword("skipbassey@gmail.com");
      if(res) {
        this.codeSent = true;
      }
    } catch (error) {
        console.log('error confirming sign up', error);
        this.toasterService.presentToast(error.message, "danger")
    }
    this.loadingService.dismissLoading();
  }

  async forgotPasswordSubmit() {
    this.loadingService.presentLoading();

    try {
      const req = await Auth.forgotPasswordSubmit(
        this.passwordForm.get("email").value,
        this.passwordForm.get("code").value,
        this.passwordForm.get("password").value
      )
      this.toasterService.presentToast("Password has been reset.", "success");
      this.modalController.dismiss();
    }
    catch(error) {
      console.log(error)
      this.toasterService.presentToast(error.message, "danger");
    }
    this.loadingService.dismissLoading();
  }

  forgotPassword() {
    var body = {
      email: this.passwordForm.get("email").value,
      lastName: this.passwordForm.get("lastName").value,
      password: this.passwordForm.get("password").value
    };

    this.userService.forgotPassword(body)
      .subscribe(res => {
        this.toasterService.presentToast("Password has been reset.", "success");
        this.modalController.dismiss();
      },
      err => {
        this.toasterService.presentToast("Error resetting password.", "danger");
      })
  }

  cancel() {
    this.modalController.dismiss();
  }
}
