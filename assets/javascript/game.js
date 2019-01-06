
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
    var totalValue;
    var crystal_one;
    var crystal_two;
    var crystal_three;
    var crystal_four;

    //Starting game function
    function initializeGame() {
        wins = "";
        loses = "";
        totalValue = 0;
        randomNumber = Math.floor(Math.random() * 120) + 19;
        crystal_one = Math.floor(Math.random() * 12) + 1;
        crystal_two = Math.floor(Math.random() * 12) + 1;
        crystal_three = Math.floor(Math.random() * 12) + 1;
        crystal_four = Math.floor(Math.random() * 12 + 1);
        $('#random-number').html(randomNumber);
        $('#total').html(totalValue);
    }

    initializeGame();

    //Reset Game function
    function resetGame() {
        totalValue = 0;
        randomNumber = Math.floor(Math.random() * 101) + 19;
        crystal_one = Math.floor(Math.random() * 12) + 1;
        crystal_two = Math.floor(Math.random() * 12) + 1;
        crystal_three = Math.floor(Math.random() * 12) + 1;
        crystal_four = Math.floor(Math.random() * 12 + 1);
        $('#random-number').html(randomNumber);
        $('#total').html(totalValue);
    };

    //Win and Loss conditions
    function winner() {
        wins++;
        $('#wins').html('Wins: ' + wins);
        resetGame();
    };

    function loser() {
        loses++
        $('#loses').text('Loses: ' + loses);
        resetGame();
    };

    //Stuff is happening here
    $('#crystal-one').on('click', function() {
        totalValue += crystal_one;
        $('#total').html(totalValue);
        if ( totalValue === randomNumber) {
            winner();
        }
        if ( totalValue > randomNumber) {
            loser();
        }
    });
    $('#crystal-two').on('click', function() {
        totalValue += crystal_two;
        $('#total').html(totalValue);
        if ( totalValue === randomNumber) {
            winner();
        }
        if ( totalValue > randomNumber) {
            loser();
        }
    });
    $('#crystal-three').on('click', function() {
        totalValue += crystal_three;
        $('#total').html(totalValue);
        if ( totalValue === randomNumber) {
            winner();
        }
        if ( totalValue > randomNumber) {
            loser();
        }
    });
    $('#crystal-four').on('click', function() {
        totalValue += crystal_four;
        $('#total').html(totalValue);
        if ( totalValue === randomNumber) {
            winner();
        }
        if ( totalValue > randomNumber) {
            loser();
        }
    });


