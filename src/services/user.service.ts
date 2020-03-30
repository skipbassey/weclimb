import { Injectable } from '@angular/core';
import { User } from 'src/models/user';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: ""
  }

  constructor(private http: HttpClient) { }

  getUser(email: string) :Observable<any> {
    const url = "https://au8x6x3ue1.execute-api.us-east-1.amazonaws.com/default/getUserInfo?email=" + email;

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

  setUserInfo(userInfo: any) {
    var user: User = {
      firstName: userInfo.Items[0].first_name.S,
      lastName: userInfo.Items[0].last_name.S,
      email: userInfo.Items[0].email.S,
      phone: userInfo.Items[0].phone.S,
      role: userInfo.Items[0].role.S
    }
    this.user = user;
  }
}
