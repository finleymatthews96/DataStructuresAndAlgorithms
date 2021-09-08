/* Search in Rotated Sorted Array
LeetCode Medium
Many, many companies

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1

*/

// O(logn) T | O(1) S - binary search to find pivot, binary search to find target within sorted array
var search = function(nums, target) {
  const pivot = findPivot(nums);
  
  if (pivot === 0 || target < nums[0]){
    return binarySearch(nums, pivot, nums.length - 1, target)
  }
  
  return binarySearch(nums, 0, pivot - 1, target)
};

var findPivot = function(arr){
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right){
    const mid = Math.floor((left + right)/2);
    if (arr[mid] > arr[mid + 1]) return mid + 1
    if (mid == 0 || arr[mid] < arr[mid-1]) return mid;
    if (arr[mid] > arr[0]){
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  
  return 0;
}

var binarySearch = function(arr, left, right, target){
  while (left <= right){
    const mid = Math.floor((left + right)/2)
    if (arr[mid] === target) return mid;
    if (arr[mid] > target){
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  
  return -1;
}
