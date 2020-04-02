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

  appt: Appointment

  constructor(
    private userService: UserService,
    private apptService: AppointmentService
  ) { }

  ngOnInit() {
    this.user = this.userService.getUserInfo();
    this.apptService.getMyAppointments(this.user.email)
      .subscribe(res => {
        this.appt = this.transformData(res.Items[0])
      })
  }

  transformData(res: any): Appointment {
    var appointment: Appointment = {
      name: res.Name.S,
      date: res.Date.S,
      duration: res.Duration.S,
      price: res.Price.S,
      location: res.Location.S,
      counselor: res.Counselor.S,
      candidateFirstName: res.CandidateFirstName.S,
      candidateLastName: res.CandidateLastName.S,
      candidateEmail: res.CandidateEmail.S,
      type: res.Type.S
    }

    return appointment
  }
}
