// A Queue class representing a basic queue data structure.

class Queue {
    // Constructor function that initializes an empty queue.
    constructor() {
        this._nodes = []; // Initialize an array to store nodes.
    }

    // Getter method for retrieving the array of nodes in the queue.
    get nodes() {
        return this._nodes;
    }

    // Method to add a new node to the end of the queue.
    enqueue(node) {
        this._nodes.push(node); // Add the node to the end of the array.
    }

    // Method to remove and return the first node from the queue.
    dequeue() {
        return this._nodes.shift(); // Remove and return the first element of the array.
    }

    // Method to return the value of the first node in the queue without removing it.
    peek() {
        return this._nodes[this._nodes.length - 1]; // Return the last element of the array.
    }
}
module.exports = Queue