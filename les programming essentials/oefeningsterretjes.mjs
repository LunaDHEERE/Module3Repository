import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let hoogte = parseFloat(await userInput.question('Geef de hoogte in: '));
let breedte = parseFloat(await userInput.question('Geef de breedte in: '));
let uitvoer = '';



for(let i = 0; i<hoogte; i++){
    uitvoer = '';
    for(let j = 0; j<breedte; j++){
        if(i%2==0){ //als de rij even is dan zal hier onder worden uitgevoerd
            uitvoer += '*';
            }
        else{ // anders wordt dit uitgevoerd:
            uitvoer += '0';
        }
    }
    console.log(uitvoer);
}
process.exit();