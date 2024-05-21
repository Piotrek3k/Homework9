class Node {
    constructor(value) {
        this._value = value;
    }
    get value() { return this._value; }
    set value(value) { this._value = value; }
}

class Stack {
    constructor(){
        this._nodes = [];
    }
    get nodes() { return this._nodes}
    push(node) { this._nodes.push(node); }
    pop() { 
        if(this._nodes.length > 0) {
            return this._nodes.pop()
        }
        else{
            throw new Error("Stack is empty")
        }
        }
    peek() { 
        return this._nodes[this._nodes.length-1]
    }
            
}

class Queue {
    constructor(){
        this._nodes = [];
    }
    get nodes() { return this._nodes}
    enqueue(node) { 
        this._nodes.push(node) 
    }
    dequeue() {
        return this._nodes.shift()
    }
    peek() { 
        return this._nodes[this._nodes.length-1]
    }
}

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
        
        
}

class GraphEdge {
    // Edge connects two nodes in one direction
    constructor(node1,node2,cost = null) {
        this._node1 = node1
        this._node2 = node2
        this._cost = cost
    }
    set node1(node) {this._node1 = node}
    set node2(node) {this._node2 = node}
    set cost(cost) {this._cost = cost}
    get node1() {return this._node1}
    get node2() {return this._node2}
    get cost() {return this._cost}
    toString() {
        if(this._cost){
            return this._node1._value + "; " + this._node2._value + "; cost: " + this._cost 
        }
        else{
            return this._node1._value + "; " + this._node2._value
        }}
}

class Graph{
    constructor() {
        this._edges = []
        this._nodes = []
    }
    addNode(node) {
        this._nodes.push(node)
        this._nodes.sort()
    }
    addEdge(graphEdge) {
        if(this._nodes.includes(graphEdge._node1) && this._nodes.includes(graphEdge._node2)){
            this._edges.push(graphEdge)
            this._edges.sort()
        }
        else {
            throw new Error("Graph does not contain at least one of provided nodes")
        }
    }
    depthFirstSearch(visited = [], toVisit = [], node = this._nodes[0]) {
        visited.push(node.value)    // adding current node to visited array
        toVisit.shift() // removing current node from toVisit array
        console.log(JSON.stringify(toVisit) + "-------")    
        let newToVisit = [] // intializing another array, that will collect all the nodes connected with current node (besides those in toVisit array)
        this._edges.forEach(edge => {   // checking for every edge    
            if(edge.node1.value === node.value){    
                if(!toVisit.includes(edge.node2) && !visited.includes(edge.node2.value)){
                    newToVisit.push(edge.node2)
                }
            }
        });
        toVisit = newToVisit.concat(toVisit)
        if(visited.length !==0 && toVisit.length === 0){
            return visited
        }
        else{
            return this.depthFirstSearch(visited,toVisit,toVisit[0])
        }
    }
    breadthFirstSearch(visited = [], toVisit = [], node = this._nodes[0]){
        visited.push(node.value)
        toVisit.shift()
        console.log(JSON.stringify(toVisit) + "----")
        this._edges.forEach(edge => {
            if(edge.node1.value === node.value){
                if(!toVisit.includes(edge.node2) && !visited.includes(edge.node2.value)){
                    toVisit.push(edge.snode2)
                }
            }
        });
        if(visited.length !==0 && toVisit.length === 0){
            return visited
        }
        else{
            return this.breadthFirstSearch(visited,toVisit,toVisit[0])
        }
    }
}

class LinkedListNode extends Node {
    constructor(value,next){
        super(value)
        this._next = next
    }
    get next() {return this._next}
    set next(value) {this._next = value}
}
class LinkedList{
    constructor(head = null){
        this._head = head
    }
    insertNode(node) {
        if(this._head === null){
            this._head = node
        } else
        {
            insertToExistingNode(node, this._head)
        }
    }
    insertToExistingNode(node, existingNode) {

            if(existingNode.next === null){
                existingNode.next = node
            }
            else{
                this.insertToExistingNode(node,existingNode.next)
            }

        
    }
    deleteNode(value){
        if(this._head === value){
            this._head = this._head.next
        }
        else{
            if(this._head.next === value){
                this._head.next = this._head.next.next
                
            }
            else{
                deleteNextNode(value,this._head)
            }
            
        }
    }
    deleteNextNode(value, currentNode) {
        if(currentNode._next === value){
            currentNode.next = currentNode.next.next
        }
        else if(currentNode.next === null) {
            throw new Error("Provided value is not in the linked list")
        }
        else{
            deleteNextNode(value,currentNode.next)
        }
    }
    searchValue(value) {
        if(this._head === value){
            return true
        }
        else{
            if(this._head.next === value){
                return true
                
            }
            else{
                searchNextNode(value,this._head)
            }
            
        }
    }
    searchNextValue(value, currentNode) {
        if(currentNode.next === value){
            return true
        }
        else if(currentNode.next === null) {
            return false
        }
        else{
            searchNextNode(value,currentNode.next)
        }
    }
}

module.exports = {Stack, Node, Queue, BinaryTree, BinaryTreeNode,Graph,GraphEdge}
