import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let getal = parseFloat(await userInput.question('Geef een getal in: '));
console.log('De rij van fibonacci tot het gegeven getal: ');
let cijfer1 = 0;
let cijfer2 = 1;
let rij;
for(let i=0; i<getal; i++){
    console.log(cijfer1);
    /*rij= cijfer1+cijfer2;
    cijfer1 = cijfer2;
    cijfer2= rij;*/ //ik snap het ni :/
}
process.exit();
