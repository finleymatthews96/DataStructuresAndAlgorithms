/* Number of Islands
Leetcode Medium

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

// O(m x n) T || O(m x n) S
var numIslands = function(grid) {
  let count = 0;
  
  for (let i=0; i<grid.length; i++){
    for (let j=0; j<grid[i].length; j++){
      if (grid[i][j] == '1'){
        let stack = [[i, j]]
        while (stack.length > 0){
          const [x, y] = stack.pop();
          if (x > 0 && grid[x-1][y] == '1') stack.push([x-1, y])
          if (y > 0 && grid[x][y-1] == '1') stack.push([x, y-1])
          if (x < grid.length - 1 && grid[x+1][y] == '1') stack.push([x+1, y])
          if (y < grid[i].length - 1 && grid[x][y+1] == '1') stack.push([x, y+1])
          grid[x][y] = '0';
        }
        count++;
      }
    }
  }
  
  return count;
};
