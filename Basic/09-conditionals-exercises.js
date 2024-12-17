/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

const miNombre = 'Roly';

if (miNombre === 'Roly') {
  console.log(`Minobre es ${miNombre}`);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

const nombre = 'Carlos';
const pass = 'carlos123456';

if (nombre === 'Carlos' && pass === 'carlos123456') {
  console.log(`El nombre y la contraseña son correctos`);
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

const numero = 4;

if (numero > 0) {
  console.log('El número es positivo');
} else if (numero < 0) {
  console.log('El número es negativo');
} else {
  console.log('El número es cero');
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

const votar = 12;

if (votar >= 18) {
  console.log('la persona puede votar');
} else {
  console.log(`La persona no puede votar le faltan ${18 - votar} años`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

const edad = 25;

edad >= 18
  ? console.log('La persona es mayor de edad')
  : console.log('La persona es menor de edad');

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

const mes = 'enero';

if (mes === 'enero' || mes === 'febrero' || mes === 'marzo') {
  console.log('La estación es verano');
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7
