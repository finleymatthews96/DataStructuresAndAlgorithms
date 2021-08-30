/* Number of Provinces
LeetCode Medium
Tags: Amazon x 55, Two Sigma x 14

There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2

Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
*/

// DFS -> iterate over matrix with added while loop
// O(n^2) T | O(n) S
var findCircleNum = function(isConnected) {
  const isAccountedFor = Array(isConnected.length).fill(0);
  let count = 0;
  
  for (let i=0; i<isConnected.length; i++){
    if (isAccountedFor[i] === 0){
      count++;
      let stack = [i]
      while (stack.length > 0){
        let currentCity = stack.pop();
        let adjacencies = isConnected[currentCity]
        isAccountedFor[currentCity] = 1;
        for (let j=0; j<adjacencies.length; j++){
          if (i !== j && adjacencies[j] === 1 && isAccountedFor[j] === 0){
            stack.push(j);
          }
        }
      }
    }
  }
  
  return count;
};
