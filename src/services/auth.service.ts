import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class AuthService {

    authenticated = false;

    setAccessToken(token: any) {
        sessionStorage.setItem("accessToken", token)
    }

    setRefreshToken(token: any) {
        sessionStorage.setItem("refreshToken", token)
    }

    getToken(): string {
        return sessionStorage.getItem("accessToken")
    }

    setAuthorization(accessToken: any, refreshToken: any) {
        this.setAccessToken(accessToken);
        this.setRefreshToken(refreshToken)
        this.authenticated = true
    }

    logOut() {
        sessionStorage.removeItem("accessToken");
        this.authenticated = false;
    }
}