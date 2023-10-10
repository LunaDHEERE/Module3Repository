import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let hoogte = parseFloat(await userInput.question('Geef een getal in: '));
let lijn = '';
for(let i = 0; i < hoogte; i++){
    
 
        lijn += '*';
    
    console.log(lijn);

}process.exit();