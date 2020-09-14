class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.previous = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            previous: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)
        newNode.previous = this.tail
        this.tail.next = newNode
        this.next = newNode
        return this
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head.previous = newNode
        this.head = newNode
        this.length++
        return this
    }

    printList() {
        const array = []
        let currentNode = this.head
        while (currentNode) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }
    
    insert(index, value) {
        if (index === 0) {
            return this.prepend(value)
        }
        if (index >= this.length) {
            return this.append(value)
        }
        const newNode = new Node(value)
        let current = this.head
        for (let i=0; i < index; i++) {
            current = current.next
        }
        newNode.next = current.next
        current.next.previous = newNode
        newNode.previous = current
        current.next = newNode
        this.length++
        return this
    }

    remove(index) {
        let current = this.head
        let next = current.next
        for (let i=1; i < index; i++) {
            current = current.next
            next = current.next
        }
        current.next = next.next
        this.length--
        return this
    }

    reverse() {
        if (!this.head.next) {
            return this.head
        }
        let first = this.head
        let second = first.next
        this.tail = this.head
        while (second) {
            let temp = second.next
            second.next = first
            first = second
            second = temp
        }
        this.head.next = null
        this.head = first
        
    }
}