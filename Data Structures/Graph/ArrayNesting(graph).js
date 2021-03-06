/* Array Nesting

You are given an integer array nums of length n where nums is a permutation of the numbers in the range [0, n - 1].

You should build a set s[k] = {nums[k], nums[nums[k]], nums[nums[nums[k]]], ... } subjected to the following rule:

The first element in s[k] starts with the selection of the element nums[k] of index = k.
The next element in s[k] should be nums[nums[k]], and then nums[nums[nums[k]]], and so on.
We stop adding right before a duplicate element occurs in s[k].
Return the longest length of a set s[k].

 

Example 1:

Input: nums = [5,4,0,3,1,6,2]
Output: 4
Explanation: 
nums[0] = 5, nums[1] = 4, nums[2] = 0, nums[3] = 3, nums[4] = 1, nums[5] = 6, nums[6] = 2.
One of the longest sets s[k]:
s[0] = {nums[0], nums[5], nums[6], nums[2]} = {5, 6, 2, 0}
Example 2:

Input: nums = [0,1,2]
Output: 1
*/

// O(n^2) T | O(n) S - recursive DFS with no memoization
var arrayNesting = function(nums) {
  let longest = 0;
  
  for (let i=0; i<nums.length; i++){
    const current = DFS(nums, i, nums[i]);
    if (current > longest) longest = current;
  }
  
  return longest;
};

var DFS = function(nums, start, current){
  if (nums[start] === nums[current]) return 1;
  
  return DFS(nums, start, nums[current]) + 1
}

// O(n) T | O(n) S - make use of the fact that each index will be part of only one cycle, needs only be calculated once
var arrayNesting = function(nums) {
  let seen = Array(nums.length).fill(0);
  let longest = 0;
  
  for (let i=0; i<nums.length; i++){
    if (!seen[i]){
      seen[i] = 1;
      let current = nums[i];
      let count = 1;
      while (nums[current] !== nums[i]){
        seen[current] = 1
        current = nums[current];
        count++;
      }
      if (count > longest) longest = count;
    }
  }
  
  return longest;
};

// O(n) T | O(1) S, mutate input array to show what we've already seen
var arrayNesting = function(nums) {
  let longest = 0;
  
  for (let i=0; i<nums.length; i++){
    if (nums[i] <= nums.length){
      let current = nums[i];
      let count = 0;
      while (nums[current] <= nums.length){
        const temp = current;
        current = nums[current];
        count++;
        nums[temp] = Infinity;
      }
      if (count > longest) longest = count;
    }
  }
  
  return longest;
};
