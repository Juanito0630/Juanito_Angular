import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  storageGlobal: string = '';
  
  constructor(public router: Router){
    
  }
  
  register() {
      // Ingresar datos de la API
      let usern = JSON.stringify(this.username)
      let email = JSON.stringify(this.email);
      let password = JSON.stringify(this.password);
      let confirmPassword = JSON.stringify(this.confirmPassword);
    //Validar Campos

    //Validar Campos
    if (this.username == '' && this.email == '' && this.password == '' && this.confirmPassword == '') {
      console.log("Campos vacios, por favor rellenar los formatos")
      alert("Campos vacios, por favor rellenar los formatos")
    } else if (this.username == '') {
      console.log("Por favor, ingresa un nombre de usuario")
      alert("Por favor, ingresa un nombre de usuario")
    } else if (this.email == '') {
      console.log("Por favor, ingresa un correo con @")
      alert("Por favor, ingresa un correo con @")
    } else if (this.password == '') {
      console.log("Por favor, ingresa una contraseña valida")
      alert("Por favor, ingresa una contraseña valida")
    } else if (this.confirmPassword == '') {
      console.log(this.password)
      console.log("Por favor, ingresa la contraseña nuevamente")
      alert("Por favor, ingresa la contraseña nuevamente")
    } else if (this.confirmPassword != this.password) {
      console.log("Las contraseñas deben coincidir")
      alert("Las contraseñas deben coincidir")
    } else {

      console.log("Registro exitoso");
      console.log("--------------------");
      //Datos
      console.log('Username: ' + this.username)
      console.log('Email: ' + this.email)
      console.log('Password: ' + this.password)
      console.log('Confirmación: ' + this.confirmPassword)
      console.log("--------------------")
      
      localStorage.setItem('username',usern)
      localStorage.setItem('email',email);
      localStorage.setItem('password',password);

      //Redirección
      console.log("Redireccionando al Login...")
      this.router.navigateByUrl('/');
    }
  }

  getStorage(){
    let texto = JSON.stringify(localStorage.getItem('username'));
    this.storageGlobal = JSON.parse(texto);
  }

  UserStatus(){
    console.log("Redireccionando a Login...")
    this.router.navigateByUrl('/');
  }
}