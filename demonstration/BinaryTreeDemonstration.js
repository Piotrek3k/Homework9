const {BinaryTreeNode} = require("./../dataStructures/BinaryTree.js")
const {BinaryTree} = require("./../dataStructures/BinaryTree.js")

// initalizing some binary nodes as example
const binaryNode1 = new BinaryTreeNode(10)
const binaryNode2 = new BinaryTreeNode(6)
const binaryNode3 = new BinaryTreeNode(16)
const binaryNode4 = new BinaryTreeNode(4)
const binaryNode5 = new BinaryTreeNode(18)
const binaryNode6 = new BinaryTreeNode(8)
const binaryNode7 = new BinaryTreeNode(14)

// initializing binary tree
const binaryTree = new BinaryTree()

// inserting nodes to the binary tree
binaryTree.insertNode(binaryNode1)
binaryTree.insertNode(binaryNode2)
binaryTree.insertNode(binaryNode3)
binaryTree.insertNode(binaryNode4)
binaryTree.insertNode(binaryNode5)
binaryTree.insertNode(binaryNode6)
binaryTree.insertNode(binaryNode7)

console.log(binaryTree.traverseInOrder())   // array representing the result of traversing the tree in-order
console.log(binaryTree.traversePreOrder())  // array representing the result of traversing the tree pre-order
console.log(binaryTree.traversePostOrder()) // array representing the result of traversing the tree post-order

// searching for a value if it exists in the tree
console.log(binaryTree.search(14))  // true
console.log(binaryTree.search(12))  // false

// checking if the binary tree is binary search tree
console.log(binaryTree.isBinarySearchTree())  // true 