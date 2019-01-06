//Runs on page load
window.onload = function() {
    $('#crystal-one').on('click', crystal_one);
    $('#crystal-two').on('click', crystal_two);
    $('#crystal-three').on('click', crystal_three);
    $('#crystal-four').on('click', crystal_four);
}


//Defining global varibles
var wins = 0;
var loses = 0;
var randomNumber;
var total;
var crystal_one;
var crystal_two;
var crystal_three;
var cryastal_four;

function initializeGame() {
    wins = "";
    loses = "";
    total = "";
    randomNumber = Math.floor(Math.random() * 120) + 19;
    crystal_one = Math.floor(Math.random() * 12) + 1;
    crystal_two = Math.floor(Math.random() * 12) + 1;
    crystal_three = Math.floor(Math.random() * 12) + 1;
    crystal_four = Math.floor(Math.random() * 12 + 1);
}

