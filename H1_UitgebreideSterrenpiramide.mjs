import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte= await userInput.question('Geef een getal in: ');
let lijn = '';
for(let i = 0; i < hoogte; i++){ 
    lijn += '*';
    console.log(lijn)
}
let k= 0
for(let j= hoogte; j>(hoogte-k); j--){
    lijn +='*';
    console.log(lijn)
}

process.exit();