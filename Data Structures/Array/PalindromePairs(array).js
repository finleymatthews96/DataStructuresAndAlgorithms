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

// O(n^2 * w) T | O(n^2 + w) S where w = word length, BRUTE FORCE
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

// O(w^2 * n) T | O((k + n)^2) S - hash map
var palindromePairs = function(words) {
  let dict = {};
  for (const word in words){
    dict[words[word]] = word;
  }
  
  let result = [];
  
  for (let i=0; i<words.length; i++){
    const word = words[i];
    const reversedWord = words[i].split('').reverse().join('');
    
    // case 1 - words have same length
    if (dict[reversedWord] !== undefined && dict[reversedWord] != i){
      result.push([i, dict[reversedWord]])
    }
    
    // case 2 - word 1 is shorter
    const suffixes = allValidSuffixes(words[i]);
    for (const suffix of suffixes){
      const reversedSuffix = suffix.split('').reverse().join('');
      if (dict[reversedSuffix] !== undefined){
        result.push([dict[reversedSuffix], i])
      }
    }
    
    // case 3 - word 2 is shorter
    const prefixes = allValidPrefixes(words[i]);
    for (const prefix of prefixes){
      const reversedPrefix = prefix.split('').reverse().join('');
      if (dict[reversedPrefix] !== undefined){
        result.push([i, dict[reversedPrefix]])
      }
    }
  }
  
  return result;
}

var allValidPrefixes = function(word){
  let prefixes = [];
  
  for (let i=0; i<word.length; i++){
    if (isPalindrome(word, i, word.length - 1)){
      prefixes.push(word.slice(0, i))
    }
  }
  
  return prefixes;
}

var allValidSuffixes = function(word){
  let suffixes = [];
  
  for (let i=0; i<word.length; i++){
    if (isPalindrome(word, 0, i)){
      suffixes.push(word.slice(i+1));
    }
  }
  
  return suffixes;
}

var isPalindrome = function(word, left, right){
  while (left < right){
    if (word[left] !== word[right]) return false;
    left++;
    right--;
  }
  
  return true;
}
