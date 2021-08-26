/* Jump Game
LeetCode Medium

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

*/

// Backtracking Recursion with Memoization
// O(2^n) T || O(n) S
var canJump = function(nums, i = 0, memo = {}) {
  if (i >= nums.length - 1) return true;
  
  for (let j = 1; j <= nums[i]; j++){
    if (memo[i + j] === undefined){
      memo[i + j] = canJump(nums, i + j, memo)
    }
    if (memo[i + j]) return true;
  }
  
  return false;
};

// Dynamic Programming Bottom Up
// O(n^2) T | O(1) S
var canJump = function(nums){
  nums[nums.length - 1] = true;
  
  for (let i = nums.length - 1; i >= 0; i--){
    for (let j = i + 1; j <= i + nums[i]; j++){
      if (nums[j] === true){
        nums[i] = true;
        break;
      }
    }
  }
  
  if (nums[0] === true) return true;
  return false;
}

// Greedy
// O(n) T | O(1) S
var canJump = function(nums){
  let leftMost = nums.length - 1;
  
  for (let i = nums.length - 1; i >= 0; i--){
    if (i + nums[i] >= leftMost) leftMost = i
  }
  
  return leftMost === 0
}
