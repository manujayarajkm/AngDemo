import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(loginObj) {
    return this.http.post<Login>('http://localhost:3000/user/login', loginObj);
  }
}
