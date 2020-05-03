import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/services/form.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: [
    './forms.component.scss',
    '../../theme/font.scss'
  ],
})
export class FormsComponent implements OnInit {

  adultIntakeUrl = 'https://fbd77605-65f9-4422-9edf-096e90f4cb9a.filesusr.com/ugd/007d05_3408979cc10a44ce9a67d840a7a89a85.pdf'

  constructor(
    private formService: FormService
  ) { }

  ngOnInit() {}

  openAdultIntake() {
    window.open(this.formService.getAdultIntakeForm(), "_blank")
  }

  openNewClient() {
    window.open(this.formService.getNewClientForm(), "_blank")
  }

  openChild() {
    window.open(this.formService.getChildIntakeForm(), "_blank")
  }

  openConsentAgreement() {
    window.open(this.formService.getConsentAgreementForm(), "_blank")
  }

  openCoupleIntake() {
    window.open(this.formService.getCoupleIntakeForm(), "_blank")
  }

  openReleaseInfo() {
    window.open(this.formService.getatriForm(), "_blank")
  }

  openCreditCard() {
    window.open(this.formService.getCreditCardForm(), "_blank")
  }

  openCommunicationAgreement() {
    window.open(this.formService.getCommunicationAgreementForm(), "_blank")
  }

  openLateCancellation() {
    window.open(this.formService.getLateAppointmentForm(), "_blank")
  }

  openHippa() {
    window.open(this.formService.getHippaForm(), "_blank")
  }

  openSocialMedia() {
    window.open(this.formService.getSocialMediaForm(), "_blank")
  }

  openExchangeConfidential() {
    window.open(this.formService.getAteciForm(), "_blank")
  }

  openSchoolColab() {
    window.open(this.formService.getSchoolColabForm(), "_blank")
  }
}
