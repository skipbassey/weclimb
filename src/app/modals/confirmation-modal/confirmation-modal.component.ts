import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ToasterService } from 'src/services/toaster.service';
import { Router } from '@angular/router';
import { PlatformService } from 'src/services/platform.service';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
})
export class ConfirmationModalComponent implements OnInit {

  confirmationForm: any

  mode = "";

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private toasterService: ToasterService,
    private router: Router,
    private platformService: PlatformService
  ) { }

  ngOnInit() {
    this.confirmationForm = this.formBuilder.group({
      email: "",
      code: ""
    })

    this.mode = this.platformService.getPlatform();
  }

  async confirmSignUp() {
    console.log("type:" + typeof(this.confirmationForm.get("code").value))
    try {
      await Auth.confirmSignUp(
        this.confirmationForm.get("email").value, 
        this.confirmationForm.get("code").value
        );
      this.toasterService.presentToast(
        "Your profile has been created.",
        "success"
      )
      this.modalController.dismiss();
      this.router.navigateByUrl("login");
    } catch (error) {
        console.log('error confirming sign up', error);
        this.toasterService.presentToast(
          "There was an error confirming your profile.",
          "danger"
        )
    }
  }

  cancel() {
    this.modalController.dismiss();
  }
}
