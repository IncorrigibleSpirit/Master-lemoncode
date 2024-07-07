//EXCERCISE 1 - CONSOLE TRACES

const title7: string = "RETOS - CONSOLE TRACES";
console.log(`%c ${title7}`, "font-weight: bold;");

//Función que recibe un numero "X" en ms. Devolvera una promesa (new promise), atendiendo retraso programado por el setTime out y los ms.
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

//Función asincrónica que coordina el retraso en ms (llama con await la funcion delay) y muestra el mensaje recibido por parametro.
const showMessage = async ([time, message]: [number, string]) => {
  await delay(time);
  console.log(message);
};

//Array<() => Promise<void>> ***Arreglo de funciones que devuelven una promesa (void)***
const triggers: Array<() => Promise<void>> = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

const run = async (triggers: Array<() => Promise<void>>): Promise<void> => {
  for (const arrayElement of triggers) {
    await arrayElement();
  }
  console.log("first");
  console.log(`------------------------`);
};

run(triggers);

// COMENTARIO>
// triggers.forEach((t) => t());
// Cuando se usa forEach() en un array de funciones asincrónicas, estas se ejecutan a la vez (como sucede con Promise.all), de modo que no se obtiene una ejecución secuencial. Por eso, se hace indispensable convertir "run" en una funcion asincronica (async await), donde await esperara -deforma asincronica y no bloqueante- a que una promesa se resuelva, para darle salida a la siguiente.
