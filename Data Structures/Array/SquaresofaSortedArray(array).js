/* Square of a Sorted Array
LeetCode Easy
Facebook, several others, Nutanix

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

*/

// O(n) T | O(n) S 
var sortedSquares = function(nums) {
  let result = Array(nums.length).fill(0);
  let left = 0;
  let right = nums.length - 1;
  let insert = nums.length - 1;
  
  while (insert >= 0){
    const leftSquare = nums[left] * nums[left]
    const rightSquare = nums[right] * nums[right];
    if (leftSquare > rightSquare){
      result[insert] = leftSquare
      left++;
    } else {
      result[insert] = rightSquare;
      right--;
    }
    insert--;
  }
  
  return result;
};
