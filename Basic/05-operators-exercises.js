/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let a = 50;
let b = 70;

console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicación
console.log(a / b); // División

console.log(a % b); // Módulo
console.log(a ** b); // Potencia o Exponente

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

a -= 2; // Resta con asignación
a *= 2; // Multiplicación con asignación
a /= 2; // División con asignación
a %= 2; // Módulo con asignación
a **= 2; // Exponente con asignación

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log('hola' == 'hola');
console.log(4 > 2);
console.log(undefined !== null);
console.log(typeof 3 === typeof 5);
console.log('Jimena' < 'Roly');

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log('hola' != 'hola');
console.log(4 < 2);
console.log(undefined != null);
console.log(typeof 3 != typeof 5);
console.log('Jimena' > 'Roly');

// 5. Utiliza el operador lógico and

let x = 4;
let y = 8;
let z = 6;

console.log(z < y && z > x);

// 6. Utiliza el operador lógico or

console.log(z > y || y < x);

// 7. Combina ambos operadores lógicos

console.log((5 > 10 && 15 > 20) || 30 < 40);

// 8. Añade alguna negación

console.log(!(z < y));
console.log(!false);

// 9. Utiliza el operador ternario

const estudiante = true;
estudiante
  ? console.log('Está aprendiendo a programar')
  : console.log('Es Doctor');

// 10. Combina operadores aritméticos, de comparáción y lógicas

a < b && 6 == 6 ? console.log('Es verdadero') : console.log('Es falso');
