import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { loginData } from '../models/login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private api : LoginService, private router : Router) { }



  token : string = ''
  name : string = ''


firstName : string = ''
lastName : string = ''
email : string = ''
phoneNumber : string = ''
password : string = ''



logIn(){

  const user : loginData = {
  
  firstName : this.firstName,
  lastName : this.lastName,
  email : this.email,
  phoneNumber : this.phoneNumber,
  password : this.password

}



  console.log('clicked')
  this.api.getLogIn(user).subscribe((response : any) => {

    this.token = response.token
    this.name = response.firstName
    this.lastName = response.lastName
    this.phoneNumber = response.phoneNumber

    localStorage.setItem('token', this.token)
    localStorage.setItem('name', this.name)
    localStorage.setItem('lastName', this.lastName)
    localStorage.setItem('phoneNumber', this.phoneNumber)
    
    console.log('Logged in', response)
    this.router.navigate(['/home'])

    
    
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
