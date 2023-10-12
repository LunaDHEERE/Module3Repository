import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/*let getal1 = parseFloat(await userInput.question('Geef een getal in: '));
let getal2 = parseFloat(await userInput.question('Geef opnieuw een getal in: '));
let gemiddelde = (getal1 + getal2)/2*/
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
while(gemiddelde <=25){ //for loop gebruiken wnt mijn gemiddelde klopt niet
    let getal1 = gemiddelde; //dus gewoon for loop en dan in plaats van te delen door 2 moet ik telkens door i delen en i verhogen met 1
    let getal3 = parseFloat(await userInput.question('Geef opnieuw een getal in: '));
    gemiddelde = (getal1 + getal3)/2;
    if(gemiddelde <= 25){
        console.log('Het gemiddelde van de getallen is '+ gemiddelde);
    }else{
        console.log('Het gemiddelde van de getallen is groter dan 25');
    }
}
process.exit();
/*let gemiddelde = 0;
while(gemiddelde<=25){
    let getal1 = parseFloat(await userInput.question('Geef een getal in: '));
    let getal2 = parseFloat(await userInput.question('Geef opnieuw een getal in: '));
    gemiddelde = (getal1+getal2)/2
        if(gemiddelde >= 25){
            console.log('Het gemiddelde van de getallen is groter dan 25');
        }else{
            console.log('Het gemiddelde van de twee getallen is ' + gemiddelde);
            getal1 = gemiddelde;
    }
}
process.exit();


/*let getal1 = parseFloat(await userInput.question('Geef een getal in: '));
console.log(getal1);
let getal2 = parseFloat(await userInput.question('Geef een nieuw getal in: '));
let gemiddelde;
for(let i = 0; i!= 1; i++){
    gemiddelde = (getal1 + getal2)/2;
    console.log(gemiddelde);
}
if(gemiddelde< 25){
let nieuwGemiddelde;
while(nieuwGemiddelde<=25){
    let nieuwgetal = parseFloat(await userInput.question('Geef een getal in: '));
    nieuwGemiddelde = (gemiddelde + nieuwgetal)/2;
    console.log(nieuwGemiddelde);
}
}
process.exit();*/