import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterData } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient) { }

  getRegister(userData : RegisterData){
    return this.http.post('https://rentcar.stepprojects.ge/api/Users/register', userData)
  }

}
