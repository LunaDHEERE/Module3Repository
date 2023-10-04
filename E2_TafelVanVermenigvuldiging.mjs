import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let getal = parseFloat(await userInput.question('De tafel van '));
let i = 1;
while(i <=10){
    let uitkomst = getal * i;
    console.log(getal + ' X ' + i + ' = ' + uitkomst);
    i++;
}