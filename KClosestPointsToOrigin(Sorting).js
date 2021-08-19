/* K Closest Points to Origin
LeetCode Medium
Amazon Favorite

Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)^2 + (y1 - y2)^2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
*/

// Quick Select Approach
// O(n) T on average, but O(n^2) T in worst case | O(1) S on average, O(n) in the worst case (because of call stack)
var kClosest = function(points, K) {
    quickSelect(points, K, 0, points.length - 1)
    return points.slice(0, K)
};

function quickSelect(points, K, low, high) {
    if (low >= high) {
        return
    }
    
    const partPoint = partition(points, low, high)
    
    if (partPoint === K - 1) {
        return
    }
    if (partPoint < K - 1) {
        quickSelect(points, K, partPoint + 1, high)
    } else {
        quickSelect(points, K, low, partPoint - 1)
    }
}

function partition(points, low, high) {
    const pivot = points[high]
    let i = low
    let j = low
    while (i < high) {
        if (getDist(points[i]) < getDist(pivot)) {
            swap(points, i, j)
            j++
        }
        i++
    }
    swap(points, high, j)
    return j
}

function getDist(point) {
    return point[0] * point[0] + point[1] * point[1]
}

function swap(arr, i, j) {
    const temp = arr[i] 
    arr[i] = arr[j]
    arr[j] = temp
}

// Min Heap that nevers goes greater than K nodes
// O(nlogk) T || O(k) S
var kClosest = function(points, k) {
  const heap = new MinHeap(function(a, b) {
    return Math.pow(a[0], 2) + Math.pow(a[1], 2) > Math.pow(b[0], 2) + Math.pow(b[1], 2)
  });
    
  points.forEach(point => {
    heap.add(point);
  })
    
  let ans = [];
    
  for(let i = 0; i< k; i++) {
    ans.push(heap.pop());
  }
    
  return ans;
};


class MinHeap {
  constructor(compareFunc) {
    this.ary = [null];
    this.cf = compareFunc;
  }
    
  add(val) {
    this.ary.push(val);
    this.upHill();
  }
    
  upHill() {
    let pIdx = Math.floor((this.ary.length-1) / 2);
    let idx = this.ary.length - 1;
    while(pIdx > 0 && idx !== pIdx) {
      if (this.cf(this.ary[pIdx], this.ary[idx])) {
        this.swap(pIdx, idx);
      } 
      idx = pIdx;
      pIdx = Math.floor(idx / 2);;
    }
  }
    
  swap(a, b) {
    const temp = this.ary[a];
    this.ary[a] = this.ary[b];
    this.ary[b] = temp;
  }
    
  pop() {
    const ret = this.ary[1];
    const last = this.ary.pop();
    if (this.ary.length > 1) {
      this.ary[1] = last;
      this.downHill();
    }
        
    return ret;
  }
    
  downHill() {
    let pIdx = 1;
    let lChild = 2 * pIdx;
    let rChild = 2 * pIdx + 1;
        
    while(this.ary[lChild] || this.ary[rChild]) {
      const lSmaller = this.cf(this.ary[pIdx], this.ary[lChild] || [Infinity, Infinity]);
      const rSmaller = this.cf(this.ary[pIdx], this.ary[rChild] || [Infinity, Infinity]);
            
      if(lSmaller || rSmaller) {
        const rSmallerThanl = this.cf(this.ary[lChild] || [Infinity, Infinity], this.ary[rChild] || [Infinity, Infinity]);
        if(rSmallerThanl) {
          this.swap(pIdx, rChild);
          pIdx = rChild;
        } else {
          this.swap(pIdx, lChild);
          pIdx = lChild;
        }
                
        lChild = 2 * pIdx;
        rChild = 2 * pIdx + 1;
                
      } else break;
            
            
    }
       
  }
}
