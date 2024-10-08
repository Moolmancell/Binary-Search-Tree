import {Node} from "./node.mjs";

class Tree {
    constructor() {
        this.root = null;
    }

    buildTree(array, start = 0, end = array.length - 1) {
        let midIndex = Math.floor((end + start) / 2);
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
            prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
          }
          console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
          if (node.left !== null) {
            prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }
}

let test = new Tree();
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
test.root = test.buildTree(array);
//test.printTree(test.root);