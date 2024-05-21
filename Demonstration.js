const {Stack} = require("./DataStructures");
const {Node} = require("./DataStructures");
const {Queue} = require("./DataStructures");
const {BinaryTree} = require("./DataStructures")
const {BinaryTreeNode} = require("./DataStructures")
const {GraphEdge} = require("./DataStructures")
const {Graph} = require("./DataStructures")

const node1 = new Node(5)
const node2 = new Node("green")
const node3 = new Node(true)

// const stack = new Stack();
// stack.push(node1)
// console.log(JSON.stringify(stack._nodes))
// stack.pop()
// stack.push(node2)
// console.log(JSON.stringify(stack._nodes))
// stack.push(node3)
// console.log(stack.peek())
// console.log(JSON.stringify(stack._nodes))

// const queue = new Queue();
// queue.enqueue(node1)
// queue.enqueue(node2)
// queue.enqueue(node3)
// console.log(JSON.stringify(queue._nodes))
// queue.dequeue()
// console.log(JSON.stringify(queue._nodes))
// console.log(JSON.stringify(queue.peek()))

// const binaryNode1 = new BinaryTreeNode(10)
// const binaryNode2 = new BinaryTreeNode(6)
// const binaryNode3 = new BinaryTreeNode(16)
// const binaryNode4 = new BinaryTreeNode(4)
// const binaryNode5 = new BinaryTreeNode(18)
// const binaryNode6 = new BinaryTreeNode(8)
// const binaryNode7 = new BinaryTreeNode(14)

// const binaryTree = new BinaryTree()
// binaryTree.insertNode(binaryNode1)
// binaryTree.insertNode(binaryNode2)
// binaryTree.insertNode(binaryNode3)
// binaryTree.insertNode(binaryNode4)
// binaryTree.insertNode(binaryNode5)
// binaryTree.insertNode(binaryNode6)
// binaryTree.insertNode(binaryNode7)

// console.log(binaryTree.traverseInOrder())
// console.log(binaryTree.traversePreOrder())
// console.log(binaryTree.traversePostOrder())
// console.log(binaryTree.search(14))
// console.log(binaryTree.search(12))

const graphNode0 = new Node(0)
const graphNode1 = new Node(1)
const graphNode2 = new Node(2)
const graphNode3 = new Node(3)
const graphNode4 = new Node(4)

const graphNodes = [graphNode0,graphNode1,graphNode2,graphNode3,graphNode4]

// const graphNodes = [graphNode1,graphNode2,graphNode3,graphNode0]

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

// const graphEdge01 = new GraphEdge(graphNode0,graphNode1)
// const graphEdge02 = new GraphEdge(graphNode0,graphNode2)
// const graphEdge12 = new GraphEdge(graphNode1,graphNode2)
// const graphEdge20 = new GraphEdge(graphNode2,graphNode0)
// const graphEdge23 = new GraphEdge(graphNode2,graphNode3)
// const graphEdge33 = new GraphEdge(graphNode3,graphNode3)

// const graphEdges = [graphEdge01,graphEdge02,graphEdge12,graphEdge20,graphEdge23,graphEdge33]

const graph = new Graph()



graphNodes.forEach(node => {
    graph.addNode(node)
})
graphEdges.forEach(edge => {
    graph.addEdge(edge)
})

//console.log(JSON.stringify(graph._edges))

console.log(graph.depthFirstSearch())
console.log(graph.breadthFirstSearch())