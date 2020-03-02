import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { isObject } from 'util';
import { AppointmentService } from 'src/services/appointment.service';
import { Appointment } from 'src/models/Appointment';
import { HttpErrorResponse } from '@angular/common/http';

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
    public actionSheetController: ActionSheetController,
    private modalController: ModalController,
    private appointmentService: AppointmentService) { }

  ngOnInit() { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Booking',
      buttons: [{
        text: 'Book',
        role: 'destructive',
        icon: 'checkmark',
        handler: () => {
          console.log('Appointment booked');
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Appointment canceled');
        }
      }]
    });
    await actionSheet.present();
  }

  async presentModal() {
    this.modal = await this.modalController.create({
      showBackdrop: true,
      component: ModalPage,
      mode: 'ios',
      backdropDismiss: true,
      componentProps: null

    });
    return await this.modal.present();
  }

  bookAppointment(appointment: string): void {
    //gets schedule and opend modal
    switch (appointment) {
      case 'll-intake':
        this.appointmentService.getLicensedLevelFirstSession()
          .subscribe(res => {
            this.modal.componentProps = res;
          },
            err => {
              this.handleError(err, 'Error retrieving schedule');
            })
        break;
      case 'll-insurance':
        this.appointmentService.getLicensedLevelInsurance()
          .subscribe(res => {
            this.modal.componentProps = res;
          },
            err => {
              this.handleError(err, 'Error retrieving schedule')
            })
        break;
      case 'll-selfpay':
        this.appointmentService.getLicensedLevelSelfPay()
          .subscribe(res => {
            this.modal.componentProps = res;
          },
            err => {
              this.handleError(err, 'Error retrieving schedule');
            })
        break;
      case 'ml-intake':
        this.appointmentService.getMastersLevelIntake()
          .subscribe(res => {
            this.modal.componentProps = res;
          },
            err => {
              this.handleError(err, 'Error retrieving schedule');
            })
        break;
      case 'ml-selfpay':
        this.appointmentService.getMastersLevelSelfPay()
          .subscribe(res => {
            this.modal.componentProps = res;
          },
            err => {
              this.handleError(err, 'Error retrieving schedule')
            })
        break;
      case 'youth':
        this.appointmentService.getAdolescentGroupSelfPay()
          .subscribe(res => {
            this.modal.componentProps = res;
          },
            err => {
              this.handleError(err, 'Error retrieving schedule')
            })
        break;

    }

    this.presentModal()
  }

  private handleError(err: HttpErrorResponse, errMessage) {
    console.log(err + err.message)
    alert(errMessage);
  }

}
