import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from 'src/models/Appointment';
import { ModalController }  from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user';


@Component({
  selector: 'app-appt-modal',
  templateUrl: './appt-modal.component.html',
  styleUrls: ['./appt-modal.component.scss'],
})
export class ApptModalComponent implements OnInit {

  @Input() data: Appointment[];
  @Input() count: number

  noData = false;

  errMessage = "No schedule available";

  user: User;

  constructor(
    private modalController: ModalController,
    private actionSheetController: ActionSheetController,
    private toastController: ToastController,
    private userService: UserService
  ) { }

  ngOnInit() {
    if(this.count == 0) {
      this.noData = true;
    }

    this.user = this.userService.getUserInfo();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  bookAppointment(appt: Appointment) {
    var booking: Appointment = {
      name: appt.name,
      date: appt.date,
      duration: appt.duration,
      price: appt.price,
      location: appt.location,
      counselor: appt.counselor,
      candidateFirstName: this.user.firstName,
      candidateLastName: this.user.lastName,
      candidateEmail: this.user.email,
      type: appt.type
    };
    
  }

  async confirm(appt: any) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Are you sure you want to book this appointment?',
      buttons: [{
        text: 'Yes',
        role: 'destructive',
        icon: 'checkmark',
        handler: () => {
          console.log('Appointment booked');
          console.log(appt);
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
