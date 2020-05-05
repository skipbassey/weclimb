import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { Appointment } from 'src/models/Appointment';
import { AppointmentService } from 'src/services/appointment.service';
import * as moment from 'moment';
import { ModalController } from '@ionic/angular';
import { ToasterService } from 'src/services/toaster.service';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.component.html',
  styleUrls: ['./calendar-modal.component.scss'],
})
export class CalendarModalComponent implements OnInit {

  calendarForm: any;
  location = "Bldg. A. Suites 122-124 2175 Highpoint Road, Snellville, GA, USA";
  date = "";

  constructor(
    private formBuilder: FormBuilder,
    private apptService: AppointmentService,
    private userService: UserService,
    private modalController: ModalController,   
    private toasterService: ToasterService, 
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
    var schedule: Appointment = {
      name: this.calendarForm.get("name").value,
      date: this.formDate(this.calendarForm.get("date").value),
      duration: this.calendarForm.get("duration").value,
      price: this.calendarForm.get("price").value,
      location: this.calendarForm.get("location").value,
      counselor: this.userService.getUserInfo().name + " " + this.userService.getUserInfo().family_name,
      type: this.calendarForm.get("type").value,
      expires: moment(this.calendarForm.get("date").value).unix().toString()
    }

    console.log(schedule);

    this.appointmentExists(schedule);
  }

  private formDate(date: string): string {
    let newDate = moment(date).format('LLL');
    return newDate;
  }

  private cancel() {
    this.modalController.dismiss();
  }

  appointmentExists(appt: Appointment) {
    var exists = this.apptService.schedule.find(x => x.date == appt.date && x.name == appt.name);

    if(exists) {
      this.toasterService.presentToast("This appointment has already been added", "warning")
    }
    else{
      this.apptService.schedule.push(appt)
      this.modalController.dismiss();
    }
  }


}
