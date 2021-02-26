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
let timer;
let yCor = 0;
let xCor = 6;
let iBlock, lBlock, jBlock, zBlock, sBlock, oBlock, tBlock;
let blockList;
let iBlockList, lBlockList, jBlockList, zBlockList, sBlockList, oBlockList, tBlockList;
let block;
let blockColor;
let permanentColor;
let blockOrientation;
let rotateCount = 0;
let counter;
let nextBlockCols;
let nextBlockRows;
let respawn = false;
let finalShape;
let finalXcor;
let finalYcor;
let finalOrientation;
let lockedColorValues;



function setup() {
  iBlock = [[1, 1, 1, 1]];
  let iBlockInverse = [[1], [1], [1], [1]];

  lBlock = [[0, 0, 1, 0], [1, 1, 1, 0]];
  let lBlockInverse1 = [[1, 0, 0], [1, 0, 0], [1, 1, 0]];
  let lBlockInverse2 = [[1, 1, 1], [1, 0, 0]];
  let lBlockInverse3 = [[1, 1, 0],[0, 1, 0], [0, 1, 0]];

  jBlock = [[1, 0, 0, 0], [1, 1, 1, 0]];
  let jBlockInverse1 = [[1, 1, 0], [1, 0, 0], [1, 0, 0]];
  let jBlockInverse2 = [[1, 1, 1], [0, 0, 1]];
  let jBlockInverse3 = [[0, 1, 0], [0, 1, 0],[1, 1, 0]];


  zBlock = [[1, 1], [0, 1, 1, 0]];
  let zBLockInverse1 = [[0, 1], [1, 1], [1, 0]];

  sBlock = [[0, 1, 1, 0], [1, 1, 0, 0]];
  let sBlockInverse1 = [[1, 0], [1, 1], [0, 1]];

  oBlock = [[1, 1, 0, 0], [1, 1, 0, 0]];

  tBlock = [[0, 1, 0, 0], [1, 1, 1, 0]];
  let tBlockInverse1 = [[1, 0, 0], [1, 1, 0], [1, 0, 0]];
  let tBlockInverse2 = [[1, 1, 1], [0, 1, 0]];
  let tBlockInverse3 = [[0, 1, 0], [1, 1, 0], [0, 1, 0]];

  createCanvas(windowWidth, windowHeight);

  blockList = [iBlock, lBlock, jBlock, zBlock, sBlock, oBlock, tBlock];
  iBlockList = [iBlock, iBlockInverse];
  lBlockList = [lBlock, lBlockInverse1, lBlockInverse2, lBlockInverse3];
  jBlockList = [jBlock, jBlockInverse1, jBlockInverse2, jBlockInverse3];
  zBlockList = [zBlock, zBLockInverse1];
  sBlockList = [sBlock, sBlockInverse1];
  tBlockList = [tBlock, tBlockInverse1, tBlockInverse2, tBlockInverse3];

  lockedColorValues = [8, 9, 10, 11, 12, 13, 14];

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

  //dimensions for the next block grid
  nextBlockCols = 

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
      if (grid[y][x === 15]) {
        fill("grey");
        stroke("black");
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

function createNextBlockGrid(cols, rows) {
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
  // dropTime = millis();
  if (dropping) {
    if (millis() > dropTime + timer) {
      newPosition();
      yCor++;
      createBlock = true;
      dropTime = millis();
      timer = 1000;
      finalXcor = xCor;
      finalYcor = yCor;
      finalShape = block;
      finalOrientation = blockOrientation;
    }
    if (rotateCount === 0 && yCor >= ROWS - block.length) {
      createBlock = true;
      dropping = false;
      stagnant();
      respawnBlock();
    }
    if (rotateCount !== 0 && yCor >= ROWS - blockOrientation.length) {
      createBlock = true;
      dropping = false;
      stagnant();
      respawnBlock();
    }
    if (rotateCount === 0) {
      for (let i = 0; i <= block[0].length; i++) {
        if (grid[yCor + block.length][xCor + i] !== 0 && xCor>= 0 && xCor < COLS - block[0].length) {
          dropping = false;
          stagnant();
          respawnBlock();
        }
      }
    }
    if (rotateCount !== 0) {
      for (let i = 0; i <= blockOrientation[0].length; i++) {
        if (grid[yCor + blockOrientation.length][xCor + i] !== 0 && xCor>= 0 && xCor < COLS - blockOrientation[0].length) {
          dropping = false;
          stagnant();
          respawnBlock();
        }
      }
    }
    if (downKey === true) {
      newPosition();
      yCor++;
      createBlock = true;
      downKey = false;
    }
  }
}

//
function keyPressed() {
  if (xCor < COLS - 4){
    if (keyCode === RIGHT_ARROW) {
      if (rotateCount === 0) {
        newPosition();
      }
      if (rotateCount !==0) {
        newPositionOrient();
      }
      rightKey = true;
      createBlock = true;
      xCor++;
    }
  }
  if (xCor>= 0) {
    if (keyCode === LEFT_ARROW) {
      if (rotateCount === 0) {
        newPosition();
      }
      if (rotateCount !==0) {
        newPositionOrient();
      }
      leftKey = true;
      xCor--;
      createBlock = true;
    }
  }
  if (keyCode === ENTER) {
    createBlock = true;
    newPosition();
    block = blockList[Math.floor(Math.random()*blockList.length)];
    dropping = true;
    dropTime = millis();
    timer = 1000;
  }
  if (keyCode === DOWN_ARROW) {
    timer = 150;
    newPosition();
  }
  if (keyCode === UP_ARROW) {
    if (rotateCount === 0) {
      newPosition();
    }
    if (rotateCount !==0) {
      newPositionOrient();
    }
    upKey = true; 
    createBlock = true;
    counter++;
  }
}

//stores the colors for active in play blocks
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

//creates permanent colors that wont be erased by the "newposition" function
function colorPickPerma() {
  if (finalShape  === iBlock) {
    permanentColor = 8;
  }
  if (finalShape  === lBlock) {
    permanentColor = 9;
  }
  if (finalShape  === jBlock) {
    permanentColor = 10;
  }
  if (finalShape  === zBlock) {
    permanentColor = 11;
  }
  if (finalShape  === sBlock) {
    permanentColor = 12;
  }
  if (finalShape === oBlock) {
    permanentColor = 13;
  }
  if (finalShape  === tBlock) {
    permanentColor = 14;
  }
}

//clears previous postion of the tetris block
function newPosition() {
  if (rightKey || leftKey || upKey || dropping) {
    for (let i = 0; i <= 4; i++) {
      for (let j = 0; j <= block.length; j++) {
        if (grid[yCor + j][xCor + i] === blockColor) {
          grid[yCor + j][xCor + i] = 0;
          console.log("yup");
        }
      }
    }
  }
}

//clears previous position of the tetris block when in rotated position
function newPositionOrient() {
  if (rightKey || leftKey || upKey || dropping) {
    for (let i = 0; i <= 4; i++) {
      for (let j = 0; j <= blockOrientation.length; j++) {
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
  if (createBlock && !upKey) {
    console.log("yes");
    colorPick();
    //if statement for the creation of block when it is not in a rotated position
    if (rotateCount === 0) {
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
    //else statement if 2 if statements are false but the block is in a rotated position
    else {
      for (let i = 0; i < blockOrientation.length; i++) {
        if (i > 0) {
          yCor++;
        }
        for (let j = 0; j < blockOrientation[i].length; j++) {
          xCor++;
          if (blockOrientation[i][j] === 1) {
            grid[yCor][xCor] = blockColor;
          }
        }
        xCor = initialX;
      }
      yCor = initialY;
      createBlock = false;
      rightKey = false;
      leftKey = false;
    }
  }
  //if statement for the creation of rotated block, it creates the next rotation for the block when up key is pressed
  if (createBlock && upKey && block !== oBlock) {
    newPosition();
    console.log("works");
    rotation();
    colorPick();
    if (block === iBlock) {
      blockOrientation = iBlockList[rotateCount];
    }
    if (block === lBlock) {
      blockOrientation = lBlockList[rotateCount];
    }
    if (block === jBlock) {
      blockOrientation = jBlockList[rotateCount];
    }
    if (block === zBlock) {
      blockOrientation = zBlockList[rotateCount];
    }
    if (block === sBlock) {
      blockOrientation = sBlockList[rotateCount];
    }
    if (block === tBlock) {
      blockOrientation = tBlockList[rotateCount];
    }
    
    for (let i = 0; i < blockOrientation.length; i++) {
      if (i > 0) {
        yCor++;
      }
      for (let j = 0; j < blockOrientation[i].length; j++) {
        xCor++;
        if (blockOrientation[i][j] === 1) {
          grid[yCor][xCor] = blockColor;
        }
      }
      xCor = initialX;
    }
  }
  yCor = initialY;
  createBlock = false;
  rightKey = false;
  leftKey = false;
  upKey = false;
  downKey = false;
}

//keeps track of the rotations and when to rest the counter to 0
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
  if (rotateCount === 2 && (block === iBlock || block === zBlock || block === sBlock)) {
    rotateCount = 0;
  }
}

//respawns a block when there are no blocks in play
function respawnBlock() {
  yCor = 0; 
  xCor = 6;
  console.log("spawned");
  block = blockList[Math.floor(Math.random()*blockList.length)];
  dropping = true;
  dropTime = millis();
  timer = 1000;
  rotateCount = 0;
}

//this function creates a stagnant copy of the once falling block 
function stagnant() {
  let initialX = finalXcor;
  let initialY = finalYcor;
  colorPickPerma();
  console.log("perma");
  if (rotateCount === 0) {
    for (let i = 0; i < finalShape.length; i++) {
      if (i > 0) {
        finalYcor++;
      }
      for (let j = 0; j < finalShape[i].length; j++) {
        finalXcor++;
        if (finalShape[i][j] === 1) {
          grid[finalYcor][finalXcor] = permanentColor;
        }
      }
      finalXcor = initialX;
      finalYcor = initialY;
    }
    createBlock = false;
    rightKey = false;
    leftKey = false;
  }
  else if (rotateCount > 0 ) {
    for (let i = 0; i < finalOrientation.length; i++) {
      if (i > 0) {
        finalYcor++;
      }
      for (let j = 0; j < finalOrientation[i].length; j++) {
        finalXcor++;
        if (finalOrientation[i][j] === 1) {
          grid[finalYcor][finalXcor] = permanentColor;
        }
      }
      finalXcor = initialX;
    }
    finalYcor = initialY;
    createBlock = false;
    rightKey = false;
    leftKey = false;
  }
}



