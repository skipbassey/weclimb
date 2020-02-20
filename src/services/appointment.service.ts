import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Appointment } from 'src/models/Appointment';
import { HttpClient } from '@angular/common/http';

Injectable()
export class AppointmentService {

    constructor(http: HttpClient) { }

    appointments: Appointment[] = [

    ]

    getLicensedLevelFirstSession(): Observable<any> {
        return null;
    }

    getLicensedLevelInsurance(): Observable<any> {
        return null;
    }

    getLicensedLevelSelfPay(): Observable<any> {
        return null;
    }

    getMastersLevelIntake(): Observable<any> {
        return null;
    }

    getMastersLevelSelfPay(): Observable<any> {
        return null;
    }

    getAdolescentGroupSelfPay(): Observable<any> {
        return null;
    }

    setLicensedLevelFirstSession(appointment: Appointment): void {
        
    }

    
}