import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private http : HttpClient) { }

  getFilter(capacity : number | null, startYear : number | null, endYear : number | null, city : string | null){
    return this.http.get(`https://rentcar.stepprojects.ge/api/Car/filter?capacity=${capacity}&startYear=${startYear}&endYear=${endYear}&city=${city}&pageIndex=1&pageSize=10`)
  }
  
}
