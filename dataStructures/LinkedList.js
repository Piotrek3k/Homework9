const Node = require("./Node.js")

class LinkedListNode extends Node {
    constructor(value,next = null){
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
            this.insertToExistingNode(node, this._head)
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
    deleteNode(value) {
        if(this._head === value){
            this._head = this._head.next
        }
        else{
            this.deleteNextNode(value,this._head)
        }
    }
    deleteNextNode(value, currentNode) {
        if(currentNode.next.value === value) {
            currentNode.next = currentNode.next.next
        }
        else if(currentNode.next === null) {
            throw new Error("Provided value is not in the linked list")
        }
        else{
            this.deleteNextNode(value,currentNode.next)
        }
    }
    search(value,currentNode = this._head){
        if(currentNode === null){
            return false
        }
        else if(currentNode.value === value){
            return true
        }
        else{
            return this.search(value,currentNode.next)
        }
    }
    hasCycle() {
        let slowPointer = this._head
        let fastPointer = this._head 
        while(fastPointer.next.next) {
            slowPointer = slowPointer.next
            fastPointer = fastPointer.next.next
            if(slowPointer.value === fastPointer.value) {
                return true
            }
        }
        return false
    }
}

module.exports = {LinkedList,LinkedListNode}