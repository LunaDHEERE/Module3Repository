import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let getal = parseFloat(await userInput.question('Geef een getal in: '));

let priemgetal ='Dit is een priemgetal';
if(getal <= 1){
    console.log('Dit is geen priemgetal');
}else{
    for(let getal2 = 2; getal2<getal; getal2++){
        if(getal%getal2 == 0){
            priemgetal = 'Dit is geen priemgetal'
            getal2 = getal;
    }    
}console.log(priemgetal)}
process.exit();
