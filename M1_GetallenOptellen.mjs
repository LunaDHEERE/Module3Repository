import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let getal1 = parseFloat(await userInput.question('Geef een getal in: '));
let getal2 = parseFloat(await userInput.question('Geef een tweede getal in: '));
while(getal1 > 0 && getal2 > 0){
    console.log(getal1*getal2);
    getal1 = parseFloat(await userInput.question('Geef opnieuw een getal in: '));
    getal2 = parseFloat(await userInput.question('Geef opnieuw een tweede getal in: '));
    while(getal1<=0 || getal2<= 0){
        console.log(getal1+=getal2);
        getal1 = parseFloat(await userInput.question('Geef opnieuw een eerste getal in: '));
        getal2 = parseFloat(await userInput.question('Geef opnieuw een tweede getal in:'));
    }
}
process.exit();
