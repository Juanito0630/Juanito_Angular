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
  usern: string = '';
  pass: string = '';
  storageGlobal: string = '';

  constructor(public router: Router){
    
  }
  login(){
    let usern = localStorage.getItem('username');
    let pass = localStorage.getItem('password');

    let usernParsed = JSON.stringify(this.usern);
    let passParsed = JSON.stringify(this.pass);

    console.log(this.usern);
    console.log(this.pass);

    //Validar campos
    if (this.usern == '' && this.pass == ''){
      console.log("Campos vacios, por favor rellenar formatos")
      alert("Campos vacios, por favor rellenar formatos")
    } else if (this.usern == '') {
      console.log("Por favor, ingresa el nombre")
      alert("Por favor, ingresa el nombre")
      if (this.usern != usern){
        console.log("nombre no existe")
      } else {
        console.log("Dato del Localstorage correcto")
      }
    } else if (this.pass == '') {
      console.log("Por favor, ingresa una contraseña valida")
      alert("Por favor, ingresa una contraseña valida")

    } else if (usern === usernParsed && pass === passParsed){
      
      console.log("Login exitoso")
      console.log("--------------------")
      //Datos
      console.log('Username: ' + this.usern)
      console.log('Password: ' + this.pass)
      console.log("--------------------")

      //Redirección
      console.log("Redireccionando al Dashboard...")
      this.router.navigateByUrl('/dashboard');

    } else {
      console.log("Perfil no existe, por favor verifique el username y/o contraseña")
      alert("Perfil no existe, por favor verifique el username y/o contraseña")
    }
  }

  getstoregeGlobal(){
    let texto = JSON.stringify( localStorage.getItem('username'))
    console.log(texto)
    this.storageGlobal = JSON.parse(texto)  
    //this.storageGlobal=texto
  }

  registerUser(){
    this.router.navigateByUrl('/registrar')
  }
}
