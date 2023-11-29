import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  storageGlobal: String = ''
  username='';
  pass='';

  constructor(public router: Router){
    
  }
  login(){
    if (this.username == '' && this.pass == '') {
      console.log("Buena mani")
    } else if(this.username == ''){
      console.log("OLIII")
    } else if(this.pass == ''){
      console.log("OLAAA")
    } else {
      this.router.navigateByUrl('/dashboard')
    }
  }

  getstoregeGlobal(){
    let texto = JSON.stringify( localStorage.getItem('campo'))
    console.log(texto)
    //this.storageGlobal=texto
  }

  registerUser(){
    this.router.navigateByUrl('/registrar')
  }
}
