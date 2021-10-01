/*
Hippo Insurance Code Challenge

Inputs: A rectangular grid, full of numbers ranging from 0-9. A row and a column (which will always correspond
to a valid address of a point on the grid).

Game: You remove from the grid all adjacent cells that are equal in value to your starting cell. 
Adjacent means up, down, left, right.
Output: Return the number of cells you should remove.

grid: [
[4, 4, 4, 4]
[5, 5, 5, 4]
[2, 5, 7, 5]
]

Example 1: Above grid, row = 0, col = 0
return: 5 (would remove the 5 adjacent 4's including the start point)

Example 2: Above grid, row = 1, col = 1
return: 4 (would remove 5's at [1, 0], [1, 1], [1, 2], and [2, 1] but NOT the one at [2, 4])

Example 3: Above grid, row = 2, col = 2
return: 1 (would remove only the starting 7)

*/

// O(m*n) T | O(m*n) S DFS using a stack
function disappear(grid, row, col) {
  let count = 0;
  const num = grid[row][col];
  const stack = [[row, col]];
  const seen = Array(grid.length).fill(false).map((boolean) => Array(grid[0].length).fill(false));
  
  while (stack.length > 0){
    let [x, y] = stack.pop();
    if (!seen[x][y]){
      count++;
      seen[x][y] = true;
      if (x > 0 && grid[x-1][y] === num && !seen[x-1][y]) stack.push([x-1, y]);
      if (y > 0 && grid[x][y-1] === num && !seen[x][y-1]) stack.push([x, y-1]);
      if (x < grid.length - 1 && grid[x+1][y] === num && !seen[x+1][y]) stack.push([x+1, y]);
      if (y < grid[0].length - 1 && grid[x][y+1] === num && !seen[x][y+1]) stack.push([x, y+1])
    }
  }
  
  return count;
}
