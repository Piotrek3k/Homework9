// A Stack class representing a basic stack data structure.

class Stack {
    // Constructor function that initializes an empty stack.
    constructor() {
        this._nodes = []; // Initialize an array to store nodes.
    }

    // Getter method for retrieving the array of nodes in the stack.
    get nodes() {
        return this._nodes;
    }

    // Method to add a new node to the top of the stack.
    push(node) {
        this._nodes.push(node); // Add the node to the end of the array.
    }

    // Method to remove and return the top node from the stack.
    pop() {
        if (this._nodes.length > 0) {
            return this._nodes.pop(); // Remove and return the last element of the array.
        } else {
            throw new Error("Stack is empty"); // Throw an error if the stack is empty.
        }
    }

    // Method to return the value of the top node in the stack without removing it.
    peek() {
        return this._nodes[this._nodes.length - 1]; // Return the last element of the array.
    }
}

// A MinMaxStack class extending the Stack class with additional functionalities to get minimum and maximum values.

class MinMaxStack extends Stack {
    // Constructor function that initializes an empty MinMaxStack.
    constructor() {
        super(); 
        this._values = []; // Initialize an array to store values for calculating min and max.
    }

    // Method to add a new node to the top of the stack and update min and max values accordingly.
    push(node) {
        super.push(node); // Call the push method of the parent class to add the node to the stack.
        this._values.push(node.value); // Add the value of the node to the values array.
        this._values.sort(); // Sort the values array.
    }

    // Method to remove and return the top node from the stack and update min and max values accordingly.
    pop() {
        const value = this.peek().value; // Get the value of the top node.
        this._values = this._values.filter(e => e !== value); // Remove the value from the values array.
        return super.pop(); // Call the pop method of the parent class to remove and return the node from the stack.
    }

    // Method to return the maximum value in the stack.
    getMax() {
        return this._values[this._values.length - 1]; // Return the last element of the values array.
    }

    // Method to return the minimum value in the stack.
    getMin() {
        return this._values[0]; // Return the first element of the values array.
    }
}

module.exports = { Stack, MinMaxStack };