
$(document).ready(function() {
    //Runs on page load
    /*window.onload = function() {
        $('#crystal-one').on('click', crystal_one);
        $('#crystal-two').on('click', crystal_two);
        $('#crystal-three').on('click', crystal_three);
        $('#crystal-four').on('click', crystal_four);
    }*/


    //Defining global varibles
    var wins = 0;
    var loses = 0;
    var randomNumber;
    var total;
    var crystal_one;
    var crystal_two;
    var crystal_three;
    var cryastal_four;

    //Starting game function
    function initializeGame() {
        wins = "";
        loses = "";
        total = 0;
        randomNumber = Math.floor(Math.random() * 120) + 19;
        crystal_one = Math.floor(Math.random() * 12) + 1;
        crystal_two = Math.floor(Math.random() * 12) + 1;
        crystal_three = Math.floor(Math.random() * 12) + 1;
        crystal_four = Math.floor(Math.random() * 12 + 1);
        $('#random-number').html(randomNumber);
        $('#total').html(total);
    }

    initializeGame();

    //Reset Game function
    function resetGame() {
        total = 0;
        randomNumber = Math.floor(Math.random() * 101) + 19;
        crystal_one = Math.floor(Math.random() * 12) + 1;
        crystal_two = Math.floor(Math.random() * 12) + 1;
        crystal_three = Math.floor(Math.random() * 12) + 1;
        crystal_four = Math.floor(Math.random() * 12 + 1);
        $('#random-number').html(randomNumber);
        $('#total').html(total);
    };

    //Win and Loss conditions
    function winner() {
        wins++;
        $('wins').html('Wins: '+ wins);
    };

    function loser() {
        loses++
        $('losses').html('Loses: '+ loses);
        resetGame();
    };

    //Stuff is happening here
    $('#crystal-one, #crystal-two, #crystal-three, #crystal-four').click(function() {
        $('')
        if ( total === randomNumber) {
            winner();
        }
        if ( total > randomNumber) {
            loser();
        }
    });

   
});
