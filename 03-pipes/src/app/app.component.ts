import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Capitán América';
  nombre2 = 'joAn aNtoni OrfIla';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje = 0.234;
  moneda = 1234.5;
  fecha = new Date();
  activar = true;
  idioma = 'es';
  videoUrl = 'https://www.youtube.com/embed/hJ7EymoaYDY';

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 3000 );
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 50,
    direccion: {
      calle: 'Primera',
      puerta: 'Segunda'
    }
  }

}
