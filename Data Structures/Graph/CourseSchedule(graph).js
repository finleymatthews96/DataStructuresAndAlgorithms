/* Course Schedule
LeetCode Medium
FAANG, many others, Nutanix

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an 
array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

*/

// O(E + V) T | O(E + V) S - depth first search
function canFinish(numCourses, prerequisites) {
  const seen = new Set();
  const seeing = new Set();
  const adj = [...Array(numCourses)].map(r => []);
  
  for (let [u, v] of prerequisites) {
    adj[v].push(u);
  }
  
  for (let c = 0; c < numCourses; c++) {
    if (!dfs(c)) {
      return false;
    }
  }
  return true;
  
  function dfs(v) {
    if (seen.has(v)) return true;
    if (seeing.has(v)) return false;
    
    seeing.add(v);
    for (let nv of adj[v]) {
      if (!dfs(nv)) {
        return false;
      }
    }
    seeing.delete(v);
    seen.add(v);
    return true;
  }
}

// O(V + E) T | O(V + E) S - topological sort, lends itself well to Course Schedule II
var canFinish = function(numCourses, prerequisites) {
  const order = [];
  const queue = [];
  const graph = new Map();
  const indegree = Array(numCourses).fill(0);

  for (const [e, v] of prerequisites) {
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }
    indegree[e]++;
  }

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const v = queue.shift();
    if (graph.has(v)) {
      for (const e of graph.get(v)) {
        indegree[e]--;
        if (indegree[e] === 0) queue.push(e);
      }
    }
    order.push(v);
  }

  return numCourses === order.length;
};
