

/**
 * A Queue class representing a basic queue data structure.
 */
class Queue {
    /**
     * Constructor function that initializes an empty queue.
     */
    constructor() {
        /**
         * Array to store nodes in the queue.
         * @type {Array}
         * @private
         */
        this._nodes = []; // Initialize an array to store nodes.
    }

    /**
     * Getter method for retrieving the array of nodes in the queue.
     * @return {Array} The array of nodes.
     */
    get nodes() {
        return this._nodes;
    }

    /**
     * Method to add a new node to the end of the queue.
     * @param {*} node - The node to add to the queue.
     */
    enqueue(node) {
        this._nodes.push(node); // Add the node to the end of the array.
    }

    /**
     * Method to remove and return the first node from the queue.
     * @return {*} The first node in the queue.
     */
    dequeue() {
        return this._nodes.shift(); // Remove and return the first element of the array.
    }

    /**
     * Method to return the value of the first node in the queue without removing it.
     * @return {*} The value of the first node.
     */
    peek() {
        return this._nodes[0]; // Return the first element of the array.
    }
}

module.exports = Queue;