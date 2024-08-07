import "./styles/mystyles.scss";

const title1 = "ARCHIVO TS: FUNCION Y CONSOLE.LOG";
console.log(`%c ${title1}`, "font-weight: bold;");
// función que reciba una frase en formato string y devuelva la palabra más larga//

const biggestWord = (phrase: string): string => {
  const words = phrase.split(" ");
  const biggest = words.sort((a, b) => b.length - a.length);
  return biggest[0];
};

console.log(`Palabra mas larga de la frase ingresada: ${biggestWord("Ejercicios básicos de JavaScript")}`);

console.log("Hola Mundo1!");
console.log("Hola Mundo2!");
