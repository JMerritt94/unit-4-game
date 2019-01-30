// first i need to define some variables, I will need one called targetNumber, an arrayfor crystalValues, one for currentScore, and one for wins and losses,

var currentScore;
var totalWins = 0;
var totalLosses = 0;
var crystalValues;


var targetNumber = Math.floor(Math.random() * 120 + 18)
console.log(targetNumber);
$("#targetNumber").text("Target Number = " + targetNumber);

var crystalValues = [];
for (var i = 0; i < 4; i++) {
    crystalValues.push(Math.round(Math.random() * 11 + 1));

}
function startGame() {
    currentScore = 0;

    crystalValues = [];

    for (var i = 0; i < 4; i++) {
        crystalValues.push(Math.round(Math.random() * 11 + 1));
    }
    console.log(crystalValues);
    $("#wins").text("wins: " + totalWins);
    $("#losses").text("losses: " + totalLosses)

    targetNumber = Math.floor(Math.random() * 120 + 18)
    console.log(targetNumber);
    $("#targetNumber").text("Target Number = " + targetNumber)
}





var imgArray = [
    'assets/images/diamond-clipart-vector.png',
    'assets/images/emerald.jpg',
    'assets/images/ruby-clipart-8.png',
    'assets/images/sapphire.jpg'
];

for (var i = 0; i < imgArray.length; i++) {
    var crystalButton = $("<button>");
    crystalButton.addClass("button crystal");
    crystalButton.attr("data-number", i);

    // add image inside button
    crystalButton.append("<img src='" + imgArray[i] + "' alt='Crystal " + (i + 1) + "'>");

    $("#crystal").append(crystalButton)
}



$(".crystal").on("click", function () {
    var crystalIndex = $(this).attr("data-number");
    console.log(crystalIndex);
    currentScore = currentScore + crystalValues[crystalIndex]
    console.log(currentScore)
    $("#currentScore").text("Current Score=" + currentScore)

    if (currentScore > targetNumber) {
        totalLosses++;
        $("#losses").text("losses: " + totalLosses)
        startGame();

    }
    else if (currentScore === targetNumber) {
        totalWins++;
        $("#wins").text("wins: " + totalWins)
        startGame();
    }

})
startGame();
