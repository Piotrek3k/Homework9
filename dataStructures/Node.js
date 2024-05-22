// A Node class representing a basic node in a data structure.

class Node {
    // Constructor function that initializes a node with a given value.
    constructor(value) {
        this._value = value; // Initialize the value of the node.
    }
    
    // Getter method for retrieving the value of the node.
    get value() {
        return this._value;
    }
    
    // Setter method for updating the value of the node.
    set value(value) {
        this._value = value;
    }
}

module.exports = Node