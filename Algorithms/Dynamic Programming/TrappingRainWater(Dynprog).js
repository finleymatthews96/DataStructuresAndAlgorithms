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

// O(n) T | O(n) S
var trap = function(height) {
  let leftMax = Array(height.length + 1).fill(0);
  let rightMax = Array(height.length + 1).fill(0);
  const last = rightMax.length - 1;
  
  for (let i=1; i<leftMax.length; i++){
    leftMax[i] = Math.max(leftMax[i-1], height[i-1]);
    rightMax[last - i] = Math.max(rightMax[last - i + 1], height[last - i]);
  }
  
  let ans = 0;
  for (let i=1; i<leftMax.length; i++){
    ans += Math.min(leftMax[i], rightMax[i-1]) - height[i-1];
  }
  
  return ans;
};

// O(n) T | O(n) S - using a stack
var trap = function(height) {
  let stack = [];
  let ans = 0;
  
  for (let i=0; i<height.length; i++){
    while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]){
      const top = stack.pop()
      if (stack.length === 0) break;
      const newTop = stack[stack.length - 1]
      const distance = i - newTop - 1;
      const boundedHeight = Math.min(height[i], height[newTop]) - height[top];
      ans += distance * boundedHeight;
    }
    stack.push(i);
  }
  
  return ans;
};

// O(n) T | O(1) S - two pointer solution
var trap = function(height) {
  let left = 0;
  let right = height.length - 1;
  
  let leftMax = 0;
  let rightMax = 0;
  
  let ans = 0;
  
  while (left < right){
    if (height[left] < height[right]){
      if (height[left] >= leftMax){
        leftMax = height[left];
      } else {
        ans += leftMax - height[left];
      }
      left++;
    } else if (height[left] >= height[right]) {
      if (height[right] >= rightMax){
        rightMax = height[right];
      } else {
        ans += rightMax - height[right];
      }
      right--;
    }
  }
  
  return ans;
};
