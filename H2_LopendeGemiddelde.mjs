import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let gemiddelde;
for(let i = 0; i<1; i++){
    let getal1 = parseFloat(await userInput.question('Geef een getal in: '));
    let getal2 = parseFloat(await userInput.question('Geef opnieuw een getal in: '));
    gemiddelde = (getal1 + getal2)/2
    if(gemiddelde <= 25){
        console.log('Het gemiddelde van de getallen is '+ gemiddelde)
    }else{
        console.log('Het gemiddelde van de getallen is groter dan 25')
    }
}
for(let i = 3; gemiddelde<=25; i++){
    let getal1 = gemiddelde;
    let getal3 = parseFloat(await userInput.question('Geef opnieuw een getal in: '));
    gemiddelde = (getal1 + getal3)/i;
    if(gemiddelde<= 25){
        console.log('Het gemiddelde van de getallen is '+ gemiddelde);
    }else{
        console.log('Het gemiddelde van de getallen is hoger dan 25 ');
    }
}
process.exit();