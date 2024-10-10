import {Node} from "./node.mjs";

class Tree {
    constructor(array) {
        this.array = this.removeDuplicates(array).sort(function(a, b){return a - b});;
        this.root = this.buildTree(this.array);
        console.log(this.array)
    }

    removeDuplicates(arr) {
        return [...new Set(arr)];
    }

    buildTree(array, start = 0, end = array.length - 1) {
        if (start > end) return null;

        let midIndex = start + Math.floor((end - start) / 2);
        let root = new Node();

        root.value = array[midIndex];
        root.left = this.buildTree(array, start, midIndex - 1);
        root.right = this.buildTree(array, midIndex+1, end);

        return root;
        
    }

    printTree(node, prefix = "", isLeft = true) {
        if (node === null) {
            return;
          }
          if (node.right !== null) {
            this.printTree(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
          }
          console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
          if (node.left !== null) {
            this.printTree(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }

    insert(value, root = this.root) {
        if (value > root.value) {
            if (root.right === null) {
                root.right = new Node();
                root.right.value = value;
            } else {
                this.insert(value, root.right);
            }
        } else {
            if (root.left === null) {
                root.left = new Node();
                root.left.value = value;
            } else {
                this.insert(value, root.left);
            }
        }
    }

    find(value, root = this.root) {
        if (root === null) {
            return null;
        } else if (root.value === value) {
            return root;
        } else if (value > root.value) {
            return this.find(value, root.right);
        } else {
            return this.find(value, root.left);
        } 
    }

    deleteItem(value, root = this.root) {
        if (root === null) {
            return null;
        }

        if (root.value > value) {
            root.left = this.deleteItem(value, root.left);
        } else if (root.value < value) {
            root.right = this.deleteItem(value, root.right);
        } else {
            if (root.left === null && root.right === null) {
                return null;
            } else if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            } else {
                function getSuccessor(curr) {
                    debugger
                    curr = curr.right;
                    while (curr !== null && curr.left !== null) {
                        curr = curr.left;
                    }
                    return curr;
                }

                let succ = getSuccessor(root);
                root.value = succ.value;
                root.right = this.deleteItem(succ.value, root.right);
            }
        }
        return root;
    }
}

let test = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
test.deleteItem(4)
test.printTree(test.root);