/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let nombre = 'Roly Gonzalo';
let saludo = 'Hola';

console.log(saludo + ' ' + nombre);

// 2. Muestra la longitud de una cadena de texto

console.log(nombre.length);

// 3. Muestra el primer y último carácter de un string

console.log(nombre[0]);
console.log(nombre[nombre.length - 1]);

// 4. Convierte a mayúsculas y minúsculas un string

console.log(nombre.toLocaleUpperCase());
console.log(nombre.toLocaleLowerCase());

// 5. Crea una cadena de texto en varias líneas

let cadena = `Esta es una cadena
de texto
en varias líneas
`;
console.log(cadena);

// 6. Interpola el valor de una variable en un string

console.log(`Mi nombre es ${nombre}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(cadena.replaceAll(' ', '-'));

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(cadena.includes('texto'));

// 9. Comprueba si dos strings son iguales

let a = 'Carlos';
let b = 'Carlos';
console.log(a == b);

// 10. Comprueba si dos strings tienen la misma longitud

console.log(cadena.length === nombre.length);
