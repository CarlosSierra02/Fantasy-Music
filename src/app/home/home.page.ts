import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpt = {
    initialSlide: 0, // Slide inicial
    slidesPerView: 1, // Slide por vistas
    centeredSlides: true, // Centrado de las slides
    speed: 400 // Velocida de transicion de cada slide en milisegundos
  }

  constructor() {}

}
