import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent {
  capturedImage: string | undefined; // Esta propiedad almacenará la URL de la imagen

  constructor() {}

  async takePicture() {
    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        quality: 100
      });
      this.capturedImage = photo.dataUrl;  // Asigna la URL de la imagen a capturedImage
    } catch (error) {
      console.error('Error al tomar la foto', error);
    }
  }
}
