//EXCERCISE 4 - MEMOIZATION

// APARTADO A
// Implementa un mecanismo de memoización para funciones costosas y tipalo con TypeScript. La memoización optimiza sucesivas llamadas del siguiente modo:

const title10: string = "RETOS-MEMOIZATION";
console.log(`%c ${title10}`, "font-weight: bold;");

const expensiveFunction = (): number => {
  console.log("Una única llamada");
  return 3.1415;
};

//1 Se crea un "tipo" de funcion que acepta y retorna numero
type functionType = (value: number) => number;

//2 Se crea una funcion de memorizacion / plantilla que acepta una function "tipo".
const memoize = (func: functionType) => {
  const cache: { [key: string]: any } = {}; //3 Se establece el objeto cache (key,value)

  //4 Se retorna nueva funcion. Esta toma el argumento numerico de la funcion original.
  return (arg: number) => {
    const key = JSON.stringify(arg); //5 El numero ingresado es convertido a string. Sera la ["Key"] en cache.
    if (cache[key] !== undefined) {
      //6 Se verifica si la clave ya está en el cache y tiene un valor definido
      return cache[key]; //7 Se retorna el valor memorizado si está disponible en el cache
    }

    const value = func(arg); //8 Se llama funcion original con su argumento a fin de extraer su return => "value"
    cache[key] = value; //9 Se almacena el "value" en el cache asociado a la "key" correspondiente
    return value; // Se retorna el valor obtenido de la función original
  };
};

const memoized = memoize(expensiveFunction);
console.log(memoized(23));
console.log(memoized(23));
console.log(memoized(55));
console.log(memoized(66));
console.log(`------------------------`);

// APARTADO B
// ¿Podrías hacerlo en una sola línea?

//APARTADO C
// Contempla ahora la posibilidad de que la función a memoizar pueda tener argumentos. Por simplicidad supongamos sólo argumentos primitivos: string, number o boolean y que no sean undefined. ¿Podrías hacer una versión aceptando argumentos? ¿Cómo la tiparías con TS?

//LA CLAVE ESTA EN LA GENERACION DE LA ["KEY"].
//Considerar la [key] del cache con solo un argumento (por ejemplo, arg1) puede llevar a resultados incorrectos cuando los resultados de una función depende de varios argumentos (ejemplo, [arg1, arg2])

let counter: number = 0; // Contabiliza cuantas veces se llama la funcion repeatText

type functionModel = (arg1: number, arg2: string) => string;

const repeatText: functionModel = (repetitions, text) => (counter++, `${text} `.repeat(repetitions).trim());

const newMemoize = (func: functionModel) => {
  const cache2: { [key: string]: any } = {};

  return (arg1: number, arg2: string) => {
    const key = JSON.stringify([arg1, arg2]);
    if (cache2[key] !== undefined) {
      return cache2[key];
    }

    const value = func(arg1, arg2);
    cache2[key] = value;
    return value;
  };
};

const memoizedGreet = newMemoize(repeatText);

console.log(memoizedGreet(1, "pam"));
console.log(memoizedGreet(3, "hello"));
console.log(memoizedGreet(1, "pam"));
console.log(memoizedGreet(1, "pam"));
console.log(memoizedGreet(6, "tan"));
console.log(counter);

/// OBJETO CACHE
// {
//   '["1","pam"]': "pam",
//   '["3","hello"]': "hello hello hello",
//   '["6","tan"]': "tan tan tan tan tan tan"
// }
