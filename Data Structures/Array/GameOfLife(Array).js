/* Game of Life
LeetCode Medium

Amazon, Dropbox, Square, more

According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised 
by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) 
or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using 
the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, 
where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]

*/

// O(m*n) T | O(m*n) S
var gameOfLife = function(board) {
  const outer = board.length
  const inner = board[0].length;
  const countBoard = [...Array(outer)].map(() => Array(inner).fill(0));
    
  for (let i = 0; i < outer; i++) {
    for (let j = 0; j < inner; j++) {
      countBoard[i][j] = getNeighbors(board, i, j);
    }
  }
    
  for (let i = 0; i < outer; i++) {
    for (let j = 0; j < inner; j++) {
      const neighbors = countBoard[i][j];
      if(neighbors === 3) board[i][j] = 1;
      if (board[i][j] && (neighbors < 2 || neighbors > 3)) board[i][j] = 0
    }
  }
};

function getNeighbors(board, i, j) {
  let total = 0;
        
  for (let r = i-1; r <= i + 1; r++) {
    for (let c = j-1; c <= j + 1; c++) {
      if (board[r] && board[r][c]) total++;
    }
  }
  return total - board[i][j];
}

// O(m*n) T | O(1) S - use dummy cell values to not need a reference matrix
let gameOfLife = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++){
      let liveCells = aliveNeighbors(board, i, j)
      if (board[i][j] === 1 && (liveCells < 2 || liveCells > 3)) {
          board[i][j] = 2
        }
      if (board[i][j] === 0 && liveCells === 3) {
        board[i][j] = 3
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++){
      board[i][j] %= 2
    }
  }
};

let aliveNeighbors = (board, i, j) => {
  let count = 0
  let indexes = [[1, -1], [1, 0], [1, 1], [0, -1], [0, 1], [-1, -1], [-1, 0], [-1, 1]]
  for (let index of indexes) {
    if (index[0] + i < 0 || index[0] + i > board.length - 1 ||
    index[1] + j < 0 || index[1] + j > board[0].length - 1) continue
    if (board[index[0] + i][index[1] + j] === 1 ||
    board[index[0] + i][index[1] + j] === 2) count++
  }
  return count
}
