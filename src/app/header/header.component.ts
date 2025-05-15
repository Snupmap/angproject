import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  token : string | null = localStorage.getItem('token')

  firstName : string | null = localStorage.getItem('name')

  lastName : string | null = localStorage.getItem('lastName')
  
 

  logOutFunction(){
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    localStorage.removeItem('lastName')
  }


}
