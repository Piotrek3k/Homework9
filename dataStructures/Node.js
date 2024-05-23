
/**
 * A Node class representing a basic node in a data structure.
 */
class Node {
    /**
     * Constructor function that initializes a node with a given value.
     * @param {*} value - The value to assign to the node.
     */
    constructor(value) {
        /** 
         * The value of the node.
         * @type {*}
         * @private
         */
        this._value = value; // Initialize the value of the node.
    }
    
    /**
     * Getter method for retrieving the value of the node.
     * @return {*} The value of the node.
     */
    get value() {
        return this._value;
    }
    
    /**
     * Setter method for updating the value of the node.
     * @param {*} value - The new value to assign to the node.
     */
    set value(value) {
        this._value = value;
    }
}

module.exports = Node;