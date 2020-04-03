import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';
import { Appointment } from 'src/models/Appointment';
import { AppointmentService } from 'src/services/appointment.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  user: User;

  role = ""

  userInfoLoaded = false;
  apptInfoLoaded = false;

  appts: Appointment[]
  

  constructor(
    private userService: UserService,
    private apptService: AppointmentService
  ) { }

  ngOnInit() {
    this.user = this.userService.getUserInfo();
    this.role = this.user.role.toLowerCase();
    this.isUserInfoLoaded(this.user);

    if(this.user.role.toLowerCase() == "admin") {
      this.apptService.getAppointmentsByCounselor(this.user.firstName + " " + this.user.lastName)
        .subscribe(res => {
          this.appts = this.transformData(res.Items);
          this.isApptInfoLoaded(this.appts);
        })
    }
    else if (this.user.role.toLowerCase() == "user") {
      this.apptService.getMyAppointments(this.user.email)
      .subscribe(res => {
        this.appts = this.transformData(res.Items)
        this.isApptInfoLoaded(this.appts)
      })
    }
   
  }

  transformData(res: any): Appointment[] {
    var appts = []
    res.forEach(item => {
      var appointment: Appointment = {
        name: item.Name.S,
        date: item.Date.S,
        duration: item.Duration.S,
        price: item.Price.S,
        location: item.Location.S,
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

  isUserInfoLoaded(user: User): boolean {
    if(user) {
      this.userInfoLoaded = true;
      return true;
    }
  }

  isApptInfoLoaded(appt: Appointment[]): boolean {
    if(this.appts) {
      this.apptInfoLoaded = true;
      return true;
    }
  }

  dataLoaded(): boolean {
    if(this.userInfoLoaded && this.apptInfoLoaded){
      return true;
    }
    else {
      return false;
    }
  }
}
