// pre order

function DFSPreOrder() {
    return traversePerOrder(this.root, [])
}

function traversePreOrder(node, list) {
    list.push(node.value)
    if(node.left) {
        traversePreOrder(node.left, list)  
    }
    if(node.right) {
        traversePreOrder(node.right, list)
    }
    return list
}

// Post Order

function DFSPostOrder() {
    return traversePostOrder(this.root, [])
}

function traversePostOrder(node, list) {
    if(node.left) {
        traversePostOrder(node.left, list)
    }
    if(node.right) {
        traversePostOrder(node.right, list)
    }
    list.push(node.value)
    return list
}

// in order

function DFSInOrder(){
    return traverseInOrder(this.root, [])
}

function traverseInOrder(node, list) {
    if(node.left) {
        traverseInOrder(node.left, list))
    }
    list.push(node.value)
    if(node.right) {
        traverseInOrder(node.right, list)
    }
    return list
}