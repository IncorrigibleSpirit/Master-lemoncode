import { objectElement1, a, b } from "../00-variables/variables";

//CLONE AND MERGE
const title3: string = "ENTREGABLES-CLONE";
console.log(`%c ${title3}`, "font-weight: bold;");

//CLONE:
//Función generica que a partir de un objeto de entrada devuelve una copia del mismo

//1 Definimos un "tipo" que establece la configuracion de un objeto especifico
type objectData = { [key: string | number]: string | number | boolean };

//2Creamos función generica que clona objetos
const cloneObject = <T>(source: T): T => {
  return { ...source };
};

//3 Clonamos objetos
const objectCloned: objectData = cloneObject(objectElement1);
console.log("CLONE:");
console.log(objectCloned);
console.log(`------------------------`);

//4 El objeto clonado al ser tipo "objectData" permite el ingreso de nuevos datos que coinciden con su configuracion
objectCloned.age = 22;
objectCloned.email = "abc@hotmail.com";
console.log("CLONE MODIFIED:");
console.log(objectCloned);
console.log(`------------------------`);

const title4: string = "ENTREGABLES-MERGE";
console.log(`%c ${title4}`, "font-weight: bold;");

//MERGE:
//Función que, dados dos objetos de entrada, devuelva un nuevo objeto con todas las propiedades. En caso de propiedades con el mismo nombre, source sobreescribe a target.

//Clave: No es suficiente establecer UN SOLO tipo de generico <T> en la funcion.
//Se debe usar dos tipos genéricos <S> y <T> para que la función acepte dos objetos con diferentes propiedades.

const mergeObject = <S, T>(source: S, target: T): S & T => {
  return { ...target, ...source };
};

const objectsMerged: objectData = mergeObject(a, b);
console.log("OBJECT MERGED:");
console.log(objectsMerged);
console.log(`------------------------`);

//********************************* //
