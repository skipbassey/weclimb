import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: [
    './appointment.component.scss',
    '../../theme/font.scss'
  ],
})
export class AppointmentComponent implements OnInit {

  constructor(public actionSheetController: ActionSheetController) {}

  ngOnInit() {}

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

}
