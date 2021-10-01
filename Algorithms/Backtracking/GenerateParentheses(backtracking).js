/* Generate Parentheses
LeetCode Medium
Amazon, Facebook, Microsoft, Bloomberg, more

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]

*/

// O(
var generateParenthesis = function(n, open = n, close = n) {
  if (close === 0) return [''];
  const result = [];
  
  let selectOpen, selectClose;
  if (open !== 0){
    selectOpen = generateParenthesis(n, open - 1, close);
    selectOpen = selectOpen.map((combo) => '(' + combo);
    selectOpen.forEach((combo) => result.push(combo));
  }
  if (open < close){
    selectClose = generateParenthesis(n, open, close - 1)
    selectClose = selectClose.map((combo) => ')' + combo);
    selectClose.forEach((combo) => result.push(combo));
  }
  
  return result;
};
