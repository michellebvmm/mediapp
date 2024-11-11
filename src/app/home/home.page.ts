import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchText: string = ''; 
  slideOpts = {
    initialSlide: 0,       
    speed: 400,            
    autoplay: {
      delay: 3000,         
    },
    loop: true,            
    slidesPerView: 1,      
    spaceBetween: 0,       
    pagination: {
      el: '.swiper-pagination',  
      clickable: true
    }
  };

  
  constructor(private navCtrl: NavController) { }  // Inyectar NavController


  // Función para iniciar sesión
  login() {
    this.navCtrl.navigateForward('/login');
  }
  // Función para abrir el mapa (consultorios)
  openMap() {
    console.log('Abrir mapa de consultorios');
    // Aquí puedes redirigir a una página de mapa o mostrar un mapa integrado
  }

  // Función para abrir el buzón de quejas
  openHelp() {
    console.log('Abrir buzón de quejas');
    // Aquí puedes redirigir a una página de quejas o mostrar un formulario de contacto
  }
}
