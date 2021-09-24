/* Permutations
LeetCode Medium
Amazon, Apple, Microsoft, LinkedIn, Bloomberg, Facebook, Google

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:

Input: nums = [1]
Output: [[1]]
*/

// # of permutations (n! / (n-k)!), or between O(n!) and O(n * n!) T | n! S
var permute = function(nums, i = 0) {
  if (i === nums.length) return [[]]
  if (i + 1 === nums.length) return [[nums[i]]]
  let result = [];
  
  for (let j = i; j < nums.length; j++){
    swap(nums, i, j);
    const current = permute(nums, i + 1);
    current.forEach(perm => {
      perm.unshift(nums[i]);
      result.push(perm)
    })
    swap(nums, i, j);
  }
  
  return result;
};

var swap = function(arr, i, j){
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
