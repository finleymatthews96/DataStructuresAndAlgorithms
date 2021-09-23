/* Kth Largest Element in Array
LeetCode Medium

Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

 

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4

*/

// Sort Array, return k - 1 element. Trivial, not cool answer
// O(nlogn) T | O(1) S
var findKthLargest = function(nums, k) => {
  nums.sort((a, b) => b - a);
  return nums[k-1];
}

// create a heap, and add a new node to it for each element we iterate over. 
// Continually chop of the head of the heap to make sure it is only k nodes big. Return head at the end.
// O(nlogk) T || O(k) S
var findKthLargest = function(nums, k) {
  const size = nums.length;
	let i =  Math.floor(size / 2 - 1);
	while(i >= 0) {
		heapify(nums, i, size);
		i--;
	}

	let loop = size - 1;
	while(loop > size - 1 - k) {
		swap(nums, 0, loop);
		heapify(nums, 0, loop);
		loop--;
	}
	return nums[nums.length - k];
};

function heapify(arr, root, max) {
	let toSwapIdx;
	let leftChildIdx;
	let rightChildIdx;

	while(root < max) {
		toSwapIdx = root;
		leftChildIdx = 2 * root + 1;
		rightChildIdx = 2 * root + 2;
		if(leftChildIdx < max && arr[root] < arr[leftChildIdx]) {
			toSwapIdx = leftChildIdx;
		}

		if(rightChildIdx < max && arr[toSwapIdx] < arr[rightChildIdx]) {
			toSwapIdx = rightChildIdx;
		}

		if(root == toSwapIdx) return;

		swap(arr, toSwapIdx, root);
		root = toSwapIdx;
	}
}

function swap(arr, p, q) {
	let temp = arr[p];
	arr[p] = arr[q];
	arr[q] = temp;
}

// QuickSelect - sort of like quick sort, but averages out to O(n) because you only ever care about one side of the partitioned array
// O(n) T on average, O(n^2) in the worst case || O(1) S
var findKthLargest = function(nums, k) {
  while(true) {
    let idx = partition(nums);
    if(nums.length - idx == k) {
      return nums[idx];
    } else if(nums.length - idx > k) {
      nums = nums.slice(idx + 1);
    } else {
      k = k - (nums.length - idx);
      nums = nums.slice(0, idx);
    }
  }
};

function partition(nums) {
  let l = -1;
  let r = 0;
  let pivot = nums[nums.length - 1];
  
  while(r < nums.length - 1) {
    if(nums[r] <= pivot) {
      l++;
      swap(nums, l, r);
    }
    r++;
  }
  swap(nums, l + 1, r);
  return l + 1;
}

function swap(nums, i, j) {
  if(i == j) return;
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
