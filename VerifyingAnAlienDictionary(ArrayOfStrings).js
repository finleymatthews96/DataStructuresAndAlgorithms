/*
Leetcode Easy (very hard easy tho imo)

In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. 
The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, 
return true if and only if the given words are sorted lexicographicaly in this alien language.

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) 
According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the 
blank character which is less than any other character (More info).
*/

// O(n) T || O(1} S where n = total number of letters in the array of words
var isAlienSorted = function(words, order) {
  let lastIndex = -1;
  
  for (let i=0; i<words.length; i++){
    let newIndex = order.indexOf(words[i][0])
    
    if (newIndex > lastIndex){
      lastIndex = newIndex
    } else if (newIndex < lastIndex){
      return false;
    } else {     
      for (let j=1; j<Math.max(words[i-1].length, words[i].length); j++){ 
        if (!words[i][j] && !!words[i-1][j]) return false;
        
        if (order.indexOf(words[i - 1][j]) > order.indexOf(words[i][j])){
          return false;
        } else if (order.indexOf(words[i - 1][j]) < order.indexOf(words[i][j])){
          break;
        }   
      }
    }
  }
  
  return true;
};
