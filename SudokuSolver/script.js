const grid = document.getElementById("sudoku");
let solution = [];

// Create grid once
for (let i = 0; i < 81; i++) {
  const cell = document.createElement("input");
  cell.type = "number";
  cell.min = 1;
  cell.max = 9;
  grid.appendChild(cell);
}

// ---------- SUDOKU LOGIC ----------

function isValid(board, r, c, num) {
  for (let x = 0; x < 9; x++)
    if (board[r][x] === num || board[x][c] === num) return false;

  let sr = r - r % 3, sc = c - c % 3;
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      if (board[sr+i][sc+j] === num) return false;

  return true;
}

function solve(board) {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, r, c, num)) {
            board[r][c] = num;
            if (solve(board)) return true;
            board[r][c] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

// ---------- GENERATOR ----------

// Generate empty board
function emptyBoard() {
  return Array.from({ length: 9 }, () => Array(9).fill(0));
}

// Fill diagonal 3x3 boxes (random)
function fillDiagonal(board) {
  for (let i = 0; i < 9; i += 3) {
    let nums = shuffle([1,2,3,4,5,6,7,8,9]);
    let k = 0;
    for (let r = 0; r < 3; r++)
      for (let c = 0; c < 3; c++)
        board[i+r][i+c] = nums[k++];
  }
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function removeCells(board, count = 45) {
  while (count > 0) {
    let r = Math.floor(Math.random() * 9);
    let c = Math.floor(Math.random() * 9);
    if (board[r][c] !== 0) {
      board[r][c] = 0;
      count--;
    }
  }
}

// ---------- UI FUNCTIONS ----------

function loadBoard(board) {
  const cells = document.querySelectorAll("input");
  cells.forEach((cell, i) => {
    let val = board[Math.floor(i/9)][i%9];
    cell.value = val === 0 ? "" : val;
    cell.disabled = val !== 0;
    cell.className = val !== 0 ? "fixed" : "";
  });
}

function startGame() {
  let board = emptyBoard();
  fillDiagonal(board);
  solve(board);               // full solution
  solution = JSON.parse(JSON.stringify(board));
  removeCells(board, 45);     // difficulty (40–55)
  loadBoard(board);
}

function solveSudoku() {
  loadBoard(solution);
}

function clearBoard() {
  document.querySelectorAll("input").forEach(cell => {
    cell.value = "";
    cell.disabled = false;
    cell.className = "";
  });
}
