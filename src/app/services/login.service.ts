import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginData } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }


  getLogIn(data : loginData){
    return this.http.post('https://rentcar.stepprojects.ge/api/Users/login', data)
  }

}
