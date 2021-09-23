/* Find First and Last Position of Element in Sorted Array
LeetCode Medium
Facebook loves this question

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
*/

// O(logn) T | O(1) S
var searchRange = function(nums, target) {
  let result = [-1, -1];
  result[0] = findInstance(nums, target, 'first', 0);
  result[1] = findInstance(nums, target, 'last', result[0]);
  return result;
};

function findInstance(nums, target, which, left){
  if (left === -1) return -1;
  let right = nums.length - 1;
  let midPoint = Math.floor((left + right)/2)
  
  while (left <= right){
    if (which === 'first'){
      if (target === nums[midPoint] && (midPoint === 0 || target !== nums[midPoint-1])){
        return midPoint;
      } else if (target === nums[midPoint]){
        right = midPoint;
        midPoint = Math.floor((left + right)/2)
        continue;
      }
    } else {
      if (target === nums[midPoint] && (midPoint + 1 === nums.length || target !== nums[midPoint+1])){
        return midPoint;
      } else if (target === nums[midPoint]){
        left = midPoint
        midPoint = Math.ceil((left + right)/2);
        continue;
      }
    }
    
    if (target > nums[midPoint]){
      left = midPoint + 1
    } else {
      right = midPoint - 1;
    }
    midPoint = Math.floor((left + right)/2)
  }
  
  return -1;
}
