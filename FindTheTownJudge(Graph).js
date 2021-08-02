/*
In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.

Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

Example 5:

Input: n = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3
*/

// O(t) T || O(n) S where n = number of people and t = length of trust array
var findJudge = function(n, trust) {
  let memo = Array(n).fill(0);
  
  for (const relation of trust){
    memo[relation[0] - 1]--;
    memo[relation[1] - 1]++;
  }

  for (const person in memo){
    if (memo[person] === n-1) {
      return Number(person) + 1
    }
  }
  
  return -1;
};
