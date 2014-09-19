function buttonClick(lightToBeTurnedOn){

 var yellowLight = document.getElementById("yellowLight");
 var redLight = document.getElementById("redLight");
 var greenLight = document.getElementById("greenLight"); 
  
 yellowLight.style.backgroundColor = "black";
 redLight.style.backgroundColor = "black"; 
 greenLight.style.backgroundColor = "black";

 if buttonClick("Go") {
 	 greenLight.style.backgroundColor = "green";
 }

 else{
 	greenLight.style.backgroundColor = "black";
 }


 if buttonClick("Caution") {
 	 yellowLight.style.backgroundColor = "yellow";
 }

 else{
 	yellowLight.style.backgroundColor = "black";
 }


 if buttonClick("Stop") {
 	 redLight.style.backgroundColor = "red";
 }

 else{
 	redLight.style.backgroundColor = "black";
 }

}