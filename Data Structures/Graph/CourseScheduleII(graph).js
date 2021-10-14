/* Course Schedule II
LeetCode Medium
Amazon, Microsoft, many others, Nutanix

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where 
prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is 
impossible to finish all courses, return an empty array.

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

Example 2:

Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 
should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

Example 3:

Input: numCourses = 1, prerequisites = []
Output: [0]

*/

// O(V + E) T | O(V + E) S
var findOrder = function(numCourses, prerequisites) {
  let graph = {}
  let visited = new Array(numCourses).fill(0);
  let stack = [];
  
  for (let [v, e] of prerequisites){
    if (graph[v] !== undefined){
      graph[v].push(e);
    } else {
      graph[v] = [e];
    }
  }
  
  for (let i=0; i < numCourses; i++){
    if (visited[i] == 0 && DFS(i)) return [];
  }
  
  function DFS(index){
    visited[index] = 1;
    
    if (graph[index]){
      for (let edge of graph[index]){
        if (visited[edge] == 1) return true;
        if (visited[edge] == 0 && DFS(edge)) return true;
      }
    }
    
    visited[index] = 2;
    stack.push(index);
    return false;
  }
  
  return stack;
};

