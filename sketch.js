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
let createBlock = false;
let dropTime;
let yCor = 0;
let xCor = 0;
let iBlock, lBlock, jBlock, zBlock, sBlock, oBlock;



function setup() {
  iBlock = [[1, 1, 1, 1]];
  lBlock = [[0, 0, 0, 1], [0, 1, 1, 1]];
  jBlock = [[0, 1, 0, 0], [0, 1, 1, 1]];
  zBlock = [[1, 1, 0, 0], [0, 1, 1, 0]];
  sBlock = [[0, 1, 1, 0], [1, 1, 0, 0]];
  oBlock = [[1, 1, 0, 0], [1, 1, 0, 0]];
  tBlock = [[0, 1, 0, 0], [1, 1, 1, 0]];
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
  // iBlockCreate();
  blockDrop();
  // lBlockCreate();
  // jBlockCreate();
  // zBlockCreate();
  // sBlockCreate();
  // oBlockCreate();
  tblockCreate();
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
    yCor++;
    createBlock === true;
    dropping === false;
  }
}

function keyPressed() {
  if (xCor < COLS - 4){
    if (keyCode === RIGHT_ARROW) {
      rightKey = true;
      createBlock = true;
      xCor++;
    }
  }
  if (xCor>= 0) {
    if (keyCode === LEFT_ARROW) {
      leftKey = true;
      xCor--;
      createBlock = true;
    }
  }
  if (keyCode === ENTER) {
    createBlock = true;
  }
  if (keyCode === DOWN_ARROW) {
    dropping = true;
  }
}
function drop() {

}

function iBlockCreate() {
  //I-Block creation 
  let initialX = xCor;
  if (createBlock) {
    if (grid[yCor][xCor] === 1 && rightKey) {
      grid[yCor][xCor] = 0;
    }
    if (grid[yCor][xCor+5] === 1 && leftKey) {
      grid[yCor][xCor+5] = 0;
    }
    for (let i = 0; i < iBlock.length; i++) {
      for (let j = 0; j < iBlock[i].length; j++) {
        xCor++;
        if (iBlock[i][j] === 1) {
          grid[yCor][xCor] = 1;
        }
      }
      xCor = initialX;
    }
  }
  createBlock = false;
  rightKey = false;
  leftKey = false;
}

function lBlockCreate() {
  let initialX = xCor;
  let initialY = yCor;
  if (createBlock) {
    if (rightKey) {
      grid[yCor][xCor + 3] = 0;
      grid[yCor + 1][xCor + 1] = 0;
    }
    if (leftKey) {
      grid[yCor][xCor+5] = 0;
      grid[yCor + 1][xCor + 5] = 0;
    }
    for (let i = 0; i < lBlock.length; i++) {
      if (i > 0) {
        yCor++;
      }
      for (let j = 0; j < lBlock[i].length; j++) {
        xCor++;
        if (lBlock[i][j] === 1) {
          grid[yCor][xCor] = 2;
        }
      }
      xCor = initialX;
      yCor = initialY;
    }
  }
  createBlock = false;
  rightKey = false;
  leftKey = false;
}

function jBlockCreate() {
  let initialX = xCor;
  let initialY = yCor;
  if (createBlock) {
    if (rightKey) {
      grid[yCor][xCor + 1] = 0;
      grid[yCor + 1][xCor + 1] = 0;
    }
    if (leftKey) {
      grid[yCor][xCor + 3] = 0;
      grid[yCor + 1][xCor + 5] = 0;
    }
    for (let i = 0; i < jBlock.length; i++) {
      if (i > 0) {
        yCor++;
      }
      for (let j = 0; j < jBlock[i].length; j++) {
        xCor++;
        if (jBlock[i][j] === 1) {
          grid[yCor][xCor] = 3;
        }
      }
      xCor = initialX;
      yCor = initialY;
    }
  }
  createBlock = false;
  rightKey = false;
  leftKey = false;
}

function zBlockCreate() {
  let initialX = xCor;
  let initialY = yCor;
  if (createBlock) {
    if (rightKey) {
      grid[yCor][xCor] = 0;
      grid[yCor + 1][xCor + 1] = 0;
    }
    if (leftKey) {
      grid[yCor][xCor + 3] = 0;
      grid[yCor + 1][xCor + 4] = 0;
    }
    for (let i = 0; i < zBlock.length; i++) {
      if (i > 0) {
        yCor++;
      }
      for (let j = 0; j < zBlock[i].length; j++) {
        xCor++;
        if (zBlock[i][j] === 1) {
          grid[yCor][xCor] = 4;
        }
      }
      xCor = initialX;
      yCor = initialY;
    }
  }
  createBlock = false;
  rightKey = false;
  leftKey = false;
}

function sBlockCreate() {
  let initialX = xCor;
  let initialY = yCor;
  if (createBlock) {
    if (rightKey) {
      grid[yCor][xCor + 1] = 0;
      grid[yCor + 1][xCor] = 0;
    }
    if (leftKey) {
      grid[yCor][xCor + 4] = 0;
      grid[yCor + 1][xCor + 3] = 0;
    }
    for (let i = 0; i < sBlock.length; i++) {
      if (i > 0) {
        yCor++;
      }
      for (let j = 0; j < sBlock[i].length; j++) {
        xCor++;
        if (sBlock[i][j] === 1) {
          grid[yCor][xCor] = 5;
        }
      }
      xCor = initialX;
      yCor = initialY;
    }
  }
  createBlock = false;
  rightKey = false;
  leftKey = false;
}

function oBlockCreate() {
  let initialX = xCor;
  let initialY = yCor;
  if (createBlock) {
    if (rightKey) {
      grid[yCor][xCor] = 0;
      grid[yCor + 1][xCor] = 0;
    }
    if (leftKey) {
      grid[yCor][xCor + 3] = 0;
      grid[yCor + 1][xCor + 3] = 0;
    }
    for (let i = 0; i < oBlock.length; i++) {
      if (i > 0) {
        yCor++;
      }
      for (let j = 0; j < oBlock[i].length; j++) {
        xCor++;
        if (oBlock[i][j] === 1) {
          grid[yCor][xCor] = 6;
        }
      }
      xCor = initialX;
      yCor = initialY;
    }
  }
  createBlock = false;
  rightKey = false;
  leftKey = false;
}

function tblockCreate() {
  let initialX = xCor;
  let initialY = yCor;
  if (createBlock) {
    if (rightKey) {
      grid[yCor][xCor + 1] = 0;
      grid[yCor + 1][xCor] = 0;
    }
    if (leftKey) {
      grid[yCor][xCor + 3] = 0;
      grid[yCor + 1][xCor + 4] = 0;
    }
    for (let i = 0; i < tBlock.length; i++) {
      if (i > 0) {
        yCor++;
      }
      for (let j = 0; j < tBlock[i].length; j++) {
        xCor++;
        if (tBlock[i][j] === 1) {
          grid[yCor][xCor] = 6;
        }
      }
      xCor = initialX;
      yCor = initialY;
    }
  }
  createBlock = false;
  rightKey = false;
  leftKey = false;
}

