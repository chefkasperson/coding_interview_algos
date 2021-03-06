class QElement {
    constructor(element, priority) {
        this.element = element
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.items = []
    }

    enqueue(element, priority) {
        let qElement = new QElement(element, priority)
        let contain = false

        for (let i=0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                this.items.splice(i, 0, qElement)
                contain = true
                break
            }
        }

        if (!contain) {
            this.items.push(qElement)
        }
    }
}
