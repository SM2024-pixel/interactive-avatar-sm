/* VARIABLES */
let eyeWidth = 50;
let eyeHeight = 40;
let irisWidth = 22;
let irisHeight = 25;
let pupilWidth = 10;
let pupilHeight = 10;
let hairWidth = 30;
let hairHeight = 50;

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400,400); 

  //sets the background color
  background('lightblue'); 

  }

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);
  
//Face
  fill('rgb(209, 175, 132)');
  stroke('black');
  strokeWeight(3);
  ellipse(width/2, height/2, 175, 200);

//Eyes- Sclera 
  if(mouseIsPressed) {
//One eye closed
  fill(0);
  ellipse(230, 170, eyeWidth, eyeHeight/8);
//One eye open
  fill(0);
  ellipse(230, 170, eyeWidth, eyeHeight/8);
  leftEye();
  } else {
    //Eyes open
  stroke('black');
  strokeWeight(2);
  fill('white');
  ellipse(170, 170, eyeWidth, eyeHeight);
  ellipse(230, 170, eyeWidth, eyeHeight);

//Iris
  noStroke();
  fill('rgb(101, 67, 33)');
  ellipse(170, 170,  irisWidth, irisHeight);
  ellipse(230, 170, irisWidth, irisHeight);

//Pupils
  fill('black');
  ellipse(170, 170, pupilWidth, pupilHeight);
  ellipse(230, 170, pupilWidth, pupilHeight);
  }
  
//Mouth
  colorMode(HSB);
  stroke('black');
  strokeWeight(3);
  fill('#7c0a01');
  arc(200, 230, 50, 50, 0, 180);
  
//Hair
  noStroke();
  fill('black')
  arc(200, 140, 100, 100, 180, 0);
  ellipse(145, 125, hairWidth, hairHeight);
  ellipse(255, 125, hairWidth, hairHeight);
  ellipse(120, 140, hairWidth, hairHeight);
  ellipse(280, 140, hairWidth, hairHeight);
  ellipse(120, 180, hairWidth, hairHeight);
  ellipse(280, 180, hairWidth, hairHeight);
  ellipse(120, 225, hairWidth, hairHeight);
  ellipse(280, 225, hairWidth, hairHeight);
  ellipse(120, 275, hairWidth, hairHeight);
  ellipse(280, 275, hairWidth, hairHeight);
  
//Text
  fill('black');
  textSize(20);
  text('"Pride is not the opposite of shame, \n but its source." - Iroh', 15, 35);

//Directions for mouse press
  fill('black');
  textSize(20);
  text('Click to see \n me wink!', 280, 350);
  
}

function leftEye() {
//Creates left eye when right eye is winking
  stroke('black');
  strokeWeight(2);
  fill('white');
  ellipse(170, 170, eyeWidth, eyeHeight);
  noStroke();
  fill('rgb(101, 67, 33)');
  ellipse(170, 170,  irisWidth, irisHeight);
  fill('black');
  ellipse(170, 170,  pupilWidth, pupilHeight);
  
}