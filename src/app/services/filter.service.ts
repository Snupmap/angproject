import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private http : HttpClient) { }

  getFilter(capacity : number | string, startYear : number | string, endYear : number | string, city : string | string){
    return this.http.get(`https://rentcar.stepprojects.ge/api/Car/filter?capacity=${capacity}&startYear=${startYear}&endYear=${endYear}&city=${city}&pageIndex=1&pageSize=10`)
  }
  
}
