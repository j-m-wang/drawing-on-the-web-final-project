var letters = [];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var backgroundcolor = ['Gainsboro','hotpink'];
var bc = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (var i = 0; i < 600; i++) {
    letters.push(new Letter());
  }
}

function draw() {
  background(backgroundcolor[bc]);
  for (var i = 0; i < letters.length; i++) {
    letters[i].move();
    letters[i].display();
    //if the mouse is within 25 pixels of the letter
    if (((Math.floor(letters[i].x) - 25 <= mouseX) && (Math.floor(letters[i].x) + 25 >= mouseX)) && ((Math.floor(letters[i].y) - 25 <= mouseY) && (Math.floor(letters[i].y) + 25 >= mouseY))) {
      //move the letter away - either -10 pixels or +10 pixels depending on whether or not the x coordinate is even (this is just to create some variety)
      if (Math.floor(letters[i].x) % 2 == 0) {
        letters[i].x -= 10;
        letters[i].y -= 10;
      }
      else {
        letters[i].x += 10;
        letters[i].y += 10;
      }
    }
  }
}

function Letter() {
  this.x = random(width);
  this.y = random(height);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.letter = String(randomLetter());
  this.size = 10;

  textFont(this.size);
  this.display = function() {
    textFont('Lato');
    textSize(14);
    text(this.letter, this.x, this.y);
  };
}

function randomLetter() {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var randNum = Math.floor(Math.random() * 26);
  return alphabet[randNum];
}

//when the user presses down on the mouse- letters stop moving
function mousePressed() {
  noLoop();
}

//when the mouse is released- letters resume movement
function mouseReleased() {
  loop();
}
