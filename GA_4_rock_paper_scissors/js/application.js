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
}	

$(document).ready(function(){
userChoice();
})

function computerChoice(){
var computerChoice = Math.random();

if (computerChoice<=.33) {
    computerChoice = "rock";
} else if (computerChoice<=.66) {
    computerChoice = "scissors";
} else {
    computerChoice = "paper";
}
console.log(computerChoice);

$('#computerChoice').html(computerChoice);

}

$(document).ready(function(){
computerChoice();
})

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
            return "Scissors wins!"
        }
    }
    
    else if(userChoice === "scissors") {
        
        if(computerChoice === "rock") {
            return "Rock wins!";
        }
        else {
            return "Scissors wins!"
        }
    }
    
}

compare (userChoice, computerChoice);

