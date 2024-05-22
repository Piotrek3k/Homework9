
const Node = require("./Node.js");

// A BinaryTreeNode class extending the Node class to represent nodes in a binary tree.
class BinaryTreeNode extends Node {
    constructor(value) {
        super(value); 
        this._leftChild = null;  // Initialize the reference to the left child node.
        this._rightChild = null; // Initialize the reference to the right child node.
    }

    // Getter method to retrieve the reference to the left child node.
    get leftChild() {
        return this._leftChild;
    }

    // Setter method to update the reference to the left child node.
    set leftChild(value) {
        this._leftChild = value;
    }

    // Getter method to retrieve the reference to the right child node.
    get rightChild() {
        return this._rightChild;
    }

    // Setter method to update the reference to the right child node.
    set rightChild(value) {
        this._rightChild = value;
    }
}

// A BinaryTree class representing a basic binary tree data structure.
class BinaryTree {
    constructor() {
        this._root = null; // Initialize the reference to the root node of the binary tree.
    }

    // Method to insert a new node into the binary tree.
    insertNode(newNode, existingNode = this._root) {
        if (this._root === null) {
            this._root = newNode; // If the binary tree is empty, set the new node as the root.
        } else {
            if (newNode.value >= existingNode.value) {
                if (existingNode.rightChild === null) {
                    existingNode.rightChild = newNode; // Insert node as the right child if the position is available.
                } else {
                    this.insertNode(newNode, existingNode.rightChild); // Otherwise, insert recursively in the right subtree.
                }
            } else {
                if (existingNode.leftChild === null) {
                    existingNode.leftChild = newNode; // Insert node as the left child if the position is available.
                } else {
                    this.insertNode(newNode, existingNode.leftChild); // Otherwise, insert recursively in the left subtree.
                }
            }
        }
    }

    // Method to search for a node with a specific value in the binary tree.
    search(value, currentNode = this._root) {
        if (currentNode === null) {
            return false; // If the current node is null, value not found.
        } else if (currentNode.value === value) {
            return true; // If the current node has the target value, value found.
        } else if (value > currentNode.value) {
            return this.search(value, currentNode.rightChild); // Otherwise, search recursively in the right subtree.
        } else {
            return this.search(value, currentNode.leftChild); // Otherwise, search recursively in the left subtree.
        }
    }

    // Method to traverse the binary tree in in-order (left, root, right) and return the values as an array.
    traverseInOrder(node = this._root, result = []) {
        if (node !== null) {
            this.traverseInOrder(node.leftChild, result);   // Traverse left subtree
            result.push(node.value);                        // Visit current node
            this.traverseInOrder(node.rightChild, result);  // Traverse right subtree
        }
        return result;
    }

    // Method to traverse the binary tree in pre-order (root, left, right) and return the values as an array.
    traversePreOrder(node = this._root, result = []) {
        if (node !== null) {
            result.push(node.value);                         // Visit current node
            this.traversePreOrder(node.leftChild, result);   // Traverse left subtree
            this.traversePreOrder(node.rightChild, result);  // Traverse right subtree
        }
        return result;
    }

    // Method to traverse the binary tree in post-order (left, right, root) and return the values as an array.
    traversePostOrder(node = this._root, result = []) {
        if (node !== null) {
            this.traversePostOrder(node.leftChild, result);   // Traverse left subtree
            this.traversePostOrder(node.rightChild, result);  // Traverse right subtree
            result.push(node.value);                          // Visit current node
        }
        return result;
    }

    // Method to check if the binary tree is a binary search tree.
    isBinarySearchTree() {
        const array = this.traverseInOrder(); // Get the in-order traversal of the tree.
        function isSorted(arr) {
            for (let i = 1; i < arr.length; i++) {
                if (arr[i - 1] > arr[i]) {
                    return false; // If any element is greater than the next one, array is not sorted and that way is not a cycle
                }
            }
            return true; // If the array is sorted, return true.
        }
        return isSorted(array); // Check if the in-order traversal array is sorted.
    }
}


module.exports = {BinaryTree,BinaryTreeNode}