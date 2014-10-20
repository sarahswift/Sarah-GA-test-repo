function userChoice(userPick){

if (userPick == "rock") {
	$('#userPick').html(userPick);
	}
if (userPick == "paper") {
	$('#userPick').html(userPick);
	}
if (userPick == "scissors") {
	$('#userPick').html(userPick);
	}

    var compChoice = computerChoice();
    var result = compare(userPick, computerChoice); // We're comparing userPick (what the user choose) and compChoice
    // We're getting 'result' back from compare, but we still need to show it on the page somehow
}	

// We don't want to run userChoice() when the document is ready. Rather, we'll just let it run when a button is clicked because we're using the onclick attribute in the html.
/*
$(document).ready(function(){
userChoice();
})
*/

function computerChoice(){
var compChoice = Math.random(); // Be careful when using the same name over again.

if (compChoice<=0.33) { // Leading decimal points are confusing
    compChoice = "rock";
} else if (computerChoice<=0.66) {
    compChoice = "scissors";
} else {
    compChoice = "paper";
}
console.log(compChoice);

$('#computerChoice').html(compChoice);
return compChoice; // we'll need to return a value from this function
}

// We'll run computerChoice() after the user makes a choice. That is, we'll run it at the end of our userChoice() function.
/*
$(document).ready(function(){
computerChoice();
})
*/

function compare(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
    alert ("The result is a tie!");
    }
    
    else if(userChoice === "rock") {
       
        if(computerChoice === "scissors") {
            return "Rock wins!";
        }
        else {
             return "Paper wins!";
        }
    }
    
    else if(userChoice === "paper") {
        
        if(computerChoice === "rock") {
            return "Paper wins!";
        }
        else{
            return "Scissors wins!";
        }
    }
    
    else if(userChoice === "scissors") {
        
        if(computerChoice === "rock") {
            return "Rock wins!";
        }
        else {
            return "Scissors wins!";
        }
    }
    
}

// We'll run this after computerChoice in our userChoice function.
//compare (userChoice, computerChoice);

