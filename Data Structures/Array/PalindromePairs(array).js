/* Palindrome Pairs
LeetCode Hard
Airbnb, Nutanix, Square

Given a list of unique words, return all the pairs of the distinct indices (i, j) in the given list, so that the concatenation of the two words words[i] + words[j] is a palindrome.

 

Example 1:

Input: words = ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]]
Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]

Example 2:

Input: words = ["bat","tab","cat"]
Output: [[0,1],[1,0]]
Explanation: The palindromes are ["battab","tabbat"]

Example 3:

Input: words = ["a",""]
Output: [[0,1],[1,0]]

*/

// O(n^2 * w) T | O(n * w) S where w = word length, BRUTE FORCE
var palindromePairs = function(words) {
  let result = [];
  
  for (let i=0; i<words.length; i++){
    for (let j=0; j<words.length; j++){
      if (j === i) continue;
      if (isPalindrome(words[i], words[j])){
        result.push([i, j])
      }
    }
  }
  
  return result;
};

var isPalindrome = function(word1, word2){
  let word = word1 + word2;
  let left = 0;
  let right = word.length - 1;
  
  while (left < right){
    if (word[left] !== word[right]) return false;
    left++;
    right--;
  }
  
  return true;
}
