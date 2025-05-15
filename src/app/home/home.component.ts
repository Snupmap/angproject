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

  showNoDataFound = false

  city : string ='' 
  capacity : number | string = ''
  startYear : number | string = ''
  endYear : number | string = ''




  ngOnInit(){
    this.api.getCarApi().subscribe((data: any) => {
      this.cars = data.filter((car : any) => car.imageUrl1 != null && car.imageUrl2 != null && car.imageUrl3 != null && car.year < 2025 && car.year > 1950 && car.model !== 'Utopia')
      console.log(data)
    }
  )
  }

  filter(){
    this.filt.getFilter(this.capacity, this.startYear, this.endYear, this.city)
    .subscribe({
      
      next :((resp:any) => {
        this.cars = resp.data
        console.log(resp.data)
        console.log(this.cars)
        this.showNoDataFound = false
      }),

      error : (er => {
        console.log(er.status)
        this.showNoDataFound = true
      })
    })

  }


  


}
