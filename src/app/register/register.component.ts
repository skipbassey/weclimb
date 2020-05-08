import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Auth } from 'aws-amplify';
import { ModalController } from '@ionic/angular';
import { ConfirmationModalComponent } from '../modals/confirmation-modal/confirmation-modal.component';
import { ToasterService } from 'src/services/toaster.service';

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
    public loadingController: LoadingController,
    private modalController: ModalController,
    private toasterService: ToasterService,
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

  async signUp() {
    this.presentLoading()
    
    try {
        const user = await Auth.signUp({
            username: this.registerForm.get("email").value,
            password: this.registerForm.get("password").value,
            attributes: {
                name: this.registerForm.get("firstName").value,  
                family_name: this.registerForm.get("lastName").value,      
                phone_number: "+1" + this.registerForm.get("phone").value,
                profile: 'User'  
              }
        });
        this.loadingController.dismiss();
        this.presentConfirmationModal();
    } catch (error) {
        console.log('error signing up:', error);
        this.toasterService.presentToast(
          "There was an error completing your registration.",
          "danger"
        )
    }
  }

  async presentConfirmationModal() {
    const modal = await this.modalController.create({
      component: ConfirmationModalComponent
    });
    return await modal.present();
  }

  registerUser() {
    this.presentLoading();

    var user: any = {
      firstName: this.registerForm.get('firstName').value,
      lastName: this.registerForm.get('lastName').value,
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value,
      phone: this.registerForm.get('phone').value,
      profile: "User"
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
    this.modalController.dismiss();
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
  }

}
