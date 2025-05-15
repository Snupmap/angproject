import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MycarsService {

  constructor(private http : HttpClient) { }

  getMyCars(userNum : string | null){
    return this.http.get(`https://rentcar.stepprojects.ge/Purchase/${userNum}`)
  }
}
