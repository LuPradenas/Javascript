// <---------- CAPITULO 1 ---------------->

// varibles

// var,let,const

// Tipos de datos

// String = "cadena de texto"
// Number = "numeros"
// Boolean = "true o false"

// casos especiales
// undefined = " existe pero no esta definida u inicializada"
// null = "no vale nada esta vacia"
// NaN = "no es un numero"

//  multiples varibles = ""
// Scope = "alcance de las variables"
// Hoisting =" fases de creacion"

// prompt es un metodo para ingresar texto
// concat metodo de cadena

// saludo = "Hola,";
// pregunta = "como estas?";

// frase = saludo + pregunta;

// document.write(frase);

// concatenar un string forzadolo

// nombre = "Luciana Pradenas";
// frase = `soy ${nombre} y estoy caminando`;

// document.write(frase);

// operadores comparacion

// let numero = 23;
// let numero2 = 23;

// document.write(numero == numer2);
// document.write(numero === numer2);
// document.write(numero === numer2);
// document.write(numero !== numer2);
// document.write(numero > numer2);
// document.write(numero < numer2);

// logicos

// AND
// si alguna de las dos es falsa entonces toda la afirmacion es falsa
// let num1 = 13;
// let num2 = 23;

// afirmacion1 = num1 < num2;
// afirmacion2 = num1 != num2;
// document.write(afirmacion1 && afirmacion2);

// OR

// let num2 = 23;
// si cualquiera de las dos es verdadera todo es verdadero y te tira true
// y si las dos son falsas te tiro false

// let num1 = 13;
// afirmacion1 = num1 < num2;
// afirmacion2 = num1 != num2;
// document.write(afirmacion1 || afirmacion2);

// NOT!

// si es verdadero convertilo en falso
// let num1 = 13;
// afirmacion1 = num1 < num2;
// afirmacion2 = num1 != num2;
// document.write(!afirmacion1);

// <----------- OPERACION ------>

// let num1 = 12;
// let num2 = 24;
// let num3 = 25;
// let num4 = 92;
// let num5 = 91;

// op = (num1 < num2 || num2 < num3) && (!(num1 != num2 ) && num5 != num3);
//       //  true    ||      true    &&        false      &&      true

//     //     true                   &&            false

//     // false

// document.write(op);

// let num1 = 12;
// let num2 = 24;
// let num3 = 25;
// let num4 = 92;
// let num5 = 91;

// op = (num5 > num2  && num2 < num3) || (!(num1 === num2 ) || num3 != num3);
//       // true    &&      true     ||      true   ||    false

//     //     true                   ||          false

//     // true

// document.write(op);

// condicionales

//  let nombre = 'lucas';

// if(nombre  == "lucas"){
//     alert("tu nombre es " + nombre);
// }

// else if (nombre == "dalto"){

//      alert("tu nombre es " + nombre);
// }

// let nombre = "pedro";

// if (nombre == "lucas") {
//   alert("tu nombre es  malardo");
// } else if (nombre == "dalto") {
//   alert("tu nombre es manuel");
// } else {
//   alert("tu nombre es otro");
// }
