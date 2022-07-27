import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from "@ionic/storage";


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 0, // Slide en el que empieza
    slidesPerView: 1, // Slide por vista 
    centeredSlides: true, // Centrado de las slides
    speed: 400 // Velocida de transicion de cada slide en milisegundos
  }

  slides = [
    { /* Slide 1 */
      icon: " ",
      clase: " imagen_slide1 ",
      img: "assets/images/slide_1.png",
      title: " FANTASY MUSIC ",
      description: " Bienvenido a la mejor aplicación de música en Colombia. ",
    },
    { /* Slide 2 */
      icon: " ",
      clase: " imagen_slide2 ",
      img: "assets/images/slide_2.png",
      title: " ESCUCHA ",
      description: " Descubre a tus artistas favoritos, divierte mientras escuchas música y creas buenos momentos. ",
    },
    { /* Slide 3 */
      icon: " ",
      clase: " imagen_slide3 ",
      img: "assets/images/slide_3.png",
      title: " CREA TU CUENTA ",
      description: " Ten una mayor seguridad y guarda tus preferencias. ",
    },
    { /* Slide 4 */
      icon: "close",
      clase: " imagen_slide4 ",
      img: "assets/images/slide_4.png",
      title: " FAVORITOS ",
      description: " Añade a favortios a todos tus artistas y canciones, para una mayor facilidad de busqueda. ",
    },
  ]
  
  constructor(private router: Router, private storage: Storage) {
    this.storage.create();
   }

   ngOnInit(): void {
    this.showe().then( x => {
      //console.log(x)
      if (x) {
        this.router.navigateByUrl("/home")
      }
    })
   }

    async showe(){
    const show = await this.storage.get("isIntroShowed");
    return show
   }

  finish() { /* Codigo del icono (x) */
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/home");
  }

}
