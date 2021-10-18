/* Backspace String Compare
LeetCode Easy
Facebook, IBM, Nutanix

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:

Input: s = "a##c", t = "#a#c"
Output: true
Explanation: Both s and t become "c".

Example 4:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".

*/

// O(n) T | O(n) S
var backspaceCompare = function(s, t) {
  const finalS = getResult(s);
  const finalT = getResult(t);
  return finalS === finalT
};

var getResult = function(string){
  let stack = [];
  
  for (const char of string){
    if (char === '#' && stack.length > 0){
      stack.pop()
    } else if (char !== '#'){
      stack.push(char)
    }
  }
  
  return stack.join('');
}
