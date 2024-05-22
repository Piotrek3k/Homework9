// Importing the Node class from the Node.js module.
const Node = require("./Node.js");

// A LinkedListNode class extending the Node class to represent nodes in a linked list.
class LinkedListNode extends Node {
    constructor(value, next = null) {
        super(value); 
        this._next = next; // Initialize the reference to the next node in the linked list.
    }

    // Getter method to retrieve the reference to the next node.
    get next() {
        return this._next;
    }

    // Setter method to update the reference to the next node.
    set next(value) {
        this._next = value;
    }
}

// A LinkedList class representing a basic linked list data structure.
class LinkedList {
    constructor(head = null) {
        this._head = head; // Initialize the reference to the head node of the linked list.
    }

    // Method to insert a new node into the linked list.
    insertNode(node) {
        if (this._head === null) {
            this._head = node; // If the linked list is empty, set the new node as the head.
        } else {
            this.insertToExistingNode(node, this._head); // Otherwise, insert the node recursively.
        }
    }

    // Method to recursively insert a new node after an existing node in the linked list.
    insertToExistingNode(node, existingNode) {
        if (existingNode.next === null) {
            existingNode.next = node; // If the next node is null, set the new node as the next node.
        } else {
            this.insertToExistingNode(node, existingNode.next); // Otherwise, continue recursively.
        }
    }

    // Method to delete a node with a specific value from the linked list.
    deleteNode(value) {
        if (this._head === value) {
            this._head = this._head.next; // If the head node has the target value, remove it.
        } else {
            this.deleteNextNode(value, this._head); // Otherwise, delete the next node recursively.
        }
    }

    // Method to recursively delete the next node with a specific value.
    deleteNextNode(value, currentNode) {
        if (currentNode.next.value === value) {
            currentNode.next = currentNode.next.next; // If the next node has the target value, remove it.
        } else if (currentNode.next === null) {
            throw new Error("Provided value is not in the linked list"); // If next node is null, value not found.
        } else {
            this.deleteNextNode(value, currentNode.next); // Otherwise, continue recursively.
        }
    }

    // Method to search for a node with a specific value in the linked list.
    search(value, currentNode = this._head) {
        if (currentNode === null) {
            return false; // If current node is null, value not found.
        } else if (currentNode.value === value) {
            return true; // If current node has the target value, value found.
        } else {
            return this.search(value, currentNode.next); // Otherwise, continue searching recursively.
        }
    }

    // Method to detect whether the linked list has a cycle using Floyd's Cycle Detection Algorithm (Tortoise and Hare algorithm)
    hasCycle() {
        let slowPointer = this._head; // Initialize slow pointer at the head of the linked list.
        let fastPointer = this._head; // Initialize fast pointer at the head of the linked list.
        while (fastPointer.next.next) { // Iterate through the linked list using two pointers.
            slowPointer = slowPointer.next; // Move slow pointer one step at a time.
            fastPointer = fastPointer.next.next; // Move fast pointer two steps at a time.
            if (slowPointer.value === fastPointer.value) { // If slow and fast pointers meet, cycle detected.
                return true;
            }
        }
        return false; // If fast pointer reaches the end, no cycle detected.
    }
}

module.exports = { LinkedList, LinkedListNode };
