import { Component, OnInit, DoCheck } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarModalComponent } from '../modals/calendar-modal/calendar-modal.component';
import { Appointment } from 'src/models/Appointment';
import { AppointmentService } from 'src/services/appointment.service';
import { ToasterService } from 'src/services/toaster.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit, DoCheck {

  appts: Appointment[] = [];

  constructor(
    private modalController: ModalController,
    private apptService: AppointmentService,
    private toasterService: ToasterService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  ngDoCheck() {
    this.appts = this.apptService.schedule;
  }

  async openCalendarModal() {
    const modal = await this.modalController.create({
      component: CalendarModalComponent
    });
    return await modal.present();
  }

  submit() {
    switch (this.apptService.schedule[0].name) {
      case "Licensed Level Clinician":
        this.apptService.setLicenseLevelSchedule(this.apptService.schedule)
          .subscribe(res => {
            this.toasterService.presentToast("Schedule added", "success")
            this.apptService.clearSchedule();
            this.router.navigateByUrl("profile");
          },
            err => {
              this.toasterService.presentToast("Error adding schedule", "danger")
            })
        break;
      case "Master Level Clinician":
        this.apptService.setMastersLevelSchedule(this.apptService.schedule)
          .subscribe(res => {
            this.toasterService.presentToast("Schedule added", "success");
            this.apptService.clearSchedule();
            this.router.navigateByUrl("profile");
          },
            err => {
              this.toasterService.presentToast("Error adding schedule", "danger")
            })
    }

  }

}
