import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  guess: string = '';
  resultado: string = "...";
  peliculas: string[] = ['El Padrino', 'Titanic', 'Avatar', 'El Señor de los Anillos', 'Inception'];
  peliculaSecreta: string = this.peliculas[this.numAleatorio(0, this.peliculas.length - 1)];
  numAttempts: number = 0;

  constructor() {}

  numAleatorio(a: number, b: number) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }

  compruebaPelicula() {
    this.numAttempts++;
    if (this.guess.toLowerCase() === this.peliculaSecreta.toLowerCase()) {
      this.resultado = "¡Has acertado la película secreta!";
    } else {
      // Proporcionar una letra y su posición
      const letra = this.peliculaSecreta.charAt(this.numAttempts - 1); // Obtener la letra según el número de intentos
      const posicion = this.peliculaSecreta.indexOf(letra) + 1; // Obtener la posición (1-indexed)
      this.resultado =" Incorrecto. Te doy una letra: '${letra}' en la posición ${posicion}.";
    }
  }

  restartGame() {
    this.guess = '';
    this.resultado = "...";
    this.peliculaSecreta = this.peliculas[this.numAleatorio(0, this.peliculas.length - 1)];
    this.numAttempts = 0;
  }
}