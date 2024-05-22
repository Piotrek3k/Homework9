// Class representing a directed edge in a graph, connecting two nodes with an optional cost.
class GraphEdge {
    constructor(node1, node2, cost = null) {
        this._node1 = node1; // Initialize the first node of the edge.
        this._node2 = node2; // Initialize the second node of the edge.
        this._cost = cost;   // Initialize the cost of the edge (optional).
    }

    // Setter for the first node of the edge.
    set node1(node) {
        this._node1 = node;
    }

    // Setter for the second node of the edge.
    set node2(node) {
        this._node2 = node;
    }

    // Setter for the cost of the edge.
    set cost(cost) {
        this._cost = cost;
    }

    // Getter for the first node of the edge.
    get node1() {
        return this._node1;
    }

    // Getter for the second node of the edge.
    get node2() {
        return this._node2;
    }

    // Getter for the cost of the edge.
    get cost() {
        return this._cost;
    }

    // Method to return a string representation of the edge.
    toString() {
        if (this._cost) {
            return `${this._node1._value}; ${this._node2._value}; cost: ${this._cost}`;
        } else {
            return `${this._node1._value}; ${this._node2._value}`;
        }
    }
}

// Class representing a graph using adjacency list representation.
class Graph {
    constructor() {
        this._edges = []; // Initialize an array to store the edges of the graph.
        this._nodes = []; // Initialize an array to store the nodes of the graph.
    }

    // Method to add a node to the graph.
    addNode(node) {
        this._nodes.push(node);
        this._nodes.sort(); // Sort nodes for consistent ordering.
    }

    // Method to add an edge to the graph.
    addEdge(graphEdge) {
        if (this._nodes.includes(graphEdge._node1) && this._nodes.includes(graphEdge._node2)) {
            this._edges.push(graphEdge);
            this._edges.sort(); // Sort edges for consistent ordering.
        } else {
            throw new Error("Graph does not contain at least one of the provided nodes");
        }
    }

    // Method to perform a depth-first search (DFS) on the graph.
    depthFirstSearch(visited = [], toVisit = [], node = this._nodes[0]) {
        visited.push(node.value)    // adding current node to visited array
        toVisit.shift() // removing current node from toVisit array    
        let newToVisit = [] // intializing another array, that will collect all the nodes connected with current node (besides those in toVisit array)
        this._edges.forEach(edge => {   // checking for every edge if it starts with the current node   
            if(edge.node1.value === node.value){    
                if(!toVisit.includes(edge.node2) && !visited.includes(edge.node2.value)){   // checking if the new node connected to current node has been visited or is in the toVisit array
                    newToVisit.push(edge.node2) // adding second node from current edge to newToVisit array
                }
            }
        });
        toVisit = newToVisit.concat(toVisit)    // combining newToVisit and ToVisit that way the search is depth-first
        if(toVisit.length === 0){
            return visited  // returning visited if toVisit.length is 0 
        }
        else{
            return this.depthFirstSearch(visited,toVisit,toVisit[0])    // recursivly going to first node from toVisit array
        }
    }
    // Method to perform a breadth-first search (BFS) on the graph.
    breadthFirstSearch(visited = [], toVisit = [], node = this._nodes[0]){
        visited.push(node.value)    // adding current node to visited array
        toVisit.shift() // removing current node from toVisit array
        this._edges.forEach(edge => {   // checking for every edge if it starts with the current node
            if(edge.node1.value === node.value){
                if(!toVisit.includes(edge.node2) && !visited.includes(edge.node2.value)){   // checking if the new node connected to current node has been visited or is in the toVisit array
                    toVisit.push(edge.node2)    // pushing second node from current edge to toVisit array so the search is breadth-first
                }
            }
        });
        if(toVisit.length === 0){
            return visited  // returning visited if toVisit.length is 0
        }
        else{
            return this.breadthFirstSearch(visited,toVisit,toVisit[0])  // recursivly going to first node from toVisit array
        }
    }
    // Method to perform Dijkstra's algorithm to find the shortest paths from a given node.
    dijkstra(node) {
        // dijkstra algorithm to calculate the shortest path between two nodes
        const distances = new Map() // initializing new map with every node and distance to that node
        const toVisit = new Set()   // initializing new set with every node that hasn't been visited yet
        toVisit.add(node.value)     // adding initial node to toVisit set
        distances.set(node.value,0) // adding initial node to distances map and giving it 0 as distance
        this._nodes.forEach(n => {  // adding each node to toVisit set and distance map with distance of infinity
            if(node.value !== n.value){
                distances.set(n.value,Infinity)
                toVisit.add(n.value)
            }
        })

        return this.dijkstraAlgorithm(distances, toVisit) // returning default dijkstra algorithm function
    }
    // Helper method to implement Dijkstra's algorithm.
    dijkstraAlgorithm(distances, toVisit)
    {
        const nodeValue = findKeyWithLowestValue(distances, toVisit)  // value of current node is the lowest value in distances map that hasn't been visited   
        this._edges.forEach( edge => {
            // searching for every edge that connects current node with another node and checking if the sum of cost of that edge and value in distance map is lower than the distance in distance map
            if(edge.node1.value === nodeValue && edge.cost + distances.get(nodeValue) < distances.get(edge.node2.value)) {
                distances.set(edge.node2.value, edge.cost + distances.get(nodeValue)) // if it is lower, then the distance in distance map is replaced by lower value
            }
        })
        toVisit.delete(nodeValue) // removing current node from toVisit set
        if(toVisit.size === 0){ // when all nodes were visited, return distances map as shortest distances between provided node and every other node in the graph
            return distances 
        }
        else{
            return this.dijkstraAlgorithm(distances,toVisit) // return dijkstraAlgorithm for next node with lowest value in distance map that hasn't been visited   
        }
    }
    // Method to find the shortest path using BFS.
    breadthFirstSearch_ShortestPath(startingNode,targetNode, currentNode = startingNode,visited = [], toVisit = [], predecessors = new Map()) {
        visited.push(currentNode.value)    // adding current node to visited array
        toVisit.shift() // removing current node from toVisit array
        this._edges.forEach(edge => {   // checking for every edge if it starts with the current node
            if(edge.node1.value === currentNode.value){
                if(!toVisit.includes(edge.node2) && !visited.includes(edge.node2.value)){   // checking if the new node connected to current node has been visited or is in the toVisit array
                    toVisit.push(edge.node2)    // pushing second node from current edge to toVisit array so the search is breadth-first
                    predecessors.set(edge.node2,currentNode); // add second node to predecessors map 
                }
            }
        });
        if(currentNode === targetNode){
            const path = [];
            let step = targetNode;
            while (step !== startingNode) { // recreating the path between starting node and target node
                path.unshift(step);
                step = predecessors.get(step);
            }
            path.unshift(startingNode);
            return path; // returning visited if toVisit.length is 0
        }
        else{
            return this.breadthFirstSearch_ShortestPath(startingNode,targetNode,toVisit[0],visited,toVisit,predecessors)  // recursivly going to first node from toVisit array
        }
    }
}

function findKeyWithLowestValue(distances, toVisit) {
    // function to find the lowest value in a map with corresponding key
    let lowestValue = Infinity;
    let lowestKey = null;
  
    for (const [key, value] of distances) {
      if (value < lowestValue && toVisit.has(key)) {
        lowestValue = value;
        lowestKey = key;
      }
    }
  
    return lowestKey;
  }

module.exports = {Graph, GraphEdge}