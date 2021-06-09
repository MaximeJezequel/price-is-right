const playerName = prompt("What's your name ?");
const random = Math.floor(Math.random()*100) + 1;
let token = false;

   while(token == false) {
        let luckyNumber = parseInt(prompt("Guess the lucky number between 1 and 100"));

        if(luckyNumber > random){
            console.log("It's less");
        }
        else if(luckyNumber < random){
            console.log("It's more");
        }
        else {
            console.log(`${playerName} wins`);
            token = true;
        }
        
    }





