import { Component } from '@angular/core';
import { MycarsService } from '../services/mycars.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MycarsCardsComponent } from "./mycars-cards/mycars-cards.component";
import { MyCars } from '../models/mycars';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mycars',
  imports: [FormsModule, CommonModule, MycarsCardsComponent],
  templateUrl: './mycars.component.html',
  styleUrl: './mycars.component.scss'
})
export class MycarsComponent {
  constructor(private api : MycarsService){ }
  
  cars : MyCars[] = []


  ngOnInit(){
    this.api.getMyCars(localStorage.getItem('phoneNumber')).subscribe((data: any) => {
      this.cars = data
      console.log(data)
    }
  )
  }


}
