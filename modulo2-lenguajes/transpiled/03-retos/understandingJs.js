"use strict";
const title11 = "RETOS-UNDERSTANDING JS";
console.log(`%c ${title11}`, "font-weight: bold;");
// CUESTION 1 - ¿Existe alguna forma de que la expresión x === x de como resultado false?
const x = NaN;
console.log(x === x);
// CUESTION 2 - Habiendo resuelto la Cuestión l, ¿como implementarías una función que compruebe si un determinado valor es NaN?
const isNaNValue = (param) => {
    if (typeof param === "number") {
        return Number.isNaN(param);
    }
    return true;
};
console.log(isNaNValue(null));
//CUESTION 3 - Habiendo resuelto la Cuestion 2 ¿Existe alguna forma de que la expresión
//!isNaNValue(x) && x !== x de como resultado true?
//No. Para obtener como resultado TRUE en este contexto, se necesita que ambas condiciones logicas sean TRUE.
//Partiendo del hecho de que el único valor en JavaScript que no es igual a sí mismo es NAN, no se podría dar esta condicion.
//CUESTION 4 - ¿Podrías dar con alguna forma de que la expresión x + 1 === x - 1 arroje true?
//CUESTION 5 - Se te ocurre alguna forma de hacer que la expresión x > x de como resultado true?
/// Emplear Postdecremento--;
let count = 1;
const variableX = () => count--;
console.log(variableX() > variableX());
