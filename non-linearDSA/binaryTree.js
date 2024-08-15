
class Node{
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinaryTreeSearch{
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    searchNode(root, value) {
        if (!root) {
            return false;
        } else {
            if (value === root.value) {
                return true;
            } else if(value < root.value) {
                return this.searchNode(root.left, value);
            } else {
                return this.searchNode(root.right, value);
            }
        }
    }

    //Depth first search(DFS)

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inorder(root) {
        if (root) {
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    //breadth first search  
    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let current = queue.shift() 
            console.log(current.value);
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
    }

    //Depth first search
    dfs() {
        const stack = [this.root];
        let total = 0;
        while (stack.length >0) {
            let current = stack.pop();
            // console.log(current.value);
            total += current.value;
            if (current.right !== null) {
                stack.push(current.right);
            }
            if (current.left !== null) {
                stack.push(current.left);
            }
        }
        return total
    }

    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left);
        }
    }

    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root,value)
    }

    sum() {
        let total = 0;
    let queue = [this.root];
    while (queue.length) {
        let current = queue.shift();
        total += current.value;
        if (current.left !== null) {
            queue.push(current.left)
        }

        if (current.right !== null) {
            queue.push(current.right)
        }
    }
    return total;
    }

    deleteNode(root, value) {
        if (root === null) {
            return root;
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            } else if(!root.right) {
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root
    }

}


const tree = new BinaryTreeSearch();
console.log('insert :10,5,15,3,7')
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
console.log('tree mininum value :');
console.log(tree.min(tree.root));
console.log('traversal post order: ')
console.log(tree.levelOrder(tree.root));
console.log('traversal inorder:')
console.log(tree.inorder(tree.root));
console.log('traversal pre order:')
console.log(tree.preOrder(tree.root));
console.log('SUM:')
console.log(tree.sum());

