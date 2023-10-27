import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/*let hoogte= await userInput.question('Geef een getal in: ');
let lijn = '';
for(let i = 0; i < hoogte; i++){ 
    lijn += '*';
    console.log(lijn)
}
let sterren = '';
for(let j= 1; j<hoogte; j+=0){
    hoogte --;
    for(let a =0; a<=hoogte; a++){
        sterren +='*'
    }
    console.log(sterren);
}*/
let hoogte = parseFloat(await userInput.question("Kies de hoogte van de piramide? "))
let amount_whitespace = 0

for (let i = 1; i <= hoogte; i += 2){
    amount_whitespace = (hoogte - i)/2
    console.log(" ".repeat(amount_whitespace) + "*".repeat(i))
}
for (let i = (hoogte -2); i >= 0; i -=2){
    amount_whitespace = (hoogte - i)/2
    console.log(" ".repeat(amount_whitespace) + "*".repeat(i))
}
process.exit()