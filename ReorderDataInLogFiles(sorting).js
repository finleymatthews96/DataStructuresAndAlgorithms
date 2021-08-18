/* Reorder Data in Log Files 
LeetCode Easy -> I have no clue how??

You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

There are two types of logs:

Letter-logs: All words (except the identifier) consist of lowercase English letters.
Digit-logs: All words (except the identifier) consist of digits.
Reorder these logs so that:

The letter-logs come before all digit-logs.
The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
The digit-logs maintain their relative ordering.
Return the final order of the logs.

 

Example 1:

Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
Explanation:
The letter-log contents are all different, so their ordering is "art can", "art zero", "own kit dig".
The digit-logs have a relative order of "dig1 8 1 5 1", "dig2 3 6".

*/

// O(M⋅N⋅logN) T | O(M⋅logN) S where N is # of logs, M is length of longest log
var reorderLogFiles = function(logs) {
    const digits = [];
    const letters = [];
    
    for (const log of logs) {
        if (isFinite(log.split(' ')[1])) digits.push(log)
        else letters.push(log)
    }
    
    letters.sort((a,b) => {
        let l1 = a.split(' ').slice(1).join(' '),
            l2 = b.split(' ').slice(1).join(' ')
        
        if (l1 === l2) return a > b ? 1 : -1
        return l1 > l2 ? 1 : -1
    })
    
    return [...letters, ...digits]
};
