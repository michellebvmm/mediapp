import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'; 

@Component({
  selector: 'app-practica1',
  templateUrl: './practica1.page.html',
  styleUrls: ['./practica1.page.scss'],
})
export class Practica1Page {
  photo: string | undefined;

  constructor() {}

  async takePhoto() {
    try {
      // Abre la cámara directamente y toma una foto
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl, // Esto nos da la URL en formato Data URL
        source: CameraSource.Camera, // Usamos CameraSource.Camera para abrir la cámara
        quality: 100, // Calidad máxima
        allowEditing: false, // No permitir la edición de la imagen
        saveToGallery: false, // No guardar en la galería automáticamente
      });

      this.photo = photo.dataUrl; // Asignamos la foto al modelo
    } catch (error) {
      console.error('Error taking photo', error);
    }
  }
}
