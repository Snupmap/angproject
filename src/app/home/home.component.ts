import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Car } from '../models/cars';
import { HomeCardsComponent } from "./home-cards/home-cards.component";
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, HomeCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private api : ApiService, private filt : FilterService) { }

  cars : Car[] = []



  city : string ='' 
  capacity : number | string = ''
  startYear : number | string = ''
  endYear : number | string = ''




  ngOnInit(){
    this.api.getCarApi().subscribe((data: any) => {
      this.cars = data.filter((car : any) => car.imageUrl1 != null && car.imageUrl2 != null && car.imageUrl3 != null && car.year < 2025 && car.year > 1950)
      console.log(data)
    }
  )
  }

  filter(){
    this.cars = []
    this.filt.getFilter(this.capacity, this.startYear, this.endYear, this.city).subscribe((el : any) => {
      this.cars = (Array.isArray(el) ? el : el?.data || [])
        .filter((car: any) => car.imageUrl1 != null && car.imageUrl2 != null && car.imageUrl3 != null);
        console.log(el)
    }) 

  }




}
