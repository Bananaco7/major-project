// player in grid

let ROWS; 
let COLS;
let grid, cellWidth, cellHeight;
let sidePadding;
let topPadding;
let gridHeight;
let gridWidth;
let rightKey = false;
let leftKey = false;
let dropping = false;
let dropTime;
let yCor = 0;
let iBlock;


function setup() {
  iBlock = [[1, 1, 1, 1]];
  createCanvas(windowWidth, windowHeight);

  //creating the grid dimesions for tetris
  gridHeight = windowHeight * 0.90;
  gridWidth = windowWidth *0.28;
  COLS = 12;
  ROWS = 20;
  cellWidth = 35;
  cellHeight = 35;

  //padding for the sides of the tetris grid
  sidePadding = (windowWidth - gridWidth)/2; 
  topPadding = (windowHeight - gridHeight)/2;

  grid = createEmptyGrid(COLS, ROWS);
}

function draw() {
  background(220);
  displayGrid();
  iBlockCreate();
  blockDrop();
}


function displayGrid() {
  for (let y = 0; y<ROWS; y++) {
    for (let x = 0; x<COLS; x++) {
      if (grid[y][x] === 0){
        fill("black");
        stroke("white");
      }
      if (grid[y][x] === 1){
        fill("turquoise");
        stroke("white");
      }
      if (grid[y][x] === 2){
        fill("blue");
        stroke("white");
      }
      if (grid[y][x] === 3){
        fill("orange");
        stroke("white");
      }
      if (grid[y][x] === 4){
        fill("yellow");
        stroke("white");
      }
      if (grid[y][x] === 5){
        fill("green");
        stroke("white");
      }
      if (grid[y][x] === 6){
        fill("purple");
        stroke("white");
      }
      if (grid[y][x] === 7){
        fill("red");
        stroke("white");
      }
      //creating the grid with the extra side padding 
      rect(x*cellWidth + sidePadding, y*cellHeight + topPadding, cellWidth, cellHeight); 
    }
  }
}

function createEmptyGrid(cols, rows) {
  let empty = [];
  for (let y  = 0; y < rows; y++) {
    empty.push([]);
    for (let x = 0; x < cols; x++) {
      empty[y].push(0);
    }
  }
  return empty;
}

function blockDrop() {
  if (dropping) {
    dropTime = millis();
    if (millis % 500 === 0) {
      yCor++;
    }
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    rightKey = true;
  }
  if (keyCode === LEFT_ARROW) {
    leftKey = true;
  }
}
function drop() {

}

function iBlockCreate() {
  //I-Block creation 
  for (let i = 0; i < iBlock.length; i++) {
    for (let j = 0; j < iBlock[i].length; j++) {
      if (iBlock[i][j] === 1) {
        
      }
    }
  }
}