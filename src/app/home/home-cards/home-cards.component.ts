import { Component, Input } from '@angular/core';
import { Car } from '../../models/cars';

@Component({
  selector: 'app-home-cards',
  imports: [],
  templateUrl: './home-cards.component.html',
  styleUrl: './home-cards.component.scss'
})
export class HomeCardsComponent {

  @Input() singleCar? : Car

}
