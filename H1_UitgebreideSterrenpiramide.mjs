import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let getalUser= await userInput.question('Geef een getal in: ');
for(let rows = 0; rows<=getalUser; rows++){
    let sterretjes = '';
    for(let columns = 0; columns<rows; columns++){
        sterretjes += '*';
    }
    console.log(sterretjes);
}
for(let rows = 1; rows<=getalUser; row++){
    let sterretjes = '*' *getalUser
}
process.exit();