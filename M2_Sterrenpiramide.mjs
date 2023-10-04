import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let hoogte = parseFloat(await userInput.question('Geef een getal in: '));
for(let i = 0; i < hoogte; i++){

    let lijn = '';

    for(let j = 0; j<=i ;j++){
        lijn += '*';
    }

    console.log(lijn);

}process.exit();