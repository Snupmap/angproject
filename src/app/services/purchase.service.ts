import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http : HttpClient) { }

  getPurchase(user : any, car : any, mult: number){
    return this.http.post(`https://rentcar.stepprojects.ge/Purchase/purchase?phoneNumber=${user}&carId=${car}&multiplier=${mult}`, null)
  }

}
