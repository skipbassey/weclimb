import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from 'src/models/Appointment';
import { ModalController }  from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user';
import { AppointmentService } from 'src/services/appointment.service';
import { ToasterService } from 'src/services/toaster.service';
import { PlatformService } from 'src/services/platform.service';


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

  mode =  "";

  constructor(
    private modalController: ModalController,
    private actionSheetController: ActionSheetController,
    private toastController: ToastController,
    private userService: UserService,
    private apptService: AppointmentService,
    private toasterService: ToasterService,
    private platformService: PlatformService
  ) { }

  ngOnInit() {
    this.noAppointments(this.data)    
    this.user = this.userService.getUserInfo();
    this.mode = this.platformService.getPlatform();
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
      address: appt.address,
      counselor: appt.counselor,
      candidateFirstName: this.user.firstName,
      candidateLastName: this.user.lastName,
      candidateEmail: this.user.email,
      type: appt.type,
      table: this.determineTable(appt)
    };

    this.apptService.bookAppointment(booking)
      .subscribe(res => {

      },
      err => {
        console.log("Error booking appointment")
      })
  }

  async confirm(appt: any) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Are you sure you want to book this appointment?',
      buttons: [{
        text: 'No',
        role: 'destructive',
        icon: 'clsoe',
        handler: () => {
          console.log('Appointment canceled');
        }
      },
      {
        text: 'Yes',
        icon: 'checkmark',
        role: 'close',
        handler: () => {
          console.log('Appointment booked');
          this.bookAppointment(appt);
          console.log(appt);
          this.toasterService.presentToast(
            "Your appointment has been booked.",
            "success"
          )
        }
      }]
    });
    await actionSheet.present();
  }

  determineTable(appt: Appointment): string {
    var tableName = "";

    switch(appt.name) {
      case "Licensed Level Clinician": 
        tableName = "Licensed_Appointments";
        break;
      case "Masters Level Clinician":
        tableName = "Masters_Appointments";
        break;
      case "Adolescent Group Counseling":
        tableName = "Adolescent";
        break;
    }
    return tableName;
  }

  noAppointments(data: Appointment[]) {
    if(data.length == 0) {
      this.noData = true;
    }
  }
}
