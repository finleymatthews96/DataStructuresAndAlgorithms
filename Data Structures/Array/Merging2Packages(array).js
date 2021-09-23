/* Merging 2 Packages
Pramp Easy

Given a package with a weight limit limit and an array arr of item weights, implement a function getIndicesOfItemWeights 
that finds two items whose sum of weights equals the weight limit limit. Your function should return a pair [i, j] of the 
indices of the item weights, ordered such that i > j. If such a pair doesn’t exist, return an empty array.

Analyze the time and space complexities of your solution.

Example:

input:  arr = [4, 6, 10, 15, 16],  lim = 21
*/

// O(n) T | O(n) S
function getIndicesOfItemWeights(arr, limit) {
  let memo = {}
  
  for (let i=0; i<arr.length; i++){
    let complement = limit - arr[i]
    if (memo[complement] === undefined){
      memo[arr[i]] = i
    } else {
      return [i, memo[complement]]
    }
  }
  
  return [];
}
