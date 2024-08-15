class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new TreeNode(value);
      if (!this.root) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    getMaxDepth(node = this.root) {
      if (!node) {
        return 0;
      }
      const leftDepth = this.getMaxDepth(node.left);
      const rightDepth = this.getMaxDepth(node.right);
      return 1 + Math.max(leftDepth, rightDepth);
    }
  
    isBalanced(node = this.root) {
      if (!node) {
        return true;
      }
      const leftDepth = this.getMaxDepth(node.left);
      const rightDepth = this.getMaxDepth(node.right);
      return (
        Math.abs(leftDepth - rightDepth) <= 1 &&
        this.isBalanced(node.left) &&
        this.isBalanced(node.right)
      );
    }
  }
  
  // Example usage:
const tree = new BinaryTree();
  console.log('insert :10,5,15,3,7,12,17')
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  tree.insert(12);
  tree.insert(17);
  
  console.log("Max Depth:", tree.getMaxDepth()); // Output: 3
  console.log("Is Balanced:", tree.isBalanced()); // Output: true
  