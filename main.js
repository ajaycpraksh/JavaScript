
let x =5;
let y=5;
let z=x+y;
console.log( +z);
document.getElementById("hello").innerHTML=z;

//variable
var Flowers = "Rose"
document.getElementById("var").innerHTML=Flowers
//let
let Fruits ="mango"
document.getElementById("let").innerHTML=Fruits
//const
const cars ="BMW"
document.getElementById("const").innerHTML=cars
//datatypes
let length =16;
document.getElementById("numbers").innerHTML=length
//string
let color ="yellow"
document.getElementById("strings").innerHTML=color
//Function
function myFunction(p1,p2,p4){
    return p1*p2*p4;
}
let result = myFunction(6, 5,10);
document.getElementById("function").innerHTML = result;
//Flow controls 
const hour = new Date().getHours();
let greeting;
if (hour < 18) {
  greeting = "Have a Nice Day";
} else {
  greeting = "Good evening";
}
document.getElementById("flow").innerHTML = greeting;

// for loop
let text = "";

for (let i = 10; i < 21; i++) {
  text += "Number-" + i + "<br>";
}
document.getElementById("for").innerHTML = text;
//while loop
let counter=1;
while(counter<=5){
    counter++;
    console.log(counter);
}
document.getElementById("while").innerHTML = counter;
//Array
const colour = new Array("red" , "blue" , "green")
document.getElementById("ary").innerHTML =colour

const bikes = new Array("yamaha" , "suzuki" , "ktm")
let postion = bikes.indexOf("suzuki")+1;
document.getElementById("array").innerHTML = "suzuki is found in postion"+postion;

//events
function displayDate() {
    document.getElementById("event").innerHTML = Date(12/3/2024);

  }

  //form object
  document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    alert("Submitted!\nName: " + name + "\nEmail: " + email);

  });
//loaction object
function goToWebsite(){
    window.location.href="https://www.ucartz.com/";
}