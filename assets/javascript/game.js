//Initial variables
var randomNumber = "";
var wins = 0;
var loses = 0;
var currentScore = 0;


//Create inital random number
function randomInt(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function reRoll(){
randomNumber = randomInt(19,120);
$("#randomNumberField").text(randomNumber);

//Produce values for the buttons
button1Value = randomInt(1,12);
button2Value = randomInt(1,12);
button3Value = randomInt(1,12);
button4Value = randomInt(1,12);

console.log(button1Value);
console.log(button2Value);
console.log(button3Value);
console.log(button4Value);
currentScore = 0;
$("#currentScore").text(currentScore);
}
reRoll();

//Win / Lose function determines in the click will result in a win, or a bust, and make the corresponding updates
function WinLose(){
    if (currentScore === randomNumber) {
        $("#winOrLose").text("You Win!");
        wins++;
        $("#wins").text("Wins: " + wins);
        reRoll();
    } else if (currentScore > randomNumber) {
        $("#winOrLose").text("You Lose!");
        loses++;
        $("#loses").text("Loses: " + loses);
        reRoll();
    }

}

//Button Controls
$("#button1").click(function(){
    currentScore = currentScore + button1Value;
    $("#currentScore").text(currentScore);
    WinLose();
});

$("#button2").click(function(){
    currentScore = currentScore + button2Value;
    $("#currentScore").text(currentScore);
    WinLose();
});

$("#button3").click(function(){
    currentScore = currentScore + button3Value;
    $("#currentScore").text(currentScore);
    WinLose();
});

$("#button4").click(function(){
    currentScore = currentScore + button4Value;
    $("#currentScore").text(currentScore);
    WinLose();
});