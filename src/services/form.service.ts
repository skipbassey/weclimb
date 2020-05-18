import { Injectable } from "@angular/core";

@Injectable()
export class FormService {

    adultIntakeForm = "https://fbd77605-65f9-4422-9edf-096e90f4cb9a.filesusr.com/ugd/007d05_3408979cc10a44ce9a67d840a7a89a85.pdf";
    newClientForm = "https://fbd77605-65f9-4422-9edf-096e90f4cb9a.filesusr.com/ugd/007d05_3fbb43d69c7a4dffbd6743ec700141f7.pdf";
    childIntakeForm = "https://fbd77605-65f9-4422-9edf-096e90f4cb9a.filesusr.com/ugd/007d05_562308c8842142ffaf2f8eac293fcb11.pdf";
    consentAgreementForm = "https://fbd77605-65f9-4422-9edf-096e90f4cb9a.filesusr.com/ugd/007d05_b2a3b828ec9b47cbba3b19abb99978f8.pdf";
    coupleIntakeForm = "https://fbd77605-65f9-4422-9edf-096e90f4cb9a.filesusr.com/ugd/007d05_22f978315cd14176a7511fc81399492d.pdf";
    aTRIForm = "https://fbd77605-65f9-4422-9edf-096e90f4cb9a.filesusr.com/ugd/007d05_22f978315cd14176a7511fc81399492d.pdf";
    creditCardForm = "https://fbd77605-65f9-4422-9edf-096e90f4cb9a.filesusr.com/ugd/007d05_3e1c03baf5f947d3a70527713a290eac.pdf";
    communicationAgreementForm = "https://fbd77605-65f9-4422-9edf-096e90f4cb9a.filesusr.com/ugd/007d05_3f1537aa9025494fb9e0cdeebd244fe4.pdf";
    hippaForm = "https://fbd77605-65f9-4422-9edf-096e90f4cb9a.filesusr.com/ugd/007d05_f638f00b33c34e4ba05b9c53eed36a56.pdf";
    lateAppointmentForm = "https://fbd77605-65f9-4422-9edf-096e90f4cb9a.filesusr.com/ugd/007d05_7654ee15bfd84db79f69600524aa9177.pdf";
    socialMediaForm = "https://fbd77605-65f9-4422-9edf-096e90f4cb9a.filesusr.com/ugd/007d05_4dee92300d0d459080461f2a2febc3ff.pdf";
    ateciForm = "https://fbd77605-65f9-4422-9edf-096e90f4cb9a.filesusr.com/ugd/007d05_4075d96ff4264ad89219b5c76a9f808e.pdf";
    schoolColabForm = "https://fbd77605-65f9-4422-9edf-096e90f4cb9a.filesusr.com/ugd/007d05_4075d96ff4264ad89219b5c76a9f808e.pdf";
    consentTELEPSYCHOLOGY = "https://fbd77605-65f9-4422-9edf-096e90f4cb9a.filesusr.com/ugd/007d05_2db01f0d99b446c8892be88813d4534f.pdf";
    premaritalIntakeForm = "https://fbd77605-65f9-4422-9edf-096e90f4cb9a.filesusr.com/ugd/007d05_26d01d6447314973b3c0d1d1ff692984.pdf";

    constructor() {}

    getAdultIntakeForm(): string {
        return this.adultIntakeForm;
    }

    getNewClientForm(): string {
        return this.newClientForm;
    }

    getChildIntakeForm(): string {
        return this.childIntakeForm;
    }

    getConsentAgreementForm(): string {
        return this.consentAgreementForm;
    }

    getCoupleIntakeForm(): string {
        return this.coupleIntakeForm;
    }

    getatriForm(): string {
        return this.aTRIForm;
    }

    getCreditCardForm(): string {
        return this.creditCardForm;
    }

    getCommunicationAgreementForm(): string {
        return this.communicationAgreementForm;
    }

    getHippaForm(): string {
        return this.hippaForm;
    }

    getLateAppointmentForm(): string {
        return this.lateAppointmentForm;
    }

    getSocialMediaForm(): string {
        return this.socialMediaForm;
    }

    getAteciForm(): string {
        return this.ateciForm;
    }

    getSchoolColabForm(): string {
        return this.schoolColabForm;
    }

    getconsentTELEPSYCHOLOGY(): string {
        return this.consentTELEPSYCHOLOGY;
    }

    getPremaritalIntakeForm(): string {
        return this.premaritalIntakeForm;
    }
}