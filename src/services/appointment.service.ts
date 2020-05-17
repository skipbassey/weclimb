import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Appointment } from 'src/models/Appointment';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { AuthService } from './auth.service';

Injectable()
export class AppointmentService {

  schedule: Appointment[] = [];

    constructor(
      private http: HttpClient,
      private authService: AuthService,
      ) { }

    getLicensedLevelFirstSession(): Observable<any> {
        const url = "https://gg11vbof64.execute-api.us-east-1.amazonaws.com/dev/getLicenseLevelFirstSessionSchedule";

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              "Authorization": this.authService.getToken()
            })
          };

        return this.http.get(url, httpOptions);
    }

    getLicensedLevelInsurance(): Observable<any> {
        const url = "https://wk1co93jva.execute-api.us-east-1.amazonaws.com/default/getLicenseLevelInsuranceSchedule"
    
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              "Authorization": this.authService.getToken()
            })
          };

        return this.http.get(url, httpOptions);
    }

    getLicensedLevelSelfPay(): Observable<any> {
        const url = "https://17emam9dlh.execute-api.us-east-1.amazonaws.com/default/getLicenseLevelSelfPaySchedule";

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              "Authorization": this.authService.getToken()
            })
          };

        return this.http.get(url, httpOptions);
    }

    getMastersLevelIntake(): Observable<any> {
        const url = "https://hcarij2xh8.execute-api.us-east-1.amazonaws.com/default/getMastersLevelIntakeSchedule";

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              "Authorization": this.authService.getToken()
            })
          };

        return this.http.get(url, httpOptions);
    }

    getMastersLevelSelfPay(): Observable<any> {
        const url = "https://qrydefjkte.execute-api.us-east-1.amazonaws.com/default/getMastersLevelSelfPaySchedule";

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              "Authorization": this.authService.getToken()
            })
          };

        return this.http.get(url, httpOptions);
    }

    getAdolescentGroupSelfPay(): Observable<any> {
        const url = "https://e1nqo2h2la.execute-api.us-east-1.amazonaws.com/default/getAdolescentSchedule";

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            "Authorization": this.authService.getToken()
          })
        };

        return this.http.get(url, httpOptions);
    }

    setAdolescentSchedule(appointments: Appointment[]): Observable<any> {
      const url = "https://wv80t6hee8.execute-api.us-east-1.amazonaws.com/default/setAdolescentSchedule";

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          "Authorization": this.authService.getToken()
        })
      };

      return this.http.post(url, appointments, httpOptions);

    }

    setLicensedLevelFirstSession(appointments: Appointment[]): Observable<any> {
        const url = "https://o18ov9ki32.execute-api.us-east-1.amazonaws.com/default/setLicenseLevelSchedule";

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              "Authorization": this.authService.getToken()
            })
          };
          
        return this.http.post(url, appointments, httpOptions);
    }

    setLicenseLevelSchedule(appointments: Appointment[]): Observable<any> {
      const url = "https://o18ov9ki32.execute-api.us-east-1.amazonaws.com/default/setLicenseLevelSchedule";

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          "Authorization": this.authService.getToken()
        })
      };

      return this.http.post(url, appointments, httpOptions)
    }

    setMastersLevelSchedule(appointments: Appointment[]) : Observable<any> {
        const url = "https://w4hvl0lqll.execute-api.us-east-1.amazonaws.com/default/setMastersLevelSchedule";

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              "Authorization": this.authService.getToken()
            })
          };

        return this.http.post(url, appointments, httpOptions)
    }

    bookAppointment(appt: Appointment): Observable<any> {
      const url = "https://1wm21omqnc.execute-api.us-east-1.amazonaws.com/default/bookAppointment";

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          "Authorization": this.authService.getToken()
        })
      };

      return this.http.post(url, appt, httpOptions)
    }

    getMyAppointments(email: string): Observable<any> {
      const url = "https://5for6fp862.execute-api.us-east-1.amazonaws.com/default/getMyAppointments?email=" + email;

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          "Authorization": this.authService.getToken()
        })
      };

      return this.http.get(url, httpOptions)
    }

    getAppointmentsByCounselor(name: string): Observable<any> {
      const url = " https://6559d4fmz9.execute-api.us-east-1.amazonaws.com/default/getAppointmentsByCounselor?counselor=" + name;

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          "Authorization": this.authService.getToken()
        })
      };

      return this.http.get(url, httpOptions)
    }

    clearSchedule() {
      this.schedule = [];
    }

    removeAppointment(appt: Appointment) {
      this.schedule = this.schedule.filter(x => x.date !== appt.date);
    }
}