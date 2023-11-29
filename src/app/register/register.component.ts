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
  
  constructor(public router: Router){
    
  }

  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  storageGlobal: string = '';

  register() {
    //Validar Campos
      if (this. username !== '' && this.email !== '' && this.password !== '' && this.confirmPassword !== '') {
        console.log("--------------------")
        console.log("Registro En Proceso")
        console.log("--------------------")
    
        // Datos
        console.log("--------------------")
        console.log('Username: ' + this.username)
        console.log('Email: ' + this.email)
        console.log('Password: ' + this.password)
        console.log("--------------------")
    
        // Verificar si la contraseña y la confirmación son iguales
        if (this.password === this.confirmPassword) {
          console.log("--------------------")
          console.log("Registro Exitoso")
          console.log("--------------------")
    
          // Ingresar datos de la API
          let nombreusu = JSON.stringify(this.username)
          let correo = JSON.stringify(this.email);
          let contrasena = JSON.stringify(this.confirmPassword);
    
          localStorage.setItem('nombreusu', nombreusu);
          localStorage.setItem('email', correo);
          localStorage.setItem('password', contrasena);
    
          // Redirección
          console.log("Redireccionando al Login...")
          this.router.navigateByUrl('/');
        } else {
          console.log("Las contraseñas deben coincidir")
          alert("Las contraseñas deben coincidir")
        }

    } else {

      if (this.username == '' && this.email == '' && this.password == '' && this.confirmPassword == ''){
        console.log("Campos totalmente vacios")
        alert("Campos totalmente vacios")
      } else {
        //Correo vacio
        if (this.email == '') {
          console.log("Por favor, ingresa un correo con @")
          alert("Por favor, ingresa un correo con @")
        }
        //Contraseña vacia
        if (this.password == '') {
          console.log("Por favor, ingresa una contraseña valida")
          alert("Por favor, ingresa una contraseña valida")
        } else{
          //Verificación vacio
          if (this.confirmPassword == '') {
            console.log(this.password)
            console.log("Por favor, ingresa la contraseña nuevamente")
            alert("Por favor, ingresa la contraseña nuevamente")
          } else {
            //Verificación no coincidida
            console.log("Error A La Hora De Registrar")
            alert("Error A La Hora De Registrar")
          }
        }
      }
    }
  }

}
