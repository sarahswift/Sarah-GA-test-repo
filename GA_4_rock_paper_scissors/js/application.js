var userChoice;
var computerChoice;
var winner;

var choices = ["rock", "paper", "scissors"]

//document.getElementById("rockButton").onclick = function() {userChoice()};
function userChoice(whichButton){
	if (whichButton === "rockButton"){
	document.getElementById("rockButton").innerHTML = "YOU CHOSE ROCK!"
}
//	or
//	document.getElementById("paperButton").innerHTML = "YOU CHOSE PAPER!"
//} 

//document.getElementById("paperButton").onclick = function() {userChoice()};
//function userChoice(){
	//document.getElementById("paperButton").innerHTML = "YOU CHOSE PAPER!"
//} 

//document.getElementById("scissorsButton").onclick = function() {userChoice()};
//function userChoice(){
	//document.getElementById("scissorsButton").innerHTML = "YOU CHOSE SCISSORS!"
//} 

//computerChoice = choices[Math.random()*choices.length];

//var userWins = ["rockscissors", "paperrock", "scissorspaper"]

//function evaluate(){
//	var msg = "Computer Wins!"

//if(userChoice==computerChoice){
//	msg = "Tie!";
//} else { 
//	var outCome = userChoice + computerChoice;
//	$.each(userWins, function (index, value){
//		if(outCome==value){
//			msg = "You Win!";
//		} 
//	});
//}
//		return msg;
	
//}
//var outcomeMsg = evaluate();
//alert(outcomeMsg);

