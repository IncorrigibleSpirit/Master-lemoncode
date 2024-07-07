import { objectElement1, a, b } from "../00-variables/variables";
//CLONE AND MERGE
const title3 = "ENTREGABLES-CLONE";
console.log(`%c ${title3}`, "font-weight: bold;");
//2Creamos función generica que clona objetos
const cloneObject = (source) => {
    return Object.assign({}, source);
};
//3 Clonamos objetos
const objectCloned = cloneObject(objectElement1);
console.log("CLONE:");
console.log(objectCloned);
console.log(`------------------------`);
//4 El objeto clonado al ser tipo "objectData" permite el ingreso de nuevos datos que coinciden con su configuracion
objectCloned.age = 22;
objectCloned.email = "abc@hotmail.com";
console.log("CLONE MODIFIED:");
console.log(objectCloned);
console.log(`------------------------`);
const title4 = "ENTREGABLES-MERGE";
console.log(`%c ${title4}`, "font-weight: bold;");
//MERGE:
//Función que, dados dos objetos de entrada, devuelva un nuevo objeto con todas las propiedades. En caso de propiedades con el mismo nombre, source sobreescribe a target.
//Clave: No es suficiente establecer UN SOLO tipo de generico <T> en la funcion.
//Se debe usar dos tipos genéricos <S> y <T> para que la función acepte dos objetos con diferentes propiedades.
const mergeObject = (source, target) => {
    return Object.assign(Object.assign({}, target), source);
};
const objectsMerged = mergeObject(a, b);
console.log("OBJECT MERGED:");
console.log(objectsMerged);
console.log(`------------------------`);
//********************************* //
// Utilizando TypeScript escribe una función que reciba una lista de estudiantes (que tienen nombre y una lista de notas) y devuelva otra lista donde por cada estudiante devuelva su nombre, su nota más alta y la media de sus notas.
// Crea para ello dos entidades, una para representar al estudiante (Student) y otra para representar su nombre, nota más alta y media de notas (StudentSummary).
// No se permite el uso de clases. En caso de usar funciones auxiliares típalas. Puedes usar la función Number.prototype.toPrecision(3) para reducir el número de decimales de la media de calificaciones a tres números.
