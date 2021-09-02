/* Flatten 2D Vector
LeetCode Medium
Airbnb

Design an iterator to flatten a 2D vector. It should support the next and hasNext operations.

Implement the Vector2D class:

Vector2D(int[][] vec) initializes the object with the 2D vector vec.
next() returns the next element from the 2D vector and moves the pointer one step forward. You may assume that all the calls to next are valid.
hasNext() returns true if there are still some elements in the vector, and false otherwise.
 

Example 1:

Input
["Vector2D", "next", "next", "next", "hasNext", "hasNext", "next", "hasNext"]
[[[[1, 2], [3], [4]]], [], [], [], [], [], [], []]
Output
[null, 1, 2, 3, true, true, 4, false]

Explanation
Vector2D vector2D = new Vector2D([[1, 2], [3], [4]]);
vector2D.next();    // return 1
vector2D.next();    // return 2
vector2D.next();    // return 3
vector2D.hasNext(); // return True
vector2D.hasNext(); // return True
vector2D.next();    // return 4
vector2D.hasNext(); // return False
*/

// O(1) T | O(1) S
var Vector2D = function(vec) {
  this.vec = vec;
  this.leng = vec.length;
  this.i = 0;
  this.j = -1;
};

/**
 * @return {number}
 */

// O(1) T | O(1) S
Vector2D.prototype.next = function() {
  if (this.vec[this.i][this.j + 1] !== undefined){
    this.j += 1;
    return this.vec[this.i][this.j]
  }
  
  this.i += 1;
  this.j = 0;
  while (this.vec[this.i][this.j] === undefined){
    this.i += 1;
  }
  
  return this.vec[this.i][this.j];
};

/**
 * @return {boolean}
 */

// O(1) T | O(1) S
Vector2D.prototype.hasNext = function() {
  if (this.vec[this.i] && this.vec[this.i][this.j + 1] !== undefined) return true;
  let temp = this.i + 1;
  while (this.vec[temp] !== undefined && this.vec[temp][0] === undefined){
    temp += 1;
  }
  if (this.vec[temp] && this.vec[temp][0] !== undefined) return true;
  return false;
};
