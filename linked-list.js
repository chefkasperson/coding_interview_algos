// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.next = newNode
        return this
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
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
        for (let i=1; i < index; i++) {
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode
        this.length++
        return this
    }
}