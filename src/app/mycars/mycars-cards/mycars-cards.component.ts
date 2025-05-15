import { Component, Input } from '@angular/core';
import { Car } from '../../models/cars';
import { MyCars } from '../../models/mycars';

@Component({
  selector: 'app-mycars-cards',
  imports: [],
  templateUrl: './mycars-cards.component.html',
  styleUrl: './mycars-cards.component.scss'
})
export class MycarsCardsComponent {
  
  @Input() singleCar? : MyCars




}
