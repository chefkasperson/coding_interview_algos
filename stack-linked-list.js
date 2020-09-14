class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    peek() {
        return this.top
    }

    push(value) {
        const newNode = new Node(value)

        if (this.length > 0) {
            newNode.next = this.top
        } else {
            this.bottom = newNode
        }
        this.top = newNode
        this.length++
        return this
    }

    pop() {
        if (!this.top) {
            return null
        }
        if (this.bottom === this.top) {
            this.bottom = null
        }

        this.top = this.top.next
        this.length--
        return this
    }
}