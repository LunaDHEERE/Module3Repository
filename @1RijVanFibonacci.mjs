import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let cijfer = parseFloat(await userInput.question('Geef een getal in: '));
console.log('De rij van fibonacci tot het gegeven getal: ');
/*let cijfer2 = 1;
let rij;
console.log('0');
console.log('1');
for(let i=0; i<getal; i++){
    let som = getal + i;
    console.log(som);
    let UitgeprintGetal =  som + i;
    console.log(UitgeprintGetal);}
process.exit();*/

let getal1 = 1;
let getal2 = 0;
let VolgendeCijfer;
for(let i = 0; i<=)
