/* Meeting Rooms II
LeetCode Medium
Amazon, a TON of companies, Nutanix

Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2

Example 2:

Input: intervals = [[7,10],[2,4]]
Output: 1

*/

// O(n log n) T | O(n) S
var minMeetingRooms = function(intervals) {
  if (intervals.length === 0) return 0;
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  
  let stack = []
  let mostAtOnce = 1;
  
  for (const meeting of intervals){
    while (stack.length > 0 && meeting[0] >= stack[stack.length-1]){
      stack.pop();
    }
    
    // would be slightly more efficient to keep a min heap here, as opposed to an array that needs re-sorting
    stack.push(meeting[1]);
    let thisMeeting = stack.length - 1;
    while (stack.length > 1 && stack[thisMeeting] > stack[thisMeeting - 1]){
      let temp = stack[thisMeeting]
      stack[thisMeeting] = stack[thisMeeting - 1]
      stack[thisMeeting - 1] = temp;
      thisMeeting--;
    }
    mostAtOnce = Math.max(mostAtOnce, stack.length)
  }
  
  return mostAtOnce;
};
