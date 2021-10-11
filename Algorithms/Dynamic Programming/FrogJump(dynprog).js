/* Frog Jump
LeetCode Hard
FAANG, Oracle, Nutanix

A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not exist a stone. 
The frog can jump on a stone, but it must not jump into the water.

Given a list of stones' positions (in units) in sorted ascending order, determine if the frog can cross the river by landing on the 
last stone. Initially, the frog is on the first stone and assumes the first jump must be 1 unit.

If the frog's last jump was k units, its next jump must be either k - 1, k, or k + 1 units. The frog can only jump in the forward direction.

 

Example 1:

Input: stones = [0,1,3,5,6,8,12,17]
Output: true
Explanation: The frog can jump to the last stone by jumping 1 unit to the 2nd stone, then 2 units to the 3rd stone, then 2 units to 
the 4th stone, then 3 units to the 6th stone, 4 units to the 7th stone, and 5 units to the 8th stone.

Example 2:

Input: stones = [0,1,2,3,4,8,9,11]
Output: false
Explanation: There is no way to jump to the last stone as the gap between the 5th and 6th stone is too large.

*/

// O(3^n) T | O(n) S - recursive backtracking, time limit exceeded on leetcode
var canCross = function(stones, lastJump = 0, i = 0) {
  if (i === stones.length - 1) return true;
  if (i >= stones.length) return false;
  
  let possibleJumps = [];
  if (lastJump > 1) possibleJumps.push(lastJump - 1);
  if (lastJump > 0) possibleJumps.push(lastJump);
  possibleJumps.push(lastJump + 1);
  
  for (let j=0; j<possibleJumps.length; j++){
    let destination = stones[i] + possibleJumps[j]
    let stoneIndex = stones.indexOf(destination)
    if (stoneIndex >= 0 && canCross(stones, possibleJumps[j], stoneIndex)){
      return true;
    }
  }
  
  return false;
};

// O(n^2) T | O(n^2) S - dynamic programming
function canCross(stones) {
  let map = new Map();
  for (const stone of stones){
    map.set(stone, new Set())
  }
  map.get(stones[0]).add(0);
  
  for (let i=0; i<stones.length; i++){
    map.get(stones[i]).forEach(jump => {
      for (let step = jump - 1; step <= jump + 1; step++){
        if (step > 0 && map.has(stones[i] + step)){
          map.get(stones[i] + step).add(step)
        }
      }
    })
  }
  
  return map.get(stones[stones.length - 1]).size
}
