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
        const url = "https://hcarij2xh8.execute-api.us-east-1.amazonaws.com/default/getMastersLevelIntakeSchedule";

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
          };

        return this.http.get(url, httpOptions);
    }

    getMastersLevelSelfPay(): Observable<any> {
        const url = "https://qrydefjkte.execute-api.us-east-1.amazonaws.com/default/getMastersLevelSelfPaySchedule";

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
          };

        return this.http.get(url, httpOptions);
    }

    getAdolescentGroupSelfPay(): Observable<any> {
        return null;
    }

    setLicensedLevelFirstSession(appointments: Appointment[]): Observable<any> {
        const url = "https://o18ov9ki32.execute-api.us-east-1.amazonaws.com/default/setLicenseLevelSchedule";

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
          };
          
        return this.http.post(url, appointments, httpOptions);
    }

    setMastersLevelSchedule(appointments: Appointment[]) : Observable<any> {
        const url = "https://w4hvl0lqll.execute-api.us-east-1.amazonaws.com/default/setMastersLevelSchedule";

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
          };

        return this.http.post(url, appointments, httpOptions)
    }

    
}