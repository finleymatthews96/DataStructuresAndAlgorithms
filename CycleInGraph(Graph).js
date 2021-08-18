/* Cycle In Graph
AlgoExpert Medium

You are given a list of edges, representing an unweighted, directed graph with at least one node. Write a function
that returns a boolean representing whether the given graph contains a cycle.

The number of vertices is equal to the length of edges, where each index i in edges contains vertex i's outbound edges.

This is a directed graph. It may contain self loops.

Input:

{
  "edges": [
    [1, 3],
    [2, 3, 4],
    [0],
    [],
    [2, 5],
    []
  ]
}

Output: True (there are multiple cycles, including 0 -> 1 -> 2 -> 0)
*/


function cycleInGraph(edges) {
	let visited = Array(edges.length).fill(0);
	let inStack = Array(edges.length).fill(0);
	
	for (let i=0; i<edges.length; i++){
		if (!visited[i] && depthFirstSearch(edges, i, visited, inStack)) return true;
	}
  return false;
}

function depthFirstSearch(edges, start, visited, inStack){
	visited[start] = 1;
	inStack[start] = 1;
	
	for (const neighbor of edges[start]){
		if ((!visited[neighbor] && 
				 depthFirstSearch(edges, neighbor, visited, inStack)) || 
				 inStack[neighbor]){
			return true;
		} 
	}
	
	inStack[start] = 0
	return false;
}
