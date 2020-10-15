function breadthFirstSearchRecursve(queue, list) {
    if (!queue.length) {
        return list
    }
    const currentNode = queue.shift()
    list.push(currentNode.value)

    if (currentNode.left) {
        queue.push(currentNode.left)
    }
    if (currentNode.right) {
        list.push(currentNode.right)
    }
    return this.breadthFirstSearchRecursve(queue, list)
}