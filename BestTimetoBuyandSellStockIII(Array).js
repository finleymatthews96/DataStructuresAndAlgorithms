/* Best Time to Buy and Sell Stock III
LeetCode Hard
Two Sigma, Bloomberg, Microsoft

You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete at most two transactions.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

Example 1:

Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
Example 4:

Input: prices = [1]
Output: 0

*/

// O(n^2) T | O(1) S - timed out, not accepted, split the array at every possible point, then calculate buy and sell stock for each side
var maxProfit = function(prices){
  let greatest = 0;

  for (let i=0; i<prices.length; i++){
    const current = buyAndSellStock(prices, 0, i) + buyAndSellStock(prices, i, prices.length);
    if (current > greatest) greatest = current; 
  }

  return greatest;
}

function buyAndSellStock(prices, left, right){
  let min = Infinity;
  let greatest = 0;

  for (let i=left; i<right; i++){
    if (prices[i] < min){
      min = prices[i]
    } else if (prices[i] - min > greatest){
      greatest = prices[i] - min
    }
  }

  return greatest;
}

// O(n) T | O(1) S bi-directional programming, using an array for best profit from the right, and best from the left
var maxProfit = function(prices){
  if (prices.length === 0) return 0;
  let leftMin = prices[0];
  let rightMax = prices[prices.length - 1]
  
  const leftProfits = Array(prices.length).fill(0);
  const rightProfits = Array(prices.length + 1).fill(0);
  
  for (let i=1; i<prices.length; i++){
    leftProfits[i] = Math.max(leftProfits[i-1], prices[i] - leftMin);
    leftMin = Math.min(leftMin, prices[i]);
    
    const r = prices.length - 1 - i;
    rightProfits[r] = Math.max(rightProfits[r+1], rightMax - prices[r])
    rightMax = Math.max(rightMax, prices[r]);
  }
  
  let maxProfit = 0;
  for (let i=0; i<prices.length; i++){
    maxProfit = Math.max(maxProfit, leftProfits[i] + rightProfits[i+1])
  }
  
  return maxProfit;
}
