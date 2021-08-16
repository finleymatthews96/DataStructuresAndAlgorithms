/* Subsets
LeetCode Medium

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]

*/

// O(n * 2^n) T || O(n * 2^n) S -> this is the number of solutions multiplied by number of elements to keep for each subset
var subsets = function(nums, left = 0) {
  if (left === nums.length - 1) return [[], [nums[left]]];
  
  let result = subsets(nums, left + 1);
  let length = result.length;
  
  
  for (let i = 0; i < length; i++){
    result[result.length] = result[i].slice();
    result[result.length - 1].push(nums[left])
  }
  
  return result;
};

// O(N x 2^N) T || O(n) S -> the backtracking solution
var subsets = function(nums) {
  let result = [[]];
    
  function backtrack(first, current) {
    // we iterate over the indexes i from 'first' to the length
    //of the entire sequence 'nums'
    for (let i = first; i < nums.length; i++) {
        current.push(nums[i]);

        // use distructure operator to clone 'current' value and save to 'result'
        result.push([...current]);

        // generate all other subsets for the current subset.
        // increasing the position by one to avoid duplicates in 'result'
        backtrack(i + 1, current);

        // BACKTRACK.
        current.pop();
    }
}
    
    backtrack(0, []);
    return result
};
