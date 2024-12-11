/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

//Este es un comentario en una sola línea

// 2. Escribe un comentario en varias líneas
/* 
Este es un comentario en varias 
líneas separadas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let nombre = 'Roly Gonzalo';
let edad = 38;
let esProgramador = true;
let valorIndefinido = undefined;
let valorNull = null;
let valorSymbol = Symbol('simbol');
let numeroGrande = BigInt(45545456565656565656565656565);

// 4. Imprime por consola el valor de todas las variables

console.log(`El nombre es ${nombre}`);
console.log(`La edad es ${edad}`);
console.log(`El valor booleano es ${esProgramador}`);
console.log(`El valor undefined es ${valorIndefinido}`);
console.log(`El valor null es ${valorNull}`);
console.log(valorSymbol);
console.log(`El número grande es ${numeroGrande}`);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof esProgramador);
console.log(typeof valorIndefinido);
console.log(typeof valorNull);
console.log(typeof valorSymbol);
console.log(typeof numeroGrande);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

nombre = 'Jimena';
edad = 36;
esProgramador = false;
valorIndefinido;
valorNull = null;
valorSymbol = Symbol('simbol');
numeroGrande = 56521525878521526582554587n;

console.log(`El nombre es ${nombre}`);
console.log(`La edad es ${edad}`);
console.log(`El valor booleano es ${esProgramador}`);
console.log(`El valor undefined es ${valorIndefinido}`);
console.log(`El valor null es ${valorNull}`);
console.log(valorSymbol);
console.log(`El número grande es ${numeroGrande}`);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

nombre = true;
edad = '37';
esProgramador = undefined;
valorIndefinido = 45;
valorNull = Symbol('nuevoSymbol');
valorSymbol = 56565658989898787545454112154548787545656565454878787n;
numeroGrande = null;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const NOMBRE = 'Roly Gonzalo';
const EDAD = 38;
const ES_PRO = true;
const VALOR_UNDEFINED = undefined;
const VALOR_NULL = null;
const VALOR_SYMBOL = Symbol('simbol');
const BIG_INT = BigInt(45545456565656565656565656565);

// 9. A continuación, modifica los valores de las constantes

// NOMBRE = 'Roly Gonzalo';
// EDAD = 38;
// ES_PRO = true;
// VALOR_UNDEFINED = undefined;
// VALOR_NULL = null;
// VALOR_SYMBOL = Symbol('simbol');
// BIG_INT = BigInt(45545456565656565656565656565);

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

/* No se puede modificar una constante, el programa nos marca error
TypeError: Assignment to constant variable.
*/
