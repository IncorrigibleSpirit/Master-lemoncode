import { arrayElements1 } from "../00-variables/variables";
//ARRAY OPERATIONS
const title1 = "ENTREGABLES - ARRAY OPERATIONS";
console.log(`%c ${title1}`, "font-weight: bold;");
//(HEAD) Función (inmutable) que extraiga y devuelva el 1er elemento. Utiliza destructuring.
const extractHeadElement = ([firstItem]) => firstItem;
const extractFirstElement = extractHeadElement(arrayElements1);
console.log("HEAD:");
console.log(extractFirstElement);
console.log(`------------------------`);
//(TAIL) Función (inmutable) que, dado un array devuelva todos menos el primer elemento. Utiliza rest operator.
const extractTailElement = ([, ...rest]) => rest;
const extractLastElement = extractTailElement(arrayElements1);
console.log("TAIL:");
console.log(extractLastElement);
console.log(`------------------------`);
//(INIT) función (inmutable) que, dado un array devuelva todos los elementos menos el último.
const allExceptLast = (array) => {
    return array.slice(0, -1);
};
console.log("ALL EXCEPT LAST:");
console.log(allExceptLast(arrayElements1));
console.log(`------------------------`);
//(LAST) función (inmutable) que, dado un array como entrada devuelva el último elemento.
const LastElement = (array) => {
    return array.slice(-1);
};
console.log("LAST ELEMENT:");
console.log(LastElement(arrayElements1));
console.log(`------------------------`);
