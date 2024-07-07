// DATA
const title0 = "DATA";
console.log(`%c ${title0}`, "font-weight: bold;");
export const arrayElements1 = [1, "hola", true, 4, 888];
export const arrayElements2 = [2588, "id", "passport"];
export const arrayElements3 = [22, 45, 66, 1, 78, 96];
export const objectElement1 = { Id: 2345455, passport: "Ac345678", country: "ENG", address: "" };
export const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
export const b = { name: "Luisa", age: 31, married: true };
console.log(`Array de elementos #1: [${arrayElements1}]`);
console.log(`Array de elementos #2: [${arrayElements2}]`);
console.log(`Array de elementos #3: [${arrayElements3}]`);
console.log("Objeto 1:");
console.table(objectElement1);
console.log(`-----------------------------------------------`);
