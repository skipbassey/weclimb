import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';
import { Appointment } from 'src/models/Appointment';
import { AppointmentService } from 'src/services/appointment.service';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { ToasterService } from 'src/services/toaster.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  user: any = {};

  role = ""

  userInfoLoaded = false;
  apptInfoLoaded = false;

  appts: Appointment[]
  

  constructor(
    private userService: UserService,
    private apptService: AppointmentService,
    private loadingController: LoadingController,
    private authService: AuthService,
    private toasterService: ToasterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.presentLoading();
    this.user = this.userService.getUserInfo();

    // this.apptService.getMyAppointments(this.user.email)
    //   .subscribe(res => {
    //     this.appts = this.transformData(res.Items)
    //     this.loadingController.dismiss();
    //   },
    //   err => {
    //     console.log(err, err.message);
    //     this.toasterService.presentToast("Error getting user appointements", "danger")
    //   })
     
    if(this.isAdmin()) {
      this.apptService.getAppointmentsByCounselor(this.user.firstName + " " + this.user.lastName)
        .subscribe(res => {
          this.appts = this.transformData(res.Items);
          this.loadingController.dismiss()
        },
        err => {
          console.log(err, err.message);
          this.toasterService.presentToast("Error getting user appointements", "danger")
        })
    }
    else if (!this.isAdmin()) {
      this.apptService.getMyAppointments(this.user.email)
      .subscribe(res => {
        this.appts = this.transformData(res.Items)
        this.loadingController.dismiss();
      },
      err => {
        console.log(err, err.message);
        this.toasterService.presentToast("Error getting user appointements", "danger")
      })
    }
   
  }

  setCalendar() {
    this.router.navigateByUrl("calendar");
  }

  transformData(res: any): Appointment[] {
    var appts = []
    res.forEach(item => {
      var appointment: Appointment = {
        name: item.Name.S,
        date: item.Date.S,
        duration: item.Duration.S,
        price: item.Price.S,
        address: item.Location.S,
        counselor: item.Counselor.S,
        candidateFirstName: item.CandidateFirstName.S,
        candidateLastName: item.CandidateLastName.S,
        candidateEmail: item.CandidateEmail.S,
        type: item.Type.S
      };
      appts.push(appointment);

    })
    
    return appts;
  }

  private logOut() {
    this.authService.logOut();
    this.router.navigateByUrl("login");
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

  private isAdmin(): boolean {
    if(this.user['cognito:groups'][0] == "Admin"){
      // console.log("true");
      return true
    }
    else{
      return false
    } 
  }
}
