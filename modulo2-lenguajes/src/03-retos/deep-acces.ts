//EXCERCISE 2 - DEEP ACCES A
// Implementa un mecanismo deepGet para acceder en profundidad a objetos anidados, de modo que podamos recuperar una propiedad en cualquiera de sus niveles. Mira a continuación el comportamiento que debería seguir:

const title8: string = "DEEP ACCES";
console.log(`%c ${title8}`, "font-weight: bold;");

const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      },
    },
  },
};

// NestedObject representa un tipo recursivo que acepta objetos anidados.
type nestedObject = { [key: string]: nestedObject | number | string | null | undefined };

const deepGet = (obj: nestedObject, ...keys: string[]): any => {
  let currentObj: any = obj;

  for (const propKey of keys) {
    if (typeof currentObj[propKey] !== "undefined") {
      currentObj = currentObj[propKey];
    } else {
      return undefined;
    }
  }
  return currentObj;
};

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject)); // {a: 1, b: {...}}

console.log(`------------------------`);
//COMENTARIO: Cuando se llama a la función deepGet con más de un parámetro después del objeto inicial, los parámetros adicionales se interpretan como un camino (ruta) a una propiedad anidada dentro del objeto. deepGet(myObject, "b", "c"). En este ejemplo, en la primera iteracion currentObj toma el valor de "b (c,d, y f), luego en su segunda itetacion, currentObj solo toma el valor "c", que es null
