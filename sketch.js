const CELLSIZES = [50, 100, 200]
const COLOURS = ["Red", "Yellow", "MidnightBlue", "SeaShell", "SeaShell", "SeaShell", "Black"]

function setup() {
  createCanvas(600, 600);
  noLoop()
  strokeWeight(10);
}

function draw() {
  background(220);
  const ARCVALUES = [TAU * 0.25, TAU * 0.5, TAU * 0.75, TAU];
  const CELLSIZE = 50;
  for(let y = 0; y < height; y+= CELLSIZE){
    for(let x = 0; x < width; x+= CELLSIZE){
      fill(random(255), random(255), random(255));
      arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE, CELLSIZE, 0, random(ARCVALUES))
      arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 2, CELLSIZE / 2, 0, random(ARCVALUES))

    }
  }

    // let x = 0
    // let y = 0
    // let currentWidth = random(CELLSIZES);
    // let currentHeight = random(CELLSIZES);
    // while(y < height){
    //   while(x < width){
    //     fill(random(COLOURS));
    //     rect(x, y, currentWidth, currentHeight);
    //     x+= currentWidth;
    //     currentWidth = random(CELLSIZES);
    //   }
    //   x = 0;
    //   y += currentHeight;
    //   currentHeight = random(CELLSIZES);
  // }
}



