import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from 'src/models/Appointment';
import { ModalController }  from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-appt-modal',
  templateUrl: './appt-modal.component.html',
  styleUrls: ['./appt-modal.component.scss'],
})
export class ApptModalComponent implements OnInit {

  @Input() data: Appointment[];
  @Input() count: number

  noData = false;

  errMessage = "No schedule available"

  constructor(
    private modalController: ModalController,
    private actionSheetController: ActionSheetController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    if(this.count == 0) {
      this.noData = true;
    }
    console.log(this.data)
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async book() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Are you sure you want to book this appointment?',
      buttons: [{
        text: 'Yes',
        role: 'destructive',
        icon: 'checkmark',
        handler: () => {
          console.log('Appointment booked');
          this.presentToast();
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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your appointment has been booked.',
      duration: 2000
    });
    toast.present();
    this.modalController.dismiss();
  }
}
