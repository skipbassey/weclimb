import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class LoginService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        const url = "https://ae4o7a3u62.execute-api.us-east-1.amazonaws.com/default/login";

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
        };

        const body = {
            email: username,
            password: password
        }

        return this.http.post(url, body, httpOptions)
    }
}