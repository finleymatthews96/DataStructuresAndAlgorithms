/* House Robber
LeetCode Medium

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, 
the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and 
it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can 
rob tonight without alerting the police.

Input: nums = [1,2,3,1]
Output: 4
*/

var rob = function(nums) {
  for (let i=1; i<nums.length; i++){
    let sumNum = 0;
    if (i > 1) sumNum = nums[i] + nums[i-2]
    nums[i] = Math.max(nums[i-1], sumNum, nums[i])
  }
  return nums[nums.length - 1];
};
