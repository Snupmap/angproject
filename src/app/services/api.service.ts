import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient ) { }




  getCarApi(){
    return this.http.get('https://rentcar.stepprojects.ge/api/Car')
  }

}
