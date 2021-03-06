/* 3Sum
LeetCode Medium

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []

*/

// sorting solution
// O(n^2) T | O(log n) S (besides answer), depending on sorting algorithm's space
var threeSum = function(nums) {
  let result = [];
  nums.sort((a, b) => a - b)
  
  for (let i=0; i<nums.length - 2; i++){
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right){
      if (nums[left] + nums[right] + nums[i] === 0){
        result.push([nums[i], nums[left], nums[right]])
        while (nums[left+1] === nums[left]) left++;
        while (nums[right-1] === nums[right]) right--;
        left++;
        right--;
      } else if (nums[left] + nums[right] + nums[i] > 0){
        right--;
      } else {
        left++;
      }
      while (nums[i+1] === nums[i]) i++;
    }
    
  }
  
  return result;
};

// hash set with sorted array
// O(n^2) T | O(n) S
var threeSum = function(nums) {
  let map = {}
  let diff = 0;
  let result = [];
  
  nums.sort((a,b) => a-b);
  
  for (let i=0; i < nums.length; i++) {
    map[nums[i]] = i;
  } 
   
  for (let i = 0; i < nums.length; i++) {
    if (i != 0 && nums[i] == nums[i-1]) continue;
    for (let j = i+1; j < nums.length; j++) {
      if (j != i + 1 && nums[j] == nums[j - 1]) continue;
      diff = 0 - (nums[i] + nums[j]);
      if (map[diff] && map[diff] > j) {
        result.push([nums[i], nums[j], diff]);
      }
    }
  }
  
  return result;
};
