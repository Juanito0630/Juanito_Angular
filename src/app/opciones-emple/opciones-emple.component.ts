import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-opciones-emple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './opciones-emple.component.html',
  styleUrl: './opciones-emple.component.css'
})
export class OpcionesEmpleComponent {

  showModal: boolean = false;
  showModal2: boolean = false;
  showModal3: boolean = false;

  ngOnInit() {
    // Puedes realizar acciones de inicialización aquí si es necesario.
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  openModal2() {
    this.showModal2 = true;
  }

  closeModal2() {
    this.showModal2 = false;
  }

  openModal3() {
    this.showModal3 = true;
  }

  closeModal3() {
    this.showModal3 = false;
  }
}
