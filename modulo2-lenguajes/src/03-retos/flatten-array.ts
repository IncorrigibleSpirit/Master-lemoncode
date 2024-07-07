//EXCERCISE 3A - FLAT ARRAY
//Dado un array multidimensional, construye una función inmutable que devuelva el mismo array aplanado, esto es, con un único nivel de profundidad.

// ---> EJERCICIO EN JAVASCRIPT NATIVO <-------
// const sample = [1, [2, 3], [[], [5, 6, [7, 8, [9]]]]];
// const flattenArray = (array, depth) => array.flat(depth);
// const result = flattenArray(sample, Infinity);
// console.log(result);

//EXCERCISE 3B - FLAT ARRAY (POLYFILL)
// ¿Has resuelto el ejercicio anterior? Suponiendo que los arrays multidimensionales del ejercicio anterior no serán de naturaleza mixta, es decir, sus elementos siempre serán del mismo tipo ¿Serías capaz de proporcionar un tipado adecuado a dicha función de aplanamiento?

//Para evitar fallas errores y el mensaje "Type instantiation is excessively deep and possibly infinite" debido al uso de "array.flat(depth)", se propone trabajar con polyfill, el cual es un fragmento de código que puede realizar la misma funcion que flat(). El polyfill imita este comportamiento utilizando métodos existentes de JavaScript para proporcionar compatibilidad con versiones anteriores del lenguaje.

const title9: string = "RETOS - FLATTEN ARRAY";
console.log(`%c ${title9}`, "font-weight: bold;");

// Version Typescript
type nestedArray = (number | nestedArray)[];

function flatPolyfill(arr: nestedArray, depth: number): nestedArray {
  let output: nestedArray = [];

  arr.forEach((item) => {
    if (Array.isArray(item) && depth > 0) {
      // Si es mayor a cero, significa que aun esta anidado y debe aplanarse
      output = output.concat(flatPolyfill(item, depth - 1));
      // Se genera llamadas recursivas para llegar al caso base (0).La recursividad permite que el arreglo anidado se aplane a la profundidad deseada .
    } else {
      output.push(item);
    }
  });

  return output;
}

const sample: nestedArray = [1, [2, 3], [[], [5, 6, [7, 8, [9]]]]];
let depth = 4; // Desde aqui se ajusta el nivel de profundudidad de aplanamiento

const result = flatPolyfill(sample, depth);
console.log(result);
console.log(`------------------------`);
