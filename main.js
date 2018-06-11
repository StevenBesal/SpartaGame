$(document).ready(function() {

// Global variables
  var score = 0;
  var visited = 1;
  var highScore = "";
  var aud = document.getElementById("backgroundmusic");
  aud.volume = 0.5; // default 1 means 100%

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

    var lives = 3;
    var grid = [
      [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
      [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      [32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],
      [48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],
      [64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],
      [80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],
      [96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111],
    ];
    document.getElementById('backgroundmusic').play();

    // Starting position for player and cars
    var position = 103;//
    var redcar1position = 95;
    var redcar2position = 92;
    var bluecar1position = 64;
    var bluecar2position = 69;
    var redwhiteracer1position = 63;
    var redwhiteracer2position = 55;
    var racer2position = 32;
    var van1position = 16;
    var van2position = 18;
    var van3position = 20;

    //intervals for the moving cars using timed speeds
    var lane1 = setInterval(function(){car1Lane1()}, 300);
    var lane1car2 = setInterval(function(){car2Lane1()}, 300);
    var lane2 = setInterval(function(){car1Lane2()}, 300);
    var lane2car2 = setInterval(function(){car2Lane2()}, 300);
    var lane3 = setInterval(function(){car1Lane3()}, 200);
    var lane3car2 = setInterval(function(){car2Lane3()}, 200);
    var lane4 = setInterval(function(){car1Lane4()}, 60);
    var lane5 = setInterval(function(){car1Lane5()}, 500);
    var lane5van2 = setInterval(function(){car2Lane5()}, 500);
    var lane5van3 = setInterval(function(){car3Lane5()}, 500);

    $('#' + position).html('<img id="player" src="Images/player.png" alt="">');

    $('#reset').click(restart)
    $('#pause').click(pause)

    $(document).keydown(function(e) {
      switch(e.which) {
        //keyboard, arrow keys, movment for player

      //move left
      case 37:
        $("#" + position).html("");
        position = position - 1;
        $('#' + position).html('<img id="player" src="Images/player.png" alt="">');
        $('#' + position).addClass(".visited");
        // console.log("left " + position);
        break;

      //move up
      case 38:
        $("#" + position).html("");
        position = position - 16;
        $('#' + position).html('<img id="player" src="Images/player.png" alt="">');
        $('#' + position).addClass(".visited");

        // $("#").html("1");
        // console.log("up " + position);
        break;

      //move right
      case 39:
        $("#" + position).html("");
        position = position + 1;
        $('#' + position).html('<img id="player" src="Images/player.png" alt="">');
        $('#' + position).addClass(".visited");

        // console.log("right " + position);
        break;

      //move down
      case 40:
        $("#" + position).html("");
        position = position +  16;
        $('#' + position).html('<img id="player" src="Images/player.png" alt="">');
        $('#' + position).addClass(".visited");

        // console.log("down " + position);
        break;
      };
      checkForHome();
      collisionDetection();
    });

    function collisionDetection() {
      // Collision detection, (detection whether player push car or object enters the same cell)
      // console.log(position);
      if (redcar1position == position) {
        console.log("You've been Hit");
        collision();
      }else if (redcar2position == position) {
        console.log("You've been Hit");
        collision();
      }else if (bluecar1position == position) {
        console.log("You've been Hit");
        collision();
      }else if (bluecar2position == position) {
        console.log("You've been Hit");
        collision();
      }else if (redwhiteracer1position == position) {
        console.log("You've been Hit");
        collision();
      }else if (redwhiteracer2position == position) {
        console.log("You've been Hit");
        collision();
      }else if (racer2position == position) {
        console.log("You've been Hit");
        collision();
      }else if (van1position == position) {
        console.log("You've been Hit");
        collision();
      }else if (van2position == position) {
        console.log("You've been Hit");
        collision();
      }else if (van3position == position) {
        console.log("You've been Hit");
        collision();
      }
    }

    function collision() {
      // as a collision is detection this function removes a life and produces a sound as well as activating other functions for reseting the player and checking if all lives are lost
      lives = lives - 1;
      $("#lives").html("LIVES: " + lives);
      console.log("lives left: " + lives);
      document.getElementById('chickhit').play();
      resetBoard();
      gameOver();
    }

    function checkForHome() {
      //checking if the player reaches the home zone
      for (var i = 0; i <= 15; i++) {
        if ($("#" + i).hasClass(".visited")) {
          console.log("home");
          gotHome();
        }
      }
    };

    function gotHome() {
      // Score
      // as each chicken reaches home, +1 is added to the score
      // other score bonuses can be added later
      score = score + 1;
      // $(".playerTurn").html("It is " + player + "'s turn'");
      $("#score").html("SCORE: " + score);
      console.log("Chicken's home, " + score);
      document.getElementById('chicksaved').play();
      resetBoard();
      newHighScore();
    };

    function newHighScore() {
      // High Score
      // standard high score set 20 saved
      // if player score is <20 new score appears (after all lives lose check this)
      if (score > highScore) {
        highscore = score;
        $("#highscore").html("NEW HIGHSCORE: " + highscore);
        console.log("New highScore");
      } else {
        $("#highscore").html("HIGHSCORE: " + highScore)
      }
    };

    function resetBoard() {
      //resets the player position to start upon death
        console.log("RESET");
        $(".grid tbody tr td").html("").removeClass("player");
        position = 103;
        console.log(position);
        // console.log("Your Score " + score);
        $('#' + position).html('<img id="player" src="Images/player.png" alt="">')
        $('td').removeClass(".visited");
    };

    function restart() {
      // Reset if a collision is detected -1 live
      console.log("Restart");
      $("#score").html("SCORE: " + 0);
      score = 0;
      $("#lives").html("LIVES: " + 3);
      lives = lives + 4;
      console.log(lives);
      resetBoard();
    }

    function car1Lane1() {
      $('#' + redcar1position).html("");
      if (redcar1position === 80) {
          redcar1position = 95;
      } else {
        redcar1position--;
      }
      $('#' + redcar1position).html('<img id="car" src="Images/redcar.png" alt="">');
      // console.log(redcar1position);
      collisionDetection();
    }

    function car2Lane1() {
      $('#' + redcar2position).html("");
      if (redcar2position === 80) {
          redcar2position = 95;
      } else {
        redcar2position--;
      }
      $('#' + redcar2position).html('<img id="car" src="Images/redcar.png" alt="">');
      // console.log(redcar2position);
      collisionDetection();
    }

    function car1Lane2() {
      $('#' + bluecar1position).html("");
      if (bluecar1position === 79) {
          bluecar1position = 64;
      } else {
        bluecar1position++;
      }
      $('#' + bluecar1position).html('<img id="car" src="Images/bluecar.png" alt="">');
      // console.log(bluecar1position);
      collisionDetection();
    }

    function car2Lane2() {
      $('#' + bluecar2position).html("");
      if (bluecar2position === 79) {
          bluecar2position = 64;
      } else {
        bluecar2position++;
      }
      $('#' + bluecar2position).html('<img id="car" src="Images/bluecar.png" alt="">');
      // console.log(bluecar1position);
      collisionDetection();
    }

    function car1Lane3() {
      $('#' + redwhiteracer1position).html("");
      if (redwhiteracer1position === 48) {
          redwhiteracer1position = 63;
      } else {
        redwhiteracer1position--;
      }
      $('#' + redwhiteracer1position).html('<img id="car" src="Images/racecar1.png" alt="">');
      // console.log(redwhiteracer1position);
      collisionDetection();
    }

    function car2Lane3() {
      $('#' + redwhiteracer2position).html("");
      if (redwhiteracer2position === 48) {
          redwhiteracer2position = 63;
      } else {
        redwhiteracer2position--;
      }
      $('#' + redwhiteracer2position).html('<img id="car" src="Images/racecar1.png" alt="">');
      // console.log(redwhiteracer1position);
      collisionDetection();
    }

    function car1Lane4() {
      $('#' + racer2position).html("");
      if (racer2position === 47) {
          racer2position = 32;
      } else {
        racer2position++;
      }
      $('#' + racer2position).html('<img id="car" src="Images/racecar2.png" alt="">');
      // console.log(redwhiteracer1position);
      collisionDetection();
    }

    function car1Lane5() {
      $('#' + van1position).html("");
      if (van1position === 31) {
          van1position =16;
      } else {
        van1position++;
      }
      $('#' + van1position).html('<img id="car" src="Images/greenvan.png" alt="">');
      // console.log(van1position);
      collisionDetection();
    }

    function car2Lane5() {
      $('#' + van2position).html("");
      if (van2position === 31) {
          van2position =16;
      } else {
        van2position++;
      }
      $('#' + van2position).html('<img id="car" src="Images/greenvan.png" alt="">');
      // console.log(van2position);
      collisionDetection();
    }

    function car3Lane5() {
      $('#' + van3position).html("");
      if (van3position === 31) {
          van3position =16;
      } else {
        van3position++;
      }
      $('#' + van3position).html('<img id="car" src="Images/greenvan.png" alt="">');
      // console.log(van3position);
      collisionDetection();
    }

    function gameOver() {
      // Game over if -3 lives game over, score is check if reaches new high,
      if (lives < 0) {
        console.log("Game OVER");
        // clearInterval(lane1);
        // clearInterval(lane1car2);
        // clearInterval(lane2);
        // clearInterval(lane2car2);
        // clearInterval(lane3);
        // clearInterval(lane3car2);
        // clearInterval(lane4);
        // clearInterval(lane5);
        // clearInterval(lane5van2);
        // clearInterval(lane5van3);
        restart();
        var gameover = document.getElementById('gameover');
        var span = document.getElementsByClassName("restart")[0];
        span.onclick = function() {
            modal.style.display = "none";
            console.log("let's Start Running");
            restart();
        }

        // function resetBoard(){}
        // timeRunning = !timeRunning;
      }
    }

    function pause() {
      console.log("Paused");
      clearInterval(lane1);
      clearInterval(lane1car2);
      clearInterval(lane2);
      clearInterval(lane2car2);
      clearInterval(lane3);
      clearInterval(lane3car2);
      clearInterval(lane4);
      clearInterval(lane5);
      clearInterval(lane5van2);
      clearInterval(lane5van3);
    }

  }
  // future game prompts to be added

});
// timeRunning = !timeRunning  pause the game, gameover man
