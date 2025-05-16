import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { FormsModule } from '@angular/forms';
import { RegisterData } from '../models/register';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

constructor(private api : RegisterService, private router : Router) { }


firstName : string = ''
lastName : string = ''
email : string = ''
phoneNumber : string = ''
password : string = ''



register(){

  const user : RegisterData = {
  
  firstName : this.firstName,
  lastName : this.lastName,
  email : this.email,
  phoneNumber : this.phoneNumber,
  password : this.password

}


  console.log('clicked')
  this.api.getRegister(user).subscribe(response => {
    console.log('registered', response)
    this.router.navigate(['/login'])
  })

}
onlyNumbers(event: KeyboardEvent) {
  const char = event.key;

  const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'];

  if ((event.ctrlKey || event.metaKey) && ['a', 'c', 'v', 'x'].includes(char.toLowerCase())) return;


  if (!/^\d$/.test(char) && !allowedKeys.includes(char)) {
    event.preventDefault();
  }
}

}
