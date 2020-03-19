import { Injectable } from '@angular/core';
import { User } from 'src/models/user';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User

  constructor(private http: HttpClient) { }

  getUser(body: any) :Observable<any> {
    const url = "https://ueu0miiuo5.execute-api.us-east-1.amazonaws.com/default/getUserInfo";

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

  return this.http.get(url, httpOptions);
  }

  getUserInfo(): User {
    return this.user;
  }

  setUserInfo(user: User) {
    this.user = user;
  }
}
