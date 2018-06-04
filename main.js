$(document).ready(function() {

// Global variables

  var grid = [
    [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    [32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],
  ];
  var lives = 3;
  var player = 'player';
  var car = 'car';
  var score = "score";

// Movement
  //start position, new chickens always start in the same position
  //keyboard, arrow keys
  //around grid

// High Score
  // standard high score set 20 saved
  // if player score is <20 new score appears (after all lives lose check this)
  function highScore() {
    if (score > 20;) {
      highScore = ;
    } else {
      highScore = 20;
    }
  }

// Score
  // as each chicken reaches home, +1 is added to the score
  // other score bonuses can be added later

// Collision detection, (detection whether player push car or object enters the same block)

//

// Lives

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
