$(document).ready(function() {

// Global variables
  // var car = $("#car");
  var score = 0;
  var highScore = 3;
  var visited = 1;

// Get the modal
  var modal = document.getElementById('myModal');
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
      console.log("let's Start Running");
      start();
  }

  function start() {

    var lives = 1;

    var grid = [
      [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
      [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      [32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],
      [48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],
      [64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],
      [80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],
    ];

   // Starting position
    var position = 87;//
    var redcar1position = 80;
    var bluecar1position = 48;
    var racer1position = 47;

    console.log(redcar1position);
    console.log(bluecar1position);
    console.log(racer1position);

    var lane1 = setInterval(function(){car1Lane1()}, 300);
    var lane2 = setInterval(function(){car1Lane2()}, 300);
    var lane3 = setInterval(function(){car1Lane3()}, 200);

    $('#' + position).html('<img id="player" src="player.png" alt="">');

    $('#reset').click(resetBoard)

    //keyboard, arrow keys
    $(document).keydown(function(e) {
      switch(e.which) {

      //move left
      case 37:
        $("#" + position).html("");
        position = position - 1;
        $('#' + position).html('<img id="player" src="player.png" alt="">');
        $('#' + position).addClass(".visited");
        // console.log("left " + position);
        break;

      //move up
      case 38:
        $("#" + position).html("");
        position = position - 16;
        $('#' + position).html('<img id="player" src="player.png" alt="">');
        $('#' + position).addClass(".visited");

        // $("#").html("1");
        // console.log("up " + position);
        break;

      //move right
      case 39:
        $("#" + position).html("");
        position = position + 1;
        $('#' + position).html('<img id="player" src="player.png" alt="">');
        $('#' + position).addClass(".visited");

        // console.log("right " + position);
        break;

      //move down
      case 40:
        $("#" + position).html("");
        position = position +  16;
        $('#' + position).html('<img id="player" src="player.png" alt="">');
        $('#' + position).addClass(".visited");

        // console.log("down " + position);
        break;
      };
      checkForHome();
      collisionDetection();
    });
    //start position, new chickens always start in the same position
    //around grid

    // function car(position) {
    //   position = 79;
    //   // console.log("car is " + position);
    //   $('#' + position).html('<img id="car" src="redcar.png" alt="">');
    //
    //   return position;
    //
    //   setInterval(moveRight, 500);
    //    function moveRight() {
    //      for (var i = 79; i <=64; i--) {
    //        if ($("#" + i).html() == 1) {
    //          console.log("car moving" + position);
    //          collisionDetection();
             // }
           // }
  //     }
  //   }

  // Collision detection, (detection whether player push car or object enters the same block)
    function collisionDetection() {
      // console.log(position);
      if (redcar1position == position) {
        console.log("You've been Hit");
        collision();
      }else if (bluecar1position == position) {
        console.log("You've been Hit");
        collision();
      }else if (racer1position == position) {
        console.log("You've been Hit");
        collision();
      }
    }

    function collision() {
      lives = lives - 1;
      $("#lives").html("LIVES: " + lives);
      console.log("lives left: " + lives);
      resetBoard();
      resetObsticles();
      gameOver();
    }

  // Score
    // as each chicken reaches home, +1 is added to the score
    // other score bonuses can be added later

    function checkForHome() {
      for (var i = 0; i <= 15; i++) {
        if ($("#" + i).hasClass(".visited")) {
          console.log("home");
          gotHome();
        }
      }
    };

    function gotHome() {
      score = score + 1;
      // $(".playerTurn").html("It is " + player + "'s turn'");
      $("#score").html("SCORE: " + score);
      console.log("Chicken's home, " + score);
      resetBoard();
      newHighScore();
    };

    // High Score
    // standard high score set 20 saved
    // if player score is <20 new score appears (after all lives lose check this)
    function newHighScore() {
      if (score > highScore) {
        $("#highscore").html("NEW HIGHSCORE: " + score);
        console.log("New highScore");
      } else {
        $("#highscore").html("HIGHSCORE: " + highScore)
      }
    };

  // Lives
    function lives() {

    }

    //Rest all obsticles on the board
    function resetObsticles() {

    };

    // Reset if a collision is detected -1 live
    function resetBoard() {
        console.log("RESET");
        $(".grid tbody tr td").html("").removeClass("player");
        position = 87;
        console.log(position);
        // console.log("Your Score " + score);
        $('#' + position).html('<img id="player" src="player.png" alt="">')
        $('td').removeClass(".visited");

    };

    function car1Lane1() {
      $('#' + redcar1position).html("");
      if (redcar1position === 64) {
          redcar1position = 79;
      } else {
        redcar1position--;
      }
      $('#' + redcar1position).html('<img id="car" src="redcar.png" alt="">');
      // console.log(redcar1position);
      collisionDetection();
    }

    function car1Lane2() {
      $('#' + bluecar1position).html("");
      if (bluecar1position === 63) {
          bluecar1position = 48;
      } else {
        bluecar1position++;
      }
      $('#' + bluecar1position).html('<img id="car" src="bluecar.png" alt="">');
      // console.log(bluecar1position);
      collisionDetection();
    }

    function car1Lane3() {
      $('#' + racer1position).html("");
      if (racer1position === 32) {
          racer1position = 47;
      } else {
        racer1position--;
      }
      $('#' + racer1position).html('<img id="car" src="racecar1.png" alt="">');
      // console.log(racer1position);
      collisionDetection();
    }


    // Game over if -3 lives game over, score is check if reaches new high,
    function gameOver() {
      if (lives < 0) {
        console.log("Game OVER");
        clearInterval(lane1);
        clearInterval(lane2);
        clearInterval(lane3);
        clearInterval(score);

        lives = 3;
        score = 0;

        // var gameover = document.getElementById('gameover');
        // var span = document.getElementsByClassName("restart")[0];
        // span.onclick = function() {
        //     modal.style.display = "none";
        //     console.log("let's Start Running");
        //     start();
        // }

        // function resetBoard(){}
        // timeRunning = !timeRunning;
      }
    }

  // future game prompts to be added
  }
});
// timeRunning = !timeRunning  pause the game, gameover man
