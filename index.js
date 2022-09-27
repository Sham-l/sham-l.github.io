guessNumber=prompt("guess a number between 5");
randomNumber=math.floor(math.random() * 5) + 1;

if(randomNumber==guessNumber){
    document.getElementById("text").innerHTML="true";
}
else{
    document.getElementById("text").innerHTML="oops wrong";
}