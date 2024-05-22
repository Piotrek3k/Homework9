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

class MinMaxStack extends Stack {
    constructor() {
        super()
        this._nodes = [];
        this._values = []
    }
    push(node){
        super.push(node)
        this._values.push(node.value)
        this._values.sort()
    }
    pop(){
        const value = this.peek().value
        this._values = this._values.filter(e => e != value)
        return super.pop() 
    }
    peek(){
        return super.peek()
    }
    getMax(){
        return this._values[this._values.length-1]
    }
    getMin(){
        return this._values[0]
    }
}

module.exports = {Stack, MinMaxStack}