/* Group Anagrams
LeetCode Medium
Amazon, Microsoft, Goldman, eBay, Two Sigma

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

*/

// O(n s log s) T | O(n * s) S where n is length of array, s is length of longest string
var groupAnagrams = function(strs) {
  let memo = {};
  
  for (let i=0; i<strs.length; i++){
    const sorted = strs[i].split('').sort().join('');
    if (!memo[sorted]){
      memo[sorted] = [strs[i]];
    } else {
      memo[sorted].push(strs[i]);
    }
  }
  
  let result = [];
  Object.keys(memo).forEach((anagram) => {
    result.push(memo[anagram])
  })
  
  return result;
};
