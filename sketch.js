// player in grid

let ROWS; 
let COLS;
let grid, cellWidth, cellHeight;
let sidePadding;
let topPadding;
let gridHeight;
let gridWidth;


function setup() {
  createCanvas(windowWidth, windowHeight);
  gridHeight = windowHeight * 0.90;
  gridWidth = windowWidth *0.28;
  sidePadding = (windowWidth - gridWidth)/2;
  topPadding = (windowHeight - gridHeight)/2;
  COLS = 10;
  ROWS = 20;
  cellWidth = 40;
  cellHeight = 40;
  grid = createEmptyGrid(COLS, ROWS);
}

function draw() {
  background(220);
  displayGrid();
}


function displayGrid() {
  for (let y = 0; y<ROWS; y++) {
    for (let x = 0; x<COLS; x++) {
      if (grid[y][x] === 0){
        fill("white");
      }
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