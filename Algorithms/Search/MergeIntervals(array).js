/* Merge Intervals
LeetCode Medium

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
