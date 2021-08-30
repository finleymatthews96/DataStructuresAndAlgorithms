/* Longest String Chain
LeetCode Medium
Companies: Google, Two Sigma

You are given an array of words where each word consists of lowercase English letters.

wordA is a predecessor of wordB if and only if we can insert exactly one letter anywhere in wordA without changing the order of the other characters to make it equal to wordB.

For example, "abc" is a predecessor of "abac", while "cba" is not a predecessor of "bcad".
A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is a predecessor of word2, word2 is a predecessor of word3, and so on. A single word is trivially a word chain with k == 1.

Return the length of the longest possible word chain with words chosen from the given list of words.

 

Example 1:

Input: words = ["a","b","ba","bca","bda","bdca"]
Output: 4
Explanation: One of the longest word chains is ["a","ba","bda","bdca"].
Example 2:

Input: words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
Output: 5
Explanation: All the words can be put in a word chain ["xb", "xbc", "cxbc", "pcxbc", "pcxbcf"].
Example 3:

Input: words = ["abcd","dbqca"]
Output: 1
Explanation: The trivial word chain ["abcd"] is one of the longest word chains.
["abcd","dbqca"] is not a valid word chain because the ordering of the letters is changed.

*/

// Recursion with memoization
// O(n^2 * m) T || O(n) S where n = length of array, m = longest word in array
var longestStrChain = function(words) {
  let memo = {};
  let longest = 0;
  words.sort((a,b) => b.length - a.length);
  
  for (let i=0; i<words.length; i++){
    if (!memo[i]) memo[i] = 1 + longestPossible(words, i, memo);
    if (memo[i] > longest) longest = memo[i];
  }
  
  return longest;
};

var longestPossible = function(words, i, memo){
  let current = 0;
  
  for (let j=i+1; j<words.length; j++){
    if (isPredecessor(words[j], words[i])){
      if (!memo[j]) memo[j] = 1 + longestPossible(words, j, memo)
      if (memo[j] > current) current = memo[j];
    }
  }
  
  return current;
}

var isPredecessor = function (predecessor, successor){
  if (successor.length - 1 !== predecessor.length) return false;
  
  let successorIdx = 0;
  for (let i=0; i < predecessor.length; i++){
    while (predecessor[i] !== successor[successorIdx] && successorIdx < successor.length){
      successorIdx++;
    }
    if (predecessor[i] !== successor[successorIdx]) return false;
    successorIdx++;
  }
  
  return true;
}

// dynamic programming with reference array
// O(n^2 * m) T | O(n) S
var longestStrChain = function(words) {
  let stepsToGetHere = Array(words.length).fill(0);
  let longest = 0;
  words.sort((a, b) => a.length - b.length)
  
  for (let i=0; i<words.length; i++){
    if (longest === 0) longest = 1;
    let currentCount = stepsToGetHere[i] || 1;
    for (let j = i+1; j<words.length; j++){
      if (isPredecessor(words[i], words[j])){
        stepsToGetHere[j] = Math.max(stepsToGetHere[j], currentCount + 1)
        if (stepsToGetHere[j] > longest) longest = stepsToGetHere[j]
      }
    }
  }

  return longest;
}

var isPredecessor = function (predecessor, successor){
  if (successor.length - 1 !== predecessor.length) return false;
  
  let successorIdx = 0;
  for (let i=0; i < predecessor.length; i++){
    while (predecessor[i] !== successor[successorIdx] && successorIdx < successor.length){
      successorIdx++;
    }
    if (predecessor[i] !== successor[successorIdx]) return false;
    successorIdx++;
  }
  
  return true;
}
