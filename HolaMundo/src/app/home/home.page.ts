import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  guess: string = '';
  resultado: string = "...";
  peliculas: { nombre: string; imagen: string }[] = [
    { nombre: 'El Padrino', imagen: 'assets/images/el_padrino.jpg' },
    { nombre: 'Titanic', imagen: 'assets/images/titanic.jpg' },
    { nombre: 'Avatar', imagen: 'assets/images/avatar.jpeg' },
    { nombre: 'El Señor de los Anillos', imagen: 'assets/images/el_señor_de_los_anillos.jpg' },
    { nombre: 'Inception', imagen: 'assets/images/The_Inception.png' },
  ];
  peliculaSecreta: { nombre: string; imagen: string } = this.peliculas[this.numAleatorio(0, this.peliculas.length - 1)];
  numAttempts: number = 0;

  constructor() {}

  numAleatorio(a: number, b: number) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }

  compruebaPelicula() {
    this.numAttempts++;
    if (this.guess.toLowerCase() === this.peliculaSecreta.nombre.toLowerCase()) {
      this.resultado = "¡Has acertado la película secreta!";
    } else {
      const letra = this.peliculaSecreta.nombre.charAt(this.numAttempts - 1);
      const posicion = this.peliculaSecreta.nombre.indexOf(letra) + 1;
      this.resultado = `Incorrecto. Te doy una letra: '${letra}' en la posición ${posicion}.`;
    }
  }

  restartGame() {
    this.guess = '';
    this.resultado = "...";
    this.peliculaSecreta = this.peliculas[this.numAleatorio(0, this.peliculas.length - 1)];
    this.numAttempts = 0;
  }
}