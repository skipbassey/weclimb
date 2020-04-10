import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { Appointment } from 'src/models/Appointment';
import { AppointmentService } from 'src/services/appointment.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  location = "Bldg. A. Suites 122-124 2175 Highpoint Road, Snellville, GA, USA";
  date = "";

  calendarForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private apptService: AppointmentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.calendarForm = this.formBuilder.group({
      name: "",
      type: "",
      duration: "",
      price: "",
      location: "",
      date: "",
    })
  }

  addToCalendar() {
    var appts: Appointment[] = [];
    var schedule: Appointment = {
      name: this.calendarForm.get("name").value,
      date: this.formDate(this.calendarForm.get("date").value),
      duration: this.calendarForm.get("duration").value,
      price: this.calendarForm.get("price").value,
      location: this.calendarForm.get("location").value,
      counselor: this.userService.getUserInfo().firstName + " " + this.userService.getUserInfo().lastName,
      type: this.calendarForm.get("type").value,
    }

    appts.push(schedule)
    switch (schedule.name) {
      case "Licensed Level Clinician":
        this.apptService.setLicenseLevelSchedule(appts)
          .subscribe(res => {
            alert("Schedule added");
          },
          err => {
            alert("error adding schedule")
          })
          break;
      case "Master Level Clinician":
        this.apptService.setMastersLevelSchedule(appts)
          .subscribe(res => {
            alert("Schedule added");
          },
          err => {
            alert("error adding schedule")
          })
    }
    
    console.log(schedule);
  }

  formDate(date: string): string {
    let newDate = moment(date).format('LLL');
    console.log(newDate);
    return newDate;
  }

  cancel() {
    this.router.navigateByUrl("profile");
  }

}
