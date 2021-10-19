/* Daily Temperatures
LeetCode Medium
Many a company

Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]

*/

// O(n) T | O(n) S - straightforward stack implementation
var dailyTemperatures = function(temperatures) {
  let stack = [];
  
  for (let i=0; i<temperatures.length; i++){
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]]){
      let temp = stack.pop();
      temperatures[temp] = i - temp;
    }
    stack.push(i);
  }
  
  stack.forEach((day) => temperatures[day] = 0);
  
  return temperatures;
};
