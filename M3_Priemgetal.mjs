import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let getal = parseFloat(await userInput.question('Geef een getal in: '));
let priemgetal ='';
/*for(let getal2 = 0; getal2<getal; getal2++){
    if(getal%getal2 !== 0){
        priemgetal = 'Dit is geen priemgetal'
    }else if(getal2 == 1){
        priemgetal = 'Dit is geen priemgetal'
    }else if(getal%getal2 == 0){
        priemgetal = 'Dit is een priemgetal'
        break;
    }    

}console.log(priemgetal)
process.exit();*/
if(getal <= 1){
    console.log('Dit is geen priemgetal.');
}else{
    for(let getal2 = 0; getal2<getal; getal2++){
        if(getal%getal2 !== 0){
            console.log('Dit is geen priemgetal.');
        }else{
            console.log('Dit is een priemgetal.');
        }
}
}
process.exit();