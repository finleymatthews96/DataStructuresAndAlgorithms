/* Sort Colors
LeetCode Medium

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]

*/

// O(n) T || O(1) S
var sortColors = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  
  for (let i=left; i<=right; i++){
    if (nums[i] === 2){
      swap(i, right, nums);
      right--;
      i--;
    } else if (nums[i] === 0){
      swap(i, left, nums);
      left++;

    }
  }
  
  return nums;
};

var swap = function (idx1, idx2, arr){
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
