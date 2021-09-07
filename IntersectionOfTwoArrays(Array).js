/* Intersection of Two Arrays
LeetCode Easy

Amazon, LinkedIn, Google, Bloomberg

Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must be unique and you may return the result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

*/

// O(n1 + n2) T | O(n1) S
var intersection = function(nums1, nums2) {
  let memo1 = buildMemo(nums1)
  let result = [];
  
  for (const num of nums2){
    if (memo1[num]){
      result.push(num);
      delete memo1[num]
    }
  }
  
  return result;
};
  
var buildMemo = function(arr){
  let memo = {};
  
  for (const num of arr){
    if (!memo[num]) memo[num] = true;
  }
  
  return memo;
}
