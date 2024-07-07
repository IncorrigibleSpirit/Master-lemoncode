import _ from "lodash"; //Libreria para trabajar igualdad de objetos (_.isEqual())
//*************************************//
// 101 BIGGEST WORD: Crea una función que reciba una frase en formato string y devuelva la palabra más larga.
//*************************************//
const biggestWord = (phrase) => {
    const words = phrase.split(" ");
    const biggest = words.sort((a, b) => b.length - a.length);
    return biggest[0];
};
const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};
function values(obj) {
    return Object.values(obj);
}
function printAverage(classResults) {
    const scoreList = values(classResults);
    const totalScore = scoreList.reduce((acc, score) => acc + score, 0);
    const averageScore = totalScore / scoreList.length;
    return Math.ceil(averageScore);
}
function scoreLevel(score) {
    switch (score) {
        case 10:
            return "Desempeño general: Matrícula de honor";
        case 9:
            return "Desempeño general: Sobresaliente";
        case 8:
            return "Desempeño general: Notable";
        case 7:
            return "Desempeño general: Bien";
        case 6:
            return "Desempeño general: Suficiente";
        case 5:
            return "Desempeño general: Suficiente";
        case 4:
        case 3:
        case 2:
        case 1:
            return "Desempeño general: Insuficiente";
        default:
            return `Valor erróneo: ${score}`;
    }
}
const scoreAverage = printAverage(eso2o);
const performanceLevel = scoreLevel(scoreAverage);
function objectValues(obj) {
    const resultValues = Object.values(obj);
    return resultValues;
}
//console.log(objectValues({ id: 31, duration: 310, name: "long video", format: "mp4" }));
//*************************************//
//114 VALUES B: Evita añadir las propiedades heredadas.
// Funciones constructoras y prototipos
//---> EJERCICIO EN JAVASCRIPT NATIVO <-------
//*************************************//
// // 1 Funcion que retorna solo las propiedades propias del objeto. No incluye propiedades/metodos heredados.
// function justPrivateValues(obj) {
//   const resultV = [];
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       resultV.push(obj[key]);
//     }
//   }
//   return resultV;
// }
// //2 Definicion de funcion constructora
// function person (name, id, phoneNumber) {
//   this.name = name;
//   this.id = id;
//   this.phoneNumber = phoneNumber;
// }
// //3 Definicion de metodo prototipo
// person.prototype.walk = function () {
//   console.log(`My name is ${this.name}, and Im walking`);
// };
// // Instanciacion de funcion
// var john = new person("John", "AR2256", 3417741);
// console.log(justPrivateValues(john));
// john.walk();
//*************************************//
//103 CHECK ARGUMENTS: crea una propuesta de verificacion de argumentos mas eficiente
//*************************************//
const input = (argument) => argument !== null && argument !== undefined ? console.log(argument) : console.log("argument is required");
//input(undefined);
//input(null);
//*************************************//
//105 OBJECT EQUAL: comparacion de objetos: claves y valores.
//*************************************//
function isEqual(objectA, objectB) {
    const keysA = Object.keys(objectA);
    const keysB = Object.keys(objectB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    // 1era condicion: verifica si objectB no tiene la propiedad key
    // 2da condicion: si los valores de las propiedades no son iguales
    for (const key of keysA) {
        if (!objectB.hasOwnProperty(key) || objectA[key] !== objectB[key]) {
            return false;
        }
    }
    return true;
}
var user = { name: "María", age: 30, id: 34 };
var anotherUser = { name: "María", age: 30, id: 34 };
function isDeepEqual(elementA, elementB) {
    if (typeof elementA !== "object" || typeof elementB !== "object" || elementA === null || elementB === null)
        return false;
    return _.isEqual(elementA, elementB);
}
const basicUser = { name: "María", age: 30, address: { city: "Málaga", code: 29620 }, friends: ["Juan"] };
const clonedBasicUser = { name: "María", age: 30, address: { city: "Málaga", code: 29620 }, friends: ["Juan"] };
const unknowUser = { name: "Carlos", age: 30, address: { city: "Málaga", code: 29620 }, friends: ["Pedro"] };
//console.log(isDeepEqual(basicUser, clonedBasicUser));
//console.log(isDeepEqual(basicUser, unknowUser));
//*************************************//
// 113 THIS
//*************************************//
//¿Cual es la salida de los logs en el siguiente código? Intenta razonar, no te limites a ejecutar la solución.
var surname = "Pérez";
var human = {
    name: "Juan",
    surname: "González",
    wife: {
        name: "Ana",
        surname: "Jiménez",
        getSurname: function () {
            return this.surname;
        },
    },
};
//console.log(human.wife.getSurname()); // funcion normal invocada desde el objeto human
//var surnameFunction = human.wife.getSurname; // funcion invocada desde objeto global "var surnameFunction"
//console.log(surnameFunction.call(human)); // valor depende del objeto de invocacion. Llamamos objeto portador
//console.log(surnameFunction.call(human.wife)); //valor depende de objeto de invocacion.lamamos objeto portador
//console.log(surnameFunction());
//surnameFunction invoca desde contexto global, es Undefined porque this.surname no ha sido definida a nivel global.
//*************************************//
// 106 DICES - Closure
//*************************************//
function rollTheDice() {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    function dice2() {
        let dice2 = Math.floor(Math.random() * 6) + 1;
        function diceResult() {
            if (dice1 === 6 && dice2 === 6) {
                console.log(`¡Ganaste 1.000 USD! (Valor dado 1: ${dice1}. Valor dado 2: ${dice2})`);
            }
            else {
                console.log(`¡Intenta nuevamente! (Valor dado 1: ${dice1}. Valor dado 2: ${dice2})`);
            }
        }
        return diceResult;
    }
    return dice2;
}
var letsPlay = rollTheDice();
const highestScore = (value) => {
    const arrangedArray = [...value].sort((a, b) => b - a);
    return Number(arrangedArray[0]);
};
const average = (value) => {
    const sum = value.reduce((acc, score) => acc + score, 0);
    const avg = sum / value.length;
    return avg.toFixed(2);
};
const summarizeClassRoom = (studentsData) => {
    return studentsData.map((student) => ({
        name: student.name,
        highestCalification: highestScore(student.califications),
        averageCalifications: average(student.califications),
    }));
};
const students = [
    { name: "Juan", califications: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34] },
    { name: "Álvaro", califications: [4.49, 1.52, 7.0, 8.3, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01] },
    { name: "María", califications: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.8, 9.3] },
    { name: "Jorge", califications: [4.6, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69] },
    { name: "Mónica", califications: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48] },
];
//console.log(summarizeClassRoom(students));
// [
//   { name: 'Juan', highestCalification: 9.71, averageCalifications: '5.37' },
//   { name: 'Álvaro', highestCalification: 8.3, averageCalifications: '5.58' },
//   { name: 'María', highestCalification: 9.3, averageCalifications: '3.92' },
//   { name: 'Jorge', highestCalification: 9.07, averageCalifications: '5.38' },
//   { name: 'Mónica', highestCalification: 9.72, averageCalifications: '4.42' }
// ]
