const Queue = require("./../dataStructures/Queue.js")
const Node = require("./../dataStructures/Node.js")

// initializing example nodes
const node0 = new Node(0)
const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)

// initializing queue
const queue = new Queue();

// enqueuing nodes
queue.enqueue(node0)
queue.enqueue(node2)
queue.enqueue(node3)

// dequeuing node
console.log(queue.dequeue())    // Node value: 0

// enqueuing node
queue.enqueue(node1)    

// checking the peek
console.log(JSON.stringify(queue.peek()))   // Node value: 1