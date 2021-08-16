/* Majority Element
LeetCode Easy

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

// // O(n) T || O(n) S with memoization
var majorityElement = function(nums) {
  let memo = {};
  
  for (let i=0; i<nums.length; i++){
    if (memo[nums[i]]){
      memo[nums[i]] += 1
    } else {
      memo[nums[i]] = 1
    }
    if (memo[nums[i]] > nums.length / 2) return nums[i];
  }
};

// // O(nlogn) T || O(1) S with sorting
var majorityElement = function(nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)]
};

// O(n) T || O(1) S with Boyer-Moore Voting Algorithm - THIS GOES CRAZY
var majorityElement = function(nums) {
  let count = 0;
  let candidate = 0;
  
  for (let i=0; i<nums.length; i++){
    if (count == 0){
      candidate = nums[i];
    }
    count += (nums[i] == candidate) ? 1 : -1
  }
  
  return candidate;
}

// CAN ALSO DO DIVIDE AND CONQUER
