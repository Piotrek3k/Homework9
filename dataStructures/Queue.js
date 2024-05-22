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

module.exports = Queue