const Node = require("./Node.js")

class BinaryTreeNode extends Node {
    constructor(value){
        super(value)
        this._leftChild = null
        this._rightChild = null
    }
    get leftChild(){ return this._leftChild}
    set leftChild(value) { this._leftChild=value}
    get rightChild(){ return this._rightChild}
    set rightChild(value) {this._rightChild = value}
}

class BinaryTree {
    constructor(){
        this._root = null
    }
    insertNode(newNode, existingNode = this._root) {
        if(this._root === null) {
            this._root = newNode
        }
        else{
            if(newNode.value >= existingNode.value)
                {
                    if(existingNode.rightChild === null){
                        existingNode.rightChild=newNode;
                    }
                    else{
                        this.insertNode(newNode, existingNode.rightChild)
                    }
                }
            else{
                    if(existingNode.leftChild === null){
                        existingNode.leftChild=newNode;
                    }
                    else{
                        this.insertNode(newNode, existingNode.leftChild)
                    }
            }
        }
        
    }
    search(value, currentNode = this._root) {
        if(currentNode.value === value)
            {
                return true
            }
        else if(value > currentNode.value)
            {
                if(currentNode.rightChild === null){
                    return false
                }
                else {
                    return this.search(value,currentNode.rightChild)
                }
            }
        else {
                if(currentNode.leftChild === null){
                    return false
                }
                else {
                    return this.search(value,currentNode.leftChild)
                }
        }
    }

    traverseInOrder(node = this._root, result = []) {
        if (node !== null) {
            this.traverseInOrder(node.leftChild, result);   // Traverse left subtree
            result.push(node.value);                        // Visit current node
            this.traverseInOrder(node.rightChild, result);  // Traverse right subtree
        }
        return result;
    }
    traversePreOrder(node = this._root, result = []) {
        if (node !== null) {
            result.push(node.value);                         // Visit current node
            this.traversePreOrder(node.leftChild, result);   // Traverse left subtree
            this.traversePreOrder(node.rightChild, result);  // Traverse right subtree
        }
        return result;
    }
    traversePostOrder(node = this._root, result = []) {
        if (node !== null) {
            this.traversePostOrder(node.leftChild, result);   // Traverse left subtree
            this.traversePostOrder(node.rightChild, result);  // Traverse right subtree
            result.push(node.value); // Visit current node
        }
        return result;
    }
    isBinarySearchTree() {
        const array = this.traverseInOrder()    // using the fact that traversing bst in-order returns sorted array
        function isSorted(arr) {
            for (let i = 1; i < arr.length; i++) {
                if (arr[i - 1] > arr[i]) {
                    return false;
                }
            }
            return true;
        }
        return isSorted(array)
    }
        
        
}

module.exports = {BinaryTree,BinaryTreeNode}