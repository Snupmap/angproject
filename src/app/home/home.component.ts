import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Car } from '../models/cars';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private api : ApiService) { }

  cars : Car[] = []

  ngOnInit(){
    this.api.getCarApi().subscribe((data: any) => {
      this.cars = data.filter((car : any) => car.imageUrl1 != null)
      console.log(data)
    }
  )
  }
}
