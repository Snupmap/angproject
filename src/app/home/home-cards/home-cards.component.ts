import { Component, Input } from '@angular/core';
import { Car } from '../../models/cars';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PurchaseService } from '../../services/purchase.service';

@Component({
  selector: 'app-home-cards',
  imports: [FormsModule, CommonModule],
  templateUrl: './home-cards.component.html',
  styleUrl: './home-cards.component.scss'
})
export class HomeCardsComponent {

  constructor( private purc : PurchaseService){ }

  token = localStorage.getItem('token')

  pickAmount = false

  amount : number = 1
  calculated : number | string = 0

  

  toAmount(){
    this.pickAmount = true
    this.calculated = Math.round(this.singleCar?.price ?? 0) * this.amount;    
    if(this.amount < 1){
      this.calculated = '...'
      this.amount = 0
    }
  }

  toPurchasee(){
    if(this.amount > 0){
     this.purc.getPurchase(localStorage.getItem('phoneNumber'),this.singleCar?.id, this.amount).subscribe(response => console.log(response))
    }
  }
  goBackFunc(){
    this.pickAmount = false
  }



 

  @Input() singleCar? : Car

}
