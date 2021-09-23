/* Third Maximum Number
LeetCode Easy
Facebook

Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

 

Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.
Example 2:

Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.
Example 3:

Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.
*/

// O(n) T | O(n) S
var thirdMax = function(nums) {
  nums = [ ...new Set(nums) ]
  let greatest, secondGreatest, thirdGreatest;
  
  for (let i=0; i<nums.length; i++){
    if (greatest === undefined){
      greatest = nums[i];
    } else if (greatest < nums[i]){
      thirdGreatest = secondGreatest;
      secondGreatest = greatest;
      greatest = nums[i];
    } else if (secondGreatest === undefined || secondGreatest < nums[i]){
      thirdGreatest = secondGreatest;
      secondGreatest = nums[i];
    } else if (thirdGreatest === undefined || thirdGreatest < nums[i]){
      thirdGreatest = nums[i];
    }
  }
  
  if (thirdGreatest !== undefined) return thirdGreatest;
  return greatest;
};

// O(n) T | O(n) S - min heap
var thirdMax = function(array) {
  const memo = {}
  const minHeap = new Array(3).fill(-Infinity)

  for(let i = 0; i < array.length; i++){
    if(!memo[array[i]]){
      memo[array[i]] = true;
      if (array[i] > minHeap[0]){
        insertAndSift(minHeap, array[i])
      }
    }
  }
  
  if (minHeap[0] === -Infinity) return Math.max(minHeap[1], minHeap[2])
  return minHeap[0]
};

function insertAndSift(heap,value){
  heap[0] = value
  if(heap[1] < heap[2] && heap[1] < heap[0]){
    swap(heap, 0, 1)
  } else if (heap[2] < heap[0]) {
    swap(heap, 0, 2)
  }
}

function swap(heap, i, j){
  let temp = heap[i];
  heap[i] = heap[j]
  heap[j] = temp
}
