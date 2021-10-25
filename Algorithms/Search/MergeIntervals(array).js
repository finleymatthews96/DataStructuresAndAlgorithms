/* Merge Intervals
LeetCode Medium
Amazon, Facebook, Microsoft, JPMorgan, Salesforce, Google, many many more

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/

// O (n log n) T | O(n) S
var merge = function(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals)
  let result = [];
  
  for (let i=0; i<intervals.length; i++){
    let toBeChecked = i + 1;
    let startTime = intervals[i][0];
    let endTime = intervals[i][1];
    while(toBeChecked < intervals.length && intervals[toBeChecked][0] <= endTime){
      endTime = Math.max(endTime, intervals[toBeChecked][1])
      i++;
      toBeChecked++;
    }
    endTime = Math.max(endTime, intervals[i][1])
    result.push([startTime, endTime])
  }
  
  return result;
};
