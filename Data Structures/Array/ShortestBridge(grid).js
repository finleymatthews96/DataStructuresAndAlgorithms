/* Shortest Bridge
LeetCode Medium
Facebook, Apple, Nutanix

In a given 2D binary array grid, there are two islands.  (An island is a 4-directionally connected group of 1s not connected to any other 1s.)

Now, we may change 0s to 1s so as to connect the two islands together to form 1 island.

Return the smallest number of 0s that must be flipped.  (It is guaranteed that the answer is at least 1.)

Example 1:

Input: grid = [[0,1],[1,0]]
Output: 1

Example 2:

Input: grid = [[0,1,0],[0,0,0],[0,0,1]]
Output: 2

Example 3:

Input: grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Output: 1

*/

// O((m * n) ^ 2) T | O(m * n) S - the brute force approach
var shortestBridge = function(grid) {
  let island1, island2;
  
  for (let i=0; i<grid.length; i++){
    for (let j=0; j<grid[0].length; j++){
      if (grid[i][j] === 1){
        if (!island1){
          island1 = identifyIsland(grid, i, j)
        } else {
          island2 = identifyIsland(grid, i, j)
          break;
        }
      }
    }
  }
  
  let shortest = Infinity;
  for (let i=0; i<island1.length; i++){
    for (let j=0; j<island2.length; j++){
      const current = Math.abs(island1[i][0] - island2[j][0]) + Math.abs(island1[i][1] - island2[j][1]) - 1;
      shortest = Math.min(shortest, current)
    }
  }
  
  return shortest;
};

var identifyIsland = function(grid, row, col){
  let addresses = [];
  let stack = [[row, col]];
  
  while (stack.length > 0){
    let [x, y] = stack.pop();
    if (grid[x][y] === 0) continue;
    grid[x][y] = 0;
    
    if (x > 0 && grid[x-1][y] == 1) stack.push([x-1, y])
    if (y > 0 && grid[x][y-1] == 1) stack.push([x, y-1])
    if (x < grid.length - 1 && grid[x+1][y] == 1) stack.push([x+1, y])
    if (y < grid[0].length - 1 && grid[x][y+1] == 1) stack.push([x, y+1])
    
    addresses.push([x, y]);
  }
  
  return addresses;
}
