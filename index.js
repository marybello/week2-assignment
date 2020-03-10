var myNumber = 10;

var maxTrials= 5;

const randomNumber = Math.floor(Math.random() * myNumber + 1) ;
let counter = 1;


 
document.getElementById("submitguess").onclick = function (){
    var userGuess = document.getElementById("guessField").value;
   
   
    
    if (randomNumber == userGuess) {
        alert("congratulations! you have guessed correctly in " + counter + " times");
    }
    else if (userGuess > randomNumber) {
        counter++;
        alert("oops sorry! try a smaller number");
        
    }
    else {  counter++;
        alert ("oops sorry! try a greater number");
    
    }

    if(counter > maxTrials) {
        alert("you have exceeded the maximum number of trials, please press f5 to try again");
        
       }
    
}