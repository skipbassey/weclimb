import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/services/form.service';
import { PlatformService } from 'src/services/platform.service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: [
    './forms.component.scss',
    '../../theme/font.scss'
  ],
})
export class FormsComponent implements OnInit {

  mode = "";

   options: InAppBrowserOptions = {
    zoom: 'no'
  }

  constructor(
    private formService: FormService,
    private platformService: PlatformService,
    private iab: InAppBrowser
  ) { }

  ngOnInit() {
    this.mode = this.platformService.getPlatform();
  }

  openAdultIntake() {
    this.iab.create(this.formService.getAdultIntakeForm(), '_self', this.options);
  }

  openNewClient() {
    this.iab.create(this.formService.getNewClientForm(), '_self', this.options);
  }

  openChild() {
    this.iab.create(this.formService.getChildIntakeForm(), '_self', this.options);
  }

  openConsentAgreement() {
    this.iab.create(this.formService.getConsentAgreementForm(), '_self', this.options);
  }

  openCoupleIntake() {
    this.iab.create(this.formService.getCoupleIntakeForm(), '_self', this.options);
  }

  openReleaseInfo() {
    this.iab.create(this.formService.getatriForm(), '_self', this.options);
  }

  openCreditCard() {
    this.iab.create(this.formService.getCreditCardForm(), '_self', this.options);
  }

  openCommunicationAgreement() {

    this.iab.create(this.formService.getCommunicationAgreementForm(), '_self', this.options);
  }

  openLateCancellation() {
    this.iab.create(this.formService.getLateAppointmentForm(), '_self', this.options);
  }

  openHippa() {
    this.iab.create(this.formService.getHippaForm(), '_self', this.options);
  }

  openSocialMedia() {
    this.iab.create(this.formService.getSocialMediaForm(), '_self', this.options);
  }

  openExchangeConfidential() {
    this.iab.create(this.formService.getAteciForm(), '_self', this.options);
  }

  openSchoolColab() {
    this.iab.create(this.formService.getSchoolColabForm(), '_self', this.options);
  }

  openConsentTELEPSYCHOLOGY() {
    this.iab.create(this.formService.getconsentTELEPSYCHOLOGY(), '_self', this.options);
  }

  openPremaritalIntakeForm() {
    this.iab.create(this.formService.getPremaritalIntakeForm(), '_self', this.options);
  }
}
