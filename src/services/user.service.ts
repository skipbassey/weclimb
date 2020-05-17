import { Injectable } from '@angular/core';
import { User } from 'src/models/user';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any = { }
  groups: string[] = []

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

  addUser(user: User): Observable<any> {
    const url = "https://a62hdz3sfj.execute-api.us-east-1.amazonaws.com/default/addUser";

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.post(url, user, httpOptions);

  }

  forgotUserName(lastName: string, phone: string): Observable<any> {
    const url = "https://20xl1yz5a7.execute-api.us-east-1.amazonaws.com/default/forgotUserName?phone=" + phone + "&lastName=" + lastName;
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.get(url, httpOptions)
  }

  forgotPassword(body: any): Observable<any> {
    const url = "https://jwigmpiobg.execute-api.us-east-1.amazonaws.com/default/forgotPassword";

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.post(url, body, httpOptions);
  }

  getUserInfo(): any {
    return this.user;
  }

  setUserInfo(userInfo: any) {
    // var user: User = {
    //   firstName: userInfo.Items[0].first_name.S,
    //   lastName: userInfo.Items[0].last_name.S,
    //   email: userInfo.Items[0].email.S,
    //   phone: userInfo.Items[0].phone.S,
    //   role: userInfo.Items[0].role.S
    // }

    // var user: User = {
    //   firstName: userInfo.name,
    //   lastName: userInfo.family_name,
    //   email: userInfo.email,
    //   phone: userInfo.phone_number,
    //   role: userInfo.role
    // }

    this.user = userInfo;
  }

  setUserGroups(group: string[]) {
    this.groups = group
  }

  getUserGroups(): string[] {
    return this.groups;
  }
}
