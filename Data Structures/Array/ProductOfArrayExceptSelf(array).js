/* Product of Array Except Self
LeetCode Medium
Facebook, Amazon, others, Nutanix

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/

// O(n) T | O(n) S - bidirectional dynamic programming
var productExceptSelf = function(nums) {
  let fromLeft = Array(nums.length).fill(1);
  let fromRight = Array(nums.length).fill(1);
  let result = Array(nums.length).fill(1);
  
  for (let i=1; i<nums.length; i++){
    fromLeft[i] = fromLeft[i-1] * nums[i-1]
  }
  
  for (let i=nums.length - 2; i >= 0; i--){
    fromRight[i] = fromRight[i+1] * nums[i+1]
  }
  
  for (let i=0; i<result.length; i++){
    result[i] = fromLeft[i] * fromRight[i]
  }
  
  return result;
};
