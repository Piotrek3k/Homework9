const Node = require("./../dataStructures/Node.js")
const {Graph} = require("./../dataStructures/Graph.js")
const {GraphEdge} = require("./../dataStructures/Graph.js")

// initalizing example graph nodes
const graphNode0 = new Node(0)
const graphNode1 = new Node(1)
const graphNode2 = new Node(2)
const graphNode3 = new Node(3)
const graphNode4 = new Node(4)

const graphNodes = [graphNode0,graphNode1,graphNode2,graphNode3,graphNode4]

// initialzing graph edges
const graphEdge01 = new GraphEdge(graphNode0,graphNode1)
const graphEdge10 = new GraphEdge(graphNode1,graphNode0)
const graphEdge02 = new GraphEdge(graphNode0,graphNode2)
const graphEdge20 = new GraphEdge(graphNode2,graphNode0)
const graphEdge03 = new GraphEdge(graphNode0,graphNode3)
const graphEdge30 = new GraphEdge(graphNode3,graphNode0)
const graphEdge21 = new GraphEdge(graphNode2,graphNode1)
const graphEdge12 = new GraphEdge(graphNode1,graphNode2)
const graphEdge24 = new GraphEdge(graphNode2,graphNode4)
const graphEdge42 = new GraphEdge(graphNode4,graphNode2)

const graphEdges = [graphEdge01,graphEdge10,graphEdge02,graphEdge20,graphEdge03,graphEdge30,graphEdge21,graphEdge12,graphEdge24,graphEdge42]

// initalizing graph
const graph = new Graph()

// adding nodes and edges to the graph
graphNodes.forEach(node => {
    graph.addNode(node)
})
graphEdges.forEach(edge => {
    graph.addEdge(edge)
})

// executing depth first search
console.log(graph.depthFirstSearch()) // [0, 1, 2, 4, 3]

// executing breadth first search
console.log(graph.breadthFirstSearch()) // [0, 1, 2, 3, 4]

// initalizing more example nodes for dijkstra algorithm and bfs-shortest path
const nodeA = new Node("A")
const nodeB = new Node("B")
const nodeC = new Node("C")
const nodeD = new Node("D")
const nodeE = new Node("E")
const nodeF = new Node("F")
const nodeG = new Node("G")

const nodes = [nodeA, nodeB, nodeC, nodeD, nodeE, nodeF, nodeG]

// initalizing edges
const graphEdgeAB = new GraphEdge(nodeA, nodeB, 7)
const graphEdgeBA = new GraphEdge(nodeB, nodeA, 7)

const graphEdgeAC = new GraphEdge(nodeA, nodeC, 3)
const graphEdgeCA = new GraphEdge(nodeC, nodeA, 3)

const graphEdgeAD = new GraphEdge(nodeA, nodeD, 2);
const graphEdgeDA = new GraphEdge(nodeD, nodeA, 2);

const graphEdgeBD = new GraphEdge(nodeB, nodeD, 3);
const graphEdgeDB = new GraphEdge(nodeD, nodeB, 3);

const graphEdgeBE = new GraphEdge(nodeB, nodeE, 4);
const graphEdgeEB = new GraphEdge(nodeE, nodeB, 4);

const graphEdgeCD = new GraphEdge(nodeC, nodeD, 5);
const graphEdgeDC = new GraphEdge(nodeD, nodeC, 5);

const graphEdgeCG = new GraphEdge(nodeC, nodeG, 8);
const graphEdgeGC = new GraphEdge(nodeG, nodeC, 8);

const graphEdgeCF = new GraphEdge(nodeC, nodeF, 2);
const graphEdgeFC = new GraphEdge(nodeF, nodeC, 2);

const graphEdgeDE = new GraphEdge(nodeD, nodeE, 1);
const graphEdgeED = new GraphEdge(nodeE, nodeD, 1);

const graphEdgeEF = new GraphEdge(nodeE, nodeF, 6);
const graphEdgeFE = new GraphEdge(nodeF, nodeE, 6);

const graphEdgeGF = new GraphEdge(nodeG, nodeF, 2);
const graphEdgeFG = new GraphEdge(nodeF, nodeG, 2);

// initializing graph
const graphFindingPath = new Graph()

const edges = [
    graphEdgeAB, graphEdgeBA, 
    graphEdgeAC, graphEdgeCA, 
    graphEdgeAD, graphEdgeDA, 
    graphEdgeBD, graphEdgeDB, 
    graphEdgeBE, graphEdgeEB, 
    graphEdgeCD, graphEdgeDC, 
    graphEdgeCG, graphEdgeGC, 
    graphEdgeCF, graphEdgeFC, 
    graphEdgeDE, graphEdgeED, 
    graphEdgeEF, graphEdgeFE, 
    graphEdgeGF, graphEdgeFG
];

// adding edges and nodes to the graph
nodes.forEach(node => {
    graphFindingPath.addNode(node)
})
edges.forEach(edge => {
    graphFindingPath.addEdge(edge)
})

// executing dijkstra algorithm on the graph. Starting from nodeA, result shows shortest path to every connected node. Works when every edge has cost
for (const [key, value] of graphFindingPath.dijkstra(nodeA)) {
    console.log(`${key} => ${value}`);
  }

// executing bfs algorithm on the graph to find shortest path. Starting from nodeA, result shows shortest path to targeted node (nodeG). Works when edges don't have costs
const shortestPath = graphFindingPath.breadthFirstSearch_ShortestPath(nodeA, nodeG);
console.log(shortestPath.map(node => node.value))
