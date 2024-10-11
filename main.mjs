import { Tree } from "./binary-search-tree.mjs";

let test = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
test.deleteItem(4)
test.printTree(test.root);