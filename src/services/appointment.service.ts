import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Appointment } from 'src/models/Appointment';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

Injectable()
export class AppointmentService {

    constructor(private http: HttpClient) { }

    appointments: Appointment[] = [

    ]

    getLicensedLevelFirstSession(): Observable<any> {
        const url = "https://gg11vbof64.execute-api.us-east-1.amazonaws.com/default/getLicenseLevelFirstSessionSchedule";

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
          };

        return this.http.get(url, httpOptions);
    }

    getLicensedLevelInsurance(): Observable<any> {
        const url = "https://wk1co93jva.execute-api.us-east-1.amazonaws.com/default/getLicenseLevelInsuranceSchedule"
    
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
          };

        return this.http.get(url, httpOptions);
    }

    getLicensedLevelSelfPay(): Observable<any> {
        const url = "https://17emam9dlh.execute-api.us-east-1.amazonaws.com/default/getLicenseLevelSelfPaySchedule";

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
          };

        return this.http.get(url, httpOptions);
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