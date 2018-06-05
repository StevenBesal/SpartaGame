$(document).ready(function() {

// Global variables

  var grid = [
    [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    [32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],
    [48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],
    [64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],
    [80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],
  ];
  var lives = 3;
  // var car = $("#car");
  var score = 0;
  var highScore = localStorage.getItem("highScore");
  var visited = 1;
// Movement

  var position = 87;//
  $('#' + position).html('<img id="player" src="player.png" alt="">');

  $('#reset').click(resetBoard)

  //keyboard, arrow keys
  $(document).keydown(function(e) {
    switch(e.which) {

    //move left
    case 37:
      $("#" + position).html(visited);
      position = position - 1;
      $('#' + position).html('<img id="player" src="player.png" alt="">')
      // console.log("left " + position);
      break;

    //move up
    case 38:
      $("#" + position).html(visited);
      position = position - 16;
      $('#' + position).html('<img id="player" src="player.png" alt="">')
      // $("#").html("1");
      // console.log("up " + position);
      break;

    //move right
    case 39:
      $("#" + position).html(visited);
      position = position + 1;
      $('#' + position).html('<img id="player" src="player.png" alt="">')
      // console.log("right " + position);
      break;

    //move down
    case 40:
      $("#" + position).html(visited);
      position = position +  16;
      $('#' + position).html('<img id="player" src="player.png" alt="">')
      // console.log("down " + position);
      break;
    };
    checkForHome();
    car();
    collisionDetection();
  });
  //start position, new chickens always start in the same position
  //around grid

  function car(position) {
    position = 79;
    // console.log("car is " + position);
    $('#' + position).html('<img id="car" src="http://www.placecage.com/100/100" alt="">');

    return position;

    setInterval(moveRight, 500);
    function moveRight() {
      for (var i = 79; i <=64; i--) {
        if ($("#" + i).html() == 1) {
          console.log("car moving" + position);
          collisionDetection();
        }
      }
    }
  }

// Collision detection, (detection whether player push car or object enters the same block)
  function collisionDetection() {
    console.log(position);
    if (car(position) == position) {
      console.log("you've been hit");
      collision();
    }
  }

  function collision() {
    lives = lives - 1;
    $("#lives").html("LIVES: " + lives);
    console.log("lives left: " + lives);
    resetBoard();
    resetObsticles();
    gameOver()
  }

// High Score
  // standard high score set 20 saved
  // if player score is <20 new score appears (after all lives lose check this)
  function highScore() {
    if (score > highScore) {
      localStorage.setItem("highScore ", + highScore)
    } else {
      localStorage.setItem("highScore ", + highScore)
    }
  };

// Score
  // as each chicken reaches home, +1 is added to the score
  // other score bonuses can be added later

  function checkForHome() {
    for (var i = 0; i <= 15; i++) {
      if ($("#" + i).html() == 1) {
        console.log("home");
        gotHome();
      }
    }
  };

  function gotHome() {
    score = score + 1;
    // $(".playerTurn").html("It is " + player + "'s turn'");
    $("#score").html("SCORE: " + score);
    console.log("Chicken home, " + score);
    resetBoard();
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
      console.log(score);
      $('#' + position).html('<img id="player" src="player.png" alt="">')
  };


  // Game over if -3 lives game over, score is check if reaches new high,
  function gameOver() {
    if (lives < 0) {
      console.log("Game OVER");
      timeRunning = !timeRunning;
    }
  }

// future game prompts to be added

// start
  function start() {

    for (var i = 0; i < 3; i++) {
      start[i]
    }
  }
});


// timeRunning = !timeRunning  pause the game, gameover man
