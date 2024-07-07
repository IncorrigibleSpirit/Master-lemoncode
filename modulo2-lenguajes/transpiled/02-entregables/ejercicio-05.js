"use strict";
const title6 = "ENTREGABLES-SLOTH MACHINE";
console.log(`%c ${title6}`, "font-weight: bold;");
class slothMachine {
    constructor() {
        this.counter = 0;
    }
    play() {
        this.counter += 1;
        const roulette1 = Math.random() < 0.5;
        const roulette2 = Math.random() < 0.5;
        const roulette3 = Math.random() < 0.5;
        console.log(`valor roulette #1: ${roulette1}`);
        console.log(`valor roulette #2: ${roulette2}`);
        console.log(`valor roulette #3: ${roulette3}`);
        if (roulette1 && roulette2 && roulette3) {
            console.log(`Ganaste ${this.counter} monedas`);
            this.counter = 0;
        }
        else {
            console.log("Perdiste");
        }
        //console.log(this.counter);
    }
}
const machine1 = new slothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
console.log(`------------------------`);
