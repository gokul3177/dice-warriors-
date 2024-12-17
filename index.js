var randomNumber1 = Math.round(Math.random()*5);
var randomNumber2 = Math.round(Math.random() * 5);
var randomImages = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
]; 

document.querySelector(".img1").src = randomImages[randomNumber1];
document.querySelector(".img2").src = randomImages[randomNumber2];
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " ✌️ Player 1 Wins ";
}
else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = " Draw ";
}
else{
    document.querySelector("h1").innerHTML = " Player 2 Wins ✌️ ";
}