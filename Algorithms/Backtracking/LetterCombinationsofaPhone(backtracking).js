/* Letter Combinations of a Phone Number
LeetCode Medium

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
*/

// recursive backtracking
// O(4^n * n) T, O(n) S, where N is the length of digits, and 4 corresponds with the longest length within the hashmap
var letterCombinations = function(digits, i = 0) {
  if (i === digits.length) return []
  
  let result = [];
  let map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }
  
  for (let j=0; j < map[digits[i]].length; j++){
    let newResult = letterCombinations(digits, i + 1);
    newResult = newResult.map((combo) => map[digits[i]][j] + combo);
    newResult.forEach((combo) => result.push(combo));
    if (newResult.length === 0) result.push(map[digits[i]][j])
  }
  
  return result;
};
