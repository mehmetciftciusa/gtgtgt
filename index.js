

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", "images/dice6.png");

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src","images/dice6.png");

var player1 = prompt("Enter player1 neme:");
var player2 = prompt("Enter player2 neme:");

document.getElementById("p1").innerHTML = player1;
document.getElementById("p2").innerHTML = player2;


document.getElementById("refresh").addEventListener("click", function(){
  if(player1=="Matt"){
    var randomNumber1=Math.floor((Math.random()*3))+4; //3-6
    var randomDiceImage1="images/dice"+randomNumber1+".png";//dice3.png-dice6.png
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomDiceImage1);
  }
  else{
    var randomNumber1=Math.floor((Math.random()*6))+1; //1-6
    var randomDiceImage1="images/dice"+randomNumber1+".png";//dice1.png-dice6.png
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomDiceImage1);
  }

  var randomNumber2=Math.floor((Math.random()*6))+1; //1-6
  var randomDiceImage2="images/dice"+randomNumber2+".png";//dice1.png-dice6.png
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomDiceImage2);
});
