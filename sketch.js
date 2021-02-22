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
let upKey = false;
let downKey = false;
let dropping = false;
let createBlock = false;
let dropTime;
let yCor = 4;
let xCor = 0;
let iBlock, lBlock, jBlock, zBlock, sBlock, oBlock, tBlock;
let blockList;
let iBlockList, lBlockList, jBlockList, zBlockList, sBlockList, oBlockList, tBlockList;
let block;
let blockColor;
let blockOrientation;
let rotateCount = 0;
let counter;


function setup() {
  iBlock = [[1, 1, 1, 1]];
  let iBlockInverse = [[1], [1], [1], [1]];

  lBlock = [[0, 0, 1, 0], [1, 1, 1, 0]];
  let lBlockInverse1 = [[1], [1], [1, 1]];
  let lBlockInverse2 = [[1, 1, 1], [1]];
  let lBlockInverse3 = [[1, 1],[0, 1], [0, 1]];

  jBlock = [[1, 0, 0, 0], [1, 1, 1, 0]];
  let jBlockInverse1 = [[1, 1], [1], [1]];
  let jBlockInverse2 = [[1, 1, 1] [0, 0, 1]];
  let jBlockInverse3 = [[0,1], [0,1],[1, 1]];


  zBlock = [[1, 1, 0, 0], [0, 1, 1, 0]];
  sBlock = [[0, 1, 1, 0], [1, 1, 0, 0]];
  oBlock = [[1, 1, 0, 0], [1, 1, 0, 0]];
  tBlock = [[0, 1, 0, 0], [1, 1, 1, 0]];
  createCanvas(windowWidth, windowHeight);

  blockList = [iBlock, lBlock, jBlock, zBlock, sBlock, oBlock, tBlock];
  iBlockList = [iBlock, iBlockInverse];
  lBlockList = [lBlock, lBlockInverse1, lBlockInverse2, lBlockInverse3];
  jBlockList = [jBlock, jBlockInverse1, jBlockInverse2, jBlockInverse3];

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
  blockCreate();
  blockDrop();
  rotate();
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
      if (grid[y][x] === 8){
        fill("turquoise");
        stroke("white");
      }
      if (grid[y][x] === 9){
        fill("blue");
        stroke("white");
      }
      if (grid[y][x] === 10){
        fill("orange");
        stroke("white");
      }
      if (grid[y][x] === 11){
        fill("yellow");
        stroke("white");
      }
      if (grid[y][x] === 12){
        fill("green");
        stroke("white");
      }
      if (grid[y][x] === 13){
        fill("purple");
        stroke("white");
      }
      if (grid[y][x] === 14){
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
    createBlock = true;
    dropping = false;
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
    downKey = true;
    createBlock = true;
  }
  if (keyCode === UP_ARROW) {
    upKey = true; 
    createBlock = true;
    counter++;
  }
}

function colorPick() {
  if (block === iBlock) {
    blockColor = 1;
  }
  if (block === lBlock) {
    blockColor = 2;
  }
  if (block === jBlock) {
    blockColor = 3;
  }
  if (block === zBlock) {
    blockColor = 4;
  }
  if (block === sBlock) {
    blockColor = 5;
  }
  if (block === oBlock) {
    blockColor = 6;
  }
  if (block === tBlock) {
    blockColor = 7;
  }
}

//clears previous postion of the tetris block
function newPosition() {
  if (rightKey || leftKey || upKey) {
    for (let i = 0; i <= 6; i++) {
      for (let j = 0; j <= 6; j++) {
        if (grid[yCor + j][xCor + i] === blockColor) {
          grid[yCor + j][xCor + i] = 0;
          console.log("yup");
        }
      }
    }
  }
}

function blockCreate() {
  //I-Block creation 
  let initialX = xCor;
  let initialY = yCor;
  if (createBlock && !upKey && !downKey) {
    console.log("yes");
    newPosition();
    block = blockList[Math.floor(Math.random()*blockList.length)];
    colorPick();
    for (let i = 0; i < block.length; i++) {
      if (i > 0) {
        yCor++;
      }
      for (let j = 0; j < block[i].length; j++) {
        xCor++;
        if (block[i][j] === 1) {
          grid[yCor][xCor] = blockColor;
        }
      }
      xCor = initialX;
      yCor = initialY;
    }
    createBlock = false;
    rightKey = false;
    leftKey = false;
  }



  if (createBlock && (upKey || downKey)) {
    console.log("hey");
    newPosition();
    rotation();
    if (block === iBlock) {
      blockOrientation = iBlockList[rotateCount];
    }
    for (let i = 0; i < blockOrientation.length; i++) {
      if (i > 0) {
        yCor++;
      }
      for (let j = 0; j < blockOrientation[i].length; j++) {
        xCor++;
        if (blockOrientation[i][j] === 1) {
          grid[yCor][xCor] = 1;
        }
      }
      xCor = initialX;
      yCor = initialY;
    }
  }
  createBlock = false;
  rightKey = false;
  leftKey = false;
  upKey = false;
  downKey = false;
}

// shape that has 3 rotational possibilities
function rotation() {
  if (upKey) {
    rotateCount++;
  }
  if (downKey) {
    rotateCount--;
  }
  if (rotateCount === 4) {
    rotateCount = 0;
  }
  if (rotateCount === 2 && block === iBlock) {
    rotateCount = 0;
  }
}
