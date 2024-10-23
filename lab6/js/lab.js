/* 
 * Author: Bella Duarte
 * Created: 22 October, 2024
 * License: Public Domain
*/ 


myTransport = ["Toyota Camry", " Bike", " Uber", " Rides From Friends"];

myMainRide = {
  make: "Toyota",
  model: "Camry",
  color: "Light Blue",
  year: 2022, 

  age: function(){
    return 2024 - this.year;
  }
}

document.writeln("Ways of Getting Around: " + myTransport + "</br>");

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

