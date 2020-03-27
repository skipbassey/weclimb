import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class AuthService {

    authenticated = false;

    setToken(token: any) {
        sessionStorage.setItem("token", token)
    }

    getToken(): string {
        return sessionStorage.getItem('token')
    }

    
}