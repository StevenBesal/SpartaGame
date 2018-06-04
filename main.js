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
  // var player = 'player';
  var car = 'car';
  var score = " ";
  var highScore = localStorage.getItem("highScore");

// Movement
  var player = $("#player");
  var space = 0;

  var position = 87;
  $('#' + position).html('<img id="player" src="player.png" alt="">');

  // function checkSpace() {
  //   if (space === 12)
  //   {
  //    $(player).animate({left: "0px"}, 'fast');
  //   }
  // }

  //keyboard, arrow keys
  $(document).keydown(function(e) {
    $(player).keydown;
    switch(e.which) {

    //move left
    case 37:
      $("#" + position).html('');
      position = position - 1;
      $('#' + position).html('<img id="player" src="player.png" alt="">')
      console.log("left");
      break;

    //move up
    case 38:
      $("#" + position).html('');
      position = position - 16;
      $('#' + position).html('<img id="player" src="player.png" alt="">')
      console.log("up");
      break;

    //move right
    case 39:
      $("#" + position).html('');
      position = position + 1;
      $('#' + position).html('<img id="player" src="player.png" alt="">')
      console.log("right");
      break;

    //move down
    case 40:
      $("#" + position).html('');
      position = position +  16;
      $('#' + position).html('<img id="player" src="player.png" alt="">')
      console.log("down");
      break;
    };
  });
  //start position, new chickens always start in the same position
  //around grid

// Collision detection, (detection whether player push car or object enters the same block)
  // function collision() {
  //   if player
  //
  // }

// High Score
  // standard high score set 20 saved
  // if player score is <20 new score appears (after all lives lose check this)
  function highScore() {
    if (score > highScore) {
      localStorage.setItem("highScore ", + highScore)
    } else {
      localStorage.setItem("highScore ", + highScore)
    }
  }
            // var highscore = localStorage.getItem("highscore");
            //
            // if(highscore !== null){
            //     if (score > highscore) {
            //         localStorage.setItem("highscore", score);
            //     }
            // }
            // else{
            //     localStorage.setItem("highscore", score);
            // }

// Score
  // as each chicken reaches home, +1 is added to the score
  // other score bonuses can be added later
  function score() {

  }

//

// Lives
  function lives() {

  }

  // Reset if a collision is detected -1 live
  function reset() {

  }
  // Game over if -3 lives game over, score is check if reaches new high,
  function gameOver() {

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
