var letters = [];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var blue = ['b', 'l', 'u', 'e'];

function setup() {
  createCanvas(1265, 630);
  // background(255, 204, 0);
  for (var i = 0; i < 500; i++) {
    letters.push(new Letter());
  }
}

function draw() {
  background(220);
  for (var i = 0; i < letters.length; i++) {
    letters[i].move();
    letters[i].display();
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

function mousePressed() {
  // background(0);
  noLoop();
  // for (var i = 0; i < blue.length; i++) {
  //   letters.push(new Letter(blue[i]));
  // }
  // while (letters.length != 0) {
    setTimeout(deleteLetter(letters), 3500);
    // deleteLetter(letters);
  // }
  // mousePressed();
}

function deleteLetter(letters) {
  for (var i = 0; i < 50; i++) {
    letters.pop();
  }
  // setTimeout(deleteLetter(letters), 1000);
}

function mouseReleased() {
  loop();
}
