import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let maximum = 100;
for(let minimum = 1; minimum<=maximum; minimum++){
    if(minimum%3 ==0 && minimum%5 == 0){
        console.log('FizzBuzz');
    }else if(minimum%5 ==0){
        console.log('Buzz');
    }else if(minimum%3 ==0){
        console.log('Fizz');
    }
    console.log(minimum);
}
process.exit();
