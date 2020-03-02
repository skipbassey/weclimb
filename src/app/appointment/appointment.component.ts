import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppointmentService } from 'src/services/appointment.service';
import { Appointment } from 'src/models/Appointment';
import { HttpErrorResponse } from '@angular/common/http';
import { ApptModalComponent } from '../appt-modal/appt-modal.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: [
    './appointment.component.scss',
    '../../theme/font.scss'
  ],
})
export class AppointmentComponent implements OnInit {

  modal: any;

  appointments: Appointment[] = [];

  constructor(
    private modalController: ModalController,
    private appointmentService: AppointmentService) { }

  ngOnInit() { }

  async presentModal(data: any) {
    this.modal = await this.modalController.create({
      showBackdrop: true,
      component: ApptModalComponent,
      mode: 'ios',
      backdropDismiss: true,
      componentProps: {
        data: data.Items,
        count: data.Count
      }
    });
    return await this.modal.present();
  }

  bookAppointment(appointment: string): void {
    //gets schedule and opend modal
    switch (appointment) {
      case 'll-intake':
        this.appointmentService.getLicensedLevelFirstSession()
          .subscribe(res => {
            this.presentModal(res);
          },
            err => {
              this.handleError(err, 'Error retrieving schedule');
            })
        break;
      case 'll-insurance':
        this.appointmentService.getLicensedLevelInsurance()
          .subscribe(res => {
            this.presentModal(res);
          },
            err => {
              this.handleError(err, 'Error retrieving schedule')
            })
        break;
      case 'll-selfpay':
        this.appointmentService.getLicensedLevelSelfPay()
          .subscribe(res => {
            this.presentModal(res);
          },
            err => {
              this.handleError(err, 'Error retrieving schedule');
            })
        break;
      case 'ml-intake':
        this.appointmentService.getMastersLevelIntake()
          .subscribe(res => {
            this.presentModal(res);
          },
            err => {
              this.handleError(err, 'Error retrieving schedule');
            })
        break;
      case 'ml-selfpay':
        this.appointmentService.getMastersLevelSelfPay()
          .subscribe(res => {
            this.presentModal(res);
          },
            err => {
              this.handleError(err, 'Error retrieving schedule')
            })
        break;
      case 'youth':
        this.appointmentService.getAdolescentGroupSelfPay()
          .subscribe(res => {
            this.presentModal(res);
          },
            err => {
              this.handleError(err, 'Error retrieving schedule')
            })
        break;
    }
  }

  private handleError(err: HttpErrorResponse, errMessage) {
    console.log(err + err.message)
    alert(errMessage);
  }

}
