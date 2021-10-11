/* Jump Game II
LeetCode Medium
Amazon, Nutanix

Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: nums = [2,3,0,1,4]
Output: 2
*/

// O(n) T | O(1) S
var jump = function(nums) {
  let jumps = 0;
  
  for (let i=0; i<nums.length; i++){
    if (i >= nums.length - 1) break;
    jumps++;
    if (i + nums[i] >= nums.length - 1) break;
    
    let bestNextJump = 0;
    let bestLandingSpot = 0;
    
    for (let j=i+1; j <= i + nums[i]; j++){
      const nextDest = nums[j] + j;
      if (nextDest > bestNextJump){
        bestNextJump = nextDest;
        bestLandingSpot = j;
      }
    }
  
    i = bestLandingSpot - 1;
  }
  
  return jumps;
};
