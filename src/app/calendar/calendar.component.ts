import { Component, OnInit, DoCheck } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarModalComponent } from '../modals/calendar-modal/calendar-modal.component';
import { Appointment } from 'src/models/Appointment';
import { AppointmentService } from 'src/services/appointment.service';
import { ToasterService } from 'src/services/toaster.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PlatformService } from 'src/services/platform.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit, DoCheck {

  appts: Appointment[] = [];

  mode = ""

  constructor(
    private modalController: ModalController,
    private apptService: AppointmentService,
    private toasterService: ToasterService,
    private alertController: AlertController,
    private platformService: PlatformService,
    private router: Router
  ) { }

  ngOnInit() {
    this.mode = this.platformService.getPlatform();
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
      case "Masters Level Clinician":
        this.apptService.setMastersLevelSchedule(this.apptService.schedule)
          .subscribe(res => {
            this.toasterService.presentToast("Schedule added", "success");
            this.apptService.clearSchedule();
            this.router.navigateByUrl("profile");
          },
            err => {
              this.toasterService.presentToast("Error adding schedule", "danger")
            })
      case "Adolescent":
        this.apptService.setAdolescentSchedule(this.apptService.schedule)
            .subscribe(res => {
              this.toasterService.presentToast("Schedule added", "success");
              this.apptService.clearSchedule();
              this.router.navigateByUrl("profile");
            },
            err => {
              this.toasterService.presentToast("Error adding schedule", "danger")
            })
            break;
    }

  }

  async removeAppointment(apt: Appointment) {
    const alert = await this.alertController.create({
      header: 'Cancel',
      message: 'Are you sure you want to cancel?',
      mode: "ios",
      buttons: [
        {
          text: 'Yes',
          role: 'cancel',
          handler: (blah) => {
            this.apptService.removeAppointment(apt);
            this.appts = this.apptService.schedule;
          }
        }, {
          text: 'No',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

}
