"use strict";
//EXCERCISE 1 - CONSOLE TRACES
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const title7 = "RETOS - CONSOLE TRACES";
console.log(`%c ${title7}`, "font-weight: bold;");
//Función que recibe un numero "X" en ms. Devolvera una promesa (new promise), atendiendo retraso programado por el setTime out y los ms.
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//Función asincrónica que coordina el retraso en ms (llama con await la funcion delay) y muestra el mensaje recibido por parametro.
const showMessage = (_a) => __awaiter(void 0, [_a], void 0, function* ([time, message]) {
    yield delay(time);
    console.log(message);
});
//Array<() => Promise<void>> ***Arreglo de funciones que devuelven una promesa (void)***
const triggers = [
    () => __awaiter(void 0, void 0, void 0, function* () { return yield showMessage([200, "third"]); }),
    () => __awaiter(void 0, void 0, void 0, function* () { return yield showMessage([100, "second"]); }),
];
const run = (triggers) => __awaiter(void 0, void 0, void 0, function* () {
    for (const arrayElement of triggers) {
        yield arrayElement();
    }
    console.log("first");
    console.log(`------------------------`);
});
run(triggers);
// COMENTARIO>
// triggers.forEach((t) => t());
// Cuando se usa forEach() en un array de funciones asincrónicas, estas se ejecutan a la vez (como sucede con Promise.all), de modo que no se obtiene una ejecución secuencial. Por eso, se hace indispensable convertir "run" en una funcion asincronica (async await), donde await esperara -deforma asincronica y no bloqueante- a que una promesa se resuelva, para darle salida a la siguiente.
