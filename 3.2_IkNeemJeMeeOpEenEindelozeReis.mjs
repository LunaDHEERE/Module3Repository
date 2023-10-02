/*let getal = 0;
while(getal != 11){
    console.log(getal);
    getal +=3;
}*/
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let password;
password = await userInput.question('Geef het wachtwoord in: ');
while(password != 'pe1iscool'){
    console.log('Foute antwoord.');
    password = await userInput.question('Geef het wachtwoord in: ');
}
console.log('Welkom gebruiker!');

process.exit();