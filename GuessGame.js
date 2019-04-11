var secretNumber=7;

var guess=prompt("Guess a number");




if(Number(guess)===secretNumber){


alert("You got it right");
}

else if(Number(guess) < secretNumber){
    alert("Too low, Try AGAIN" );
    
}

else{

    alert("Too High, Try AGAIN");
}