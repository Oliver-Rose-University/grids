const CELLSIZES = [50, 100, 200]
const COLOURS = ["Red", "Yellow", "MidnightBlue", "SeaShell", "SeaShell", "SeaShell", "Black"]

function setup() {
  createCanvas(600, 600);
  noLoop()
  strokeWeight(10);
}

function draw() {
  background(220);
  const CELLSIZE = 10
  // noStroke();
  // Simple Grid
  // for(let y = 0; y < height; y+= CELLSIZE){
  //   for(let x = 0; x < width; x+= CELLSIZE){
  //     fill(random(255), random(255), random(255));
  //     rect(x, y, CELLSIZE)
  //   }
  // }

    let x = 0
    let y = 0
    let currentWidth = random(CELLSIZES);
    let currentHeight = random(CELLSIZES);
    while(y < height){
      while(x < width){
        fill(random(COLOURS));
        rect(x, y, currentWidth, currentHeight);
        x+= currentWidth;
        currentWidth = random(CELLSIZES);
      }
      x = 0;
      y += currentHeight;
      currentHeight = random(CELLSIZES);
  }
}



