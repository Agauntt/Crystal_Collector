//Initial variables
var randomNumber = "";
var wins = 0;
var loses = 0;
var currentScore = 0;


//Create inital random number...Ran during the reRoll function
function randomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

//fuction that will reset the game parameters...Ran if the WinLose fuction is triggered.
function reRoll(){ 
randomNumber = randomInt(19,120);
$("#randomNumberField").text(randomNumber);

//Produce values for the buttons
button1Value = randomInt(1,12);
button2Value = randomInt(1,12);
button3Value = randomInt(1,12);
button4Value = randomInt(1,12);

//logs the crystals values for testing purposes
console.log(button1Value);
console.log(button2Value);
console.log(button3Value);
console.log(button4Value);

//resets the current score
currentScore = 0;
$("#currentScore").text(currentScore);
}

reRoll();

//Win / Lose function determines if the click will result in a win, or a bust, and make the corresponding updates...Runs when the buttons are pressed.
function WinLose(){
    if (currentScore === randomNumber) {  //UPdates the scoreboard and resets the game if a win is detected
        $("#winOrLose").text("You Win!");
        wins++;
        $("#wins").text("Wins: " + wins);
        reRoll();
    } else if (currentScore > randomNumber) { //Updates the scoreboard and resets the game if a lose is dectected
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