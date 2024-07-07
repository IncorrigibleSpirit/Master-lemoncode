import { arrayElements1, arrayElements2, arrayElements3 } from "../00-variables/variables";
//CONCAT
const title2 = "ENTREGABLES - CONCAT";
console.log(`%c ${title2}`, "font-weight: bold;");
//(CONCAT V1) función (inmutable) que, dados 2 arrays de entrada, devuelva la concatenación de ambos. Rest / spread.
const concatV1 = (array1, array2) => {
    return [...array1, ...array2];
};
console.log("CONCATENED ARRAYS VERSION 1:");
console.log(concatV1(arrayElements1, arrayElements2));
console.log(`------------------------`);
//(CONCAT V2) versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).
const concatV2 = (...arrays) => {
    return arrays.flat();
};
console.log("CONCATENED ARRAYS VERSION 2:");
console.log(concatV2(arrayElements1, arrayElements2, arrayElements3));
console.log(`------------------------`);
