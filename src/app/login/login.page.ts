import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';  // Importa HttpClient

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  usernameOrEmail: string = '';
  password: string = '';

  // Inyectar HttpClient en el constructor
  constructor(private router: Router, private http: HttpClient) {}

  onLogin() {
    const loginData = {
      email: this.usernameOrEmail,  // Cambiar 'usernameOrEmail' por 'email'
      password: this.password
    };
  
    console.log('Datos enviados:', loginData); // Verifica los datos antes de enviarlos
  
    this.http.post('http://localhost:3000/login', loginData)
      .subscribe(
        (response: any) => {
          console.log('Login exitoso', response);
          this.router.navigate(['/practica1']);
        },
        (error: any) => {
          console.error('Error de conexión:', error);
          if (error.status === 401) {
            alert('Correo o contraseña incorrectos');
          } else {
            alert('Error de conexión');
          }
        }
      );
  }
  
}