/* Combination Sum II
LeetCode Medium
Facebook, Amazon, Ebay, Microsoft, Nutanix

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]

*/

// O(2^n) T | O(n) S - backtracking with index
function combinationSum2(candidates, target) {
    let res = [];
    let prefix = [];

    candidates.sort((a, b) => a - b);
    search(0, target);
    return res;

    function search(idx, rest) {
        if (rest === 0 && idx === candidates.length) return res.push(prefix.slice());
        if (rest < 0 || idx === candidates.length) return

        prefix.push(candidates[idx]);
      
        search(idx + 1, rest - candidates[idx]);
        
        prefix.pop();
        if (prefix[prefix.length - 1] !== candidates[idx]) search(idx + 1, rest);
    }
}
