var Randomnumber1= Math.floor(Math.random()*6)+1;  //1-6

var Randomdiceimg= "dice"+ Randomnumber1+ ".png";  //dice1.png- dice 6.png

var RandomImagesource="images/"+Randomdiceimg;  //

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",RandomImagesource);



var Randomnumber2= Math.floor(Math.random()*6)+1;

var RandomImagesource2="images/dice"+Randomnumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", RandomImagesource2);

if(Randomnumber1>Randomnumber2){
    document.querySelector("h1").innerHTML ="Player 1 Wins!"
}
else if(Randomnumber2>Randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="DRAW!";
}