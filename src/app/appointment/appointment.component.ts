import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppointmentService } from 'src/services/appointment.service';
import { Appointment } from 'src/models/Appointment';
import { HttpErrorResponse } from '@angular/common/http';
import { ApptModalComponent } from '../modals/appt-modal/appt-modal.component';
import { PlatformService } from 'src/services/platform.service';

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

  mode = "";

  constructor(
    private modalController: ModalController,
    private appointmentService: AppointmentService,
    private platformService: PlatformService
    ) { }

  ngOnInit() { 
    this.mode = this.platformService.getPlatform();
  }

  async presentModal(data: any) {
    this.modal = await this.modalController.create({
      showBackdrop: true,
      component: ApptModalComponent,
      mode: 'ios',
      backdropDismiss: true,
      componentProps: {
        data: data,
        // count: data.Count
      }
    });
    return await this.modal.present();
  }

  selectAppointment(level: string, type: string): void {
    //gets schedule and opend modal
    switch (level) {
      case 'license':
        this.appointmentService.getLicensedLevelSchedule(type)
          .subscribe(res => {
            this.presentModal(this.parseAppointments(res));
          },
            err => {
              this.handleError(err, 'Error retrieving schedule');
            })
        break;
      case 'master':
        this.appointmentService.getMastersLevelSchedule(type)
          .subscribe(res => {
            this.presentModal(this.parseAppointments(res));
          },
            err => {
              this.handleError(err, 'Error retrieving schedule')
            })
        break;
      
      case 'youth':
        this.appointmentService.getAdolescentGroupSelfPay()
          .subscribe(res => {
            this.presentModal(this.parseAppointments(res));
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

  parseAppointments(res: any) : Appointment[] {
    var appts: Appointment[] = [];

    res.Items.forEach(x => {
      // create appt obj
      var appt: Appointment = {
        name: x.Name.S,
        date: x.Date.S,
        duration: x.Duration.S,
        price: x.Price.S,
        address: x.Location.S,
        counselor: x.Counselor.S,
        type: x.Type.S
      };

      //add to array
      appts.push(appt)
    })

    return appts;
  }

}
