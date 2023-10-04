import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let getal = parseFloat(await userInput.question('Geef een getal in: '));

for(let i = 0; i<= 100; i++){
    if(getal%i ==0){
        console.log
    }
}

if((getal%1 == 0)&&(getal%getal == 0)){
    
    while(rest = 0){

    }
}


/*while((getal%1 == 0)&&(getal%getal == 0))
if((getal%1 == 0)&&(getal%getal == 0)){
    console.log('Dit is een priemgetal!');
}else{
    console.log('Dit is geen priemgetal.');
}
process.exit();