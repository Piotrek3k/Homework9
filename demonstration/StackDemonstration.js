const {Stack} = require("./../dataStructures/Stack.js")
const {MinMaxStack} = require("./../dataStructures/Stack.js")
const Node = require("./../dataStructures/Node.js")

// initializing example nodes
const node0 = new Node(0)
const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)

// initializing stack
const stack = new Stack();

// pushing node into stack
stack.push(node3)

// poping node from stack
console.log(stack.pop()) // Node value: 3

// pushing nodes into stack
stack.push(node2)
stack.push(node1)

// checking for the peek
console.log(stack.peek()) // Node value: 1  

// initializing minMaxStack
const minMaxStack = new MinMaxStack()

// pushing nodes into the stack
minMaxStack.push(node2)
minMaxStack.push(node3)
minMaxStack.push(node1)
minMaxStack.push(node0)

// checking for maximal value in stack
console.log(minMaxStack.getMax())   // 3

// checking for minimal value in stack 
console.log(minMaxStack.getMin())   // 0

// removing node from the stack
minMaxStack.pop()

// checking for minimal value in the stack after removing previous minimal value 
console.log(minMaxStack.getMin())   // 1