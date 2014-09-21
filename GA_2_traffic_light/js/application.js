function buttonClick(lightToBeTurnedOn){

    // You're using classes in your index.html file, but trying to obtain the lights via their idbelow. You can either use getElementsByClassName or use id's in your markup.
    var greenLight = document.getElementById("greenLight"); 
    var yellowLight = document.getElementById("yellowLight");
    var redLight = document.getElementById("redLight");
    

    yellowLight.style.backgroundColor = "black";
    redLight.style.backgroundColor = "black"; 
    greenLight.style.backgroundColor = "black";


    // "buttonClick" is our method, so we shouldn't check if buttonClick("Go") is true or false
    // We do know that the argument lightToBeTurnedOn will be "Go" for the green light, so you were on the right track
    // We need to be careful because you have 'go' as the argument in your index.html file but you were checking for "Go". Remember, Javascript doesn't know they're the same thing
    if (lightToBeTurnedOn === "go") {
        greenLight.style.backgroundColor = "green";
    } else {
        greenLight.style.backgroundColor = "black";
    }

    if (lightToBeTurnedOn == "caution") {
        yellowLight.style.backgroundColor = "yellow";
    } else {
        yellowLight.style.backgroundColor = "black";
    }

    if (lightToBeTurnedOn == "stop") {
        redLight.style.backgroundColor = "red";
    } else {
        redLight.style.backgroundColor = "black";
    }

}
