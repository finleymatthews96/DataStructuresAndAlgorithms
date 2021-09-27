/* Trapping Rain Water
LeetCode Hard
Amazon, Goldman, Facebook, Google, Microsoft, Adobe, many more

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
*/

// O(n*m) T where m is maximum value present in input array | O(1) S - time limit exceeded on LeetCode
var trap = function(height) {
  let max = -Infinity;
  for (const num of height){
    max = Math.max(num, max);
  }
  
  let count = 0;
  
  for (let i=max; i>0; i--){
    let numInstances = 0;
    let firstInstance, lastInstance;
    
    for (let j=0; j<height.length; j++){
      if (height[j] >= i){
        if (!numInstances) firstInstance = j;
        lastInstance = j;
        numInstances++
      }
    }
    
    if (numInstances > 1){
      count += lastInstance - firstInstance - (numInstances - 1);
    }
  }
  
  return count;
};

// O(n^2) T | O(1) S
var trap = function(height) {
  let ans = 0;
  
  for (let i=0; i<height.length; i++){
    
    let leftMax = 0;
    for (let j=i; j >= 0; j--){
      leftMax = Math.max(leftMax, height[j])
    }
    
    let rightMax = 0;
    for (let j=i; j < height.length; j++){
      rightMax = Math.max(rightMax, height[j])
    }
    
    ans += Math.min(leftMax, rightMax) - height[i];
  }
  
  return ans;
};
