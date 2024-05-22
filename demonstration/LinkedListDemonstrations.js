const {LinkedList} = require("./../dataStructures/LinkedList.js")
const {LinkedListNode} = require("./../dataStructures/LinkedList.js")

// initalizing example nodes
const node0 = new LinkedListNode(0)
const node1 = new LinkedListNode(1)
const node2 = new LinkedListNode(2)
const node3 = new LinkedListNode(3)
const node4 = new LinkedListNode(4)

// initializing linked list
const linkedList = new LinkedList()

// inserting nodes into linked list
linkedList.insertNode(node0)
linkedList.insertNode(node1)
linkedList.insertNode(node2)
linkedList.insertNode(node3)
linkedList.insertNode(node4)

// searching for values in linked list
console.log(linkedList.search(3))   // true
console.log(linkedList.search(5))   // false

// deleting a node from linked list
linkedList.deleteNode(3)

// searching for value after deleting
console.log(linkedList.search(3))   // false

// checking for a cycle in linked list
console.log(linkedList.hasCycle())  // false

// initalizing and inserting a node that makes a cycle in linked list
const node5 = new LinkedListNode(5,node0)
linkedList.insertNode(node5)

// checking for a cycle in linked list again
console.log(linkedList.hasCycle())  // true