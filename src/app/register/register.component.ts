import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

constructor(private api : RegisterService) { }



}
