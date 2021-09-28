/* Maximum Profit in Job Scheduling
LeetCode Hard
Doordash LOVES this

We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i].

You're given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no 
two jobs in the subset with overlapping time range.

If you choose a job that ends at time X you will be able to start another job that starts at time X.

 

Example 1:

Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
Output: 120
Explanation: The subset chosen is the first and fourth job. 
Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.

Example 2:

Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
Output: 150
Explanation: The subset chosen is the first, fourth and fifth job. 
Profit obtained 150 = 20 + 70 + 60.

Example 3:

Input: startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]
Output: 6

*/

// O(nlogn) T | O(n) S - recursion with memoization after sorting input array
var jobScheduling = function(startTime, endTime, profit) {
  let arr = Array(startTime.length).fill(null);
  for (let i=0; i<arr.length; i++){
    arr[i] = [startTime[i], endTime[i], profit[i]];
  }
  arr.sort((a, b) => a[0] - b[0]);
  let memo = {}
  memo[arr.length] = 0;
  memo[arr.length - 1] = arr[arr.length - 1][2];
  return pickOrDont(arr, memo, 0);
};

var pickOrDont = function(arr, memo, i){
  if (memo[i]) return memo[i];
  
  const dont = pickOrDont(arr, memo, i + 1);
  
  let pick = arr[i][2];
  let j = i + 1;
  while (j <= arr.length && arr[j][0] < arr[i][1]) j++;
  pick += pickOrDont(arr, memo, j)
  
  memo[i] = Math.max(dont, pick);
  return memo[i]
}
