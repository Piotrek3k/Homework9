class GraphEdge {
    // Edge connects two nodes in one direction
    constructor(node1,node2,cost = null) {
        this._node1 = node1
        this._node2 = node2
        this._cost = cost
    }
    set node1(node) {this._node1 = node}
    set node2(node) {this._node2 = node}
    set cost(cost) {this._cost = cost}
    get node1() {return this._node1}
    get node2() {return this._node2}
    get cost() {return this._cost}
    toString() {
        if(this._cost){
            return this._node1._value + "; " + this._node2._value + "; cost: " + this._cost 
        }
        else{
            return this._node1._value + "; " + this._node2._value
        }}
}

class Graph{
    constructor() {
        this._edges = []
        this._nodes = []
    }
    addNode(node) {
        this._nodes.push(node)
        this._nodes.sort()
    }
    addEdge(graphEdge) {
        if(this._nodes.includes(graphEdge._node1) && this._nodes.includes(graphEdge._node2)){
            this._edges.push(graphEdge)
            this._edges.sort()
        }
        else {
            throw new Error("Graph does not contain at least one of provided nodes")
        }
    }
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
    dijkstra(node) {
        const distances = new Map()
        const toVisit = new Set()
        toVisit.add(node.value)
        distances.add(node.value,0)
        this._nodes.forEach(n => {
            if(node.value !== n.value){
                distances.add(n.value,Infinity)
                toVisit.add(n.value)
            }
        })

        return dijkstraAlgorithm(distances, toVisit, Math.min(...distances.values()))
    }
    dijkstraAlgorithm(distances, toVisit, nodeValue){
        this._edges.forEach( edge => {
            if(edge.node1.value === nodeValue && edge.cost < distances.get(nodeValue)) {
                             distances.set(nodeValue, edge.cost )
            }
        }
           
        )
    }
}

module.exports = {Graph, GraphEdge}