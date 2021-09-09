/* Basic Calculator
LeetCode Hard
Microsoft, Facebook, Amazon, more

Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 

Example 1:

Input: s = "1 + 1"
Output: 2
Example 2:

Input: s = " 2-1 + 2 "
Output: 3
Example 3:

Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23

*/

// O(n) T | O(n) S
var calculate = function(s) {
  let result = 0;
  let sign = 1;
  let stack = [];
  let opStack = [];
  
  for (let i=0; i < s.length; i++){
    if (s[i] === ' ') continue;
    if (s[i] === '+'){
      sign = 1;
    } else if (s[i] === '-'){
      sign = -1;
    } else if (s[i] >= '0' && s[i] <= '9'){
      let num = s[i];
      while (i < s.length - 1 && s[i+1] >= '0' && s[i+1] <= '9'){
        num += s[i+1];
        i++;
      }
      result += sign * parseInt(num);
    } else if (s[i] === '('){
      stack.push(result);
      result = 0;
      opStack.push(sign);
      sign = 1;
    } else if (s[i] === ')'){
      result = opStack.pop() * result + stack.pop();
      sign = 1;
    }
  }
  
  return result;
};
