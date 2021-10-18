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

// O(n) T | O(n) S - using a stack to simulate keystrokes
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

// O(n) | O(1) S - questionable constant space, but iterate from the end
var backspaceCompare = function(s, t) {
  let sWord = buildWord(s)
  let tWord = buildWord(t)
  return sWord === tWord
};

var buildWord = function(s){
  let count = 0;
  let sWord = ''
  for (let i=s.length - 1; i>=0; i--){
    if (s[i] === '#') {
      count++;
    } else {
      if (count > 0){
        count--
      } else {
        sWord += s[i];
      }
    }
  }
  return sWord;
}
