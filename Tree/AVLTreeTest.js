import AVLTree from "./AVLTree.js";

const AVL = new AVLTree();

const printNode = (value) => console.log(value);

AVL.insert(11);

AVL.insert(7);
AVL.insert(15);
AVL.insert(5);
AVL.insert(3);
AVL.insert(9);
AVL.insert(8);
AVL.insert(10);
AVL.insert(13);
AVL.insert(12);
AVL.insert(14);
AVL.insert(20);
AVL.insert(18);
AVL.insert(25);
AVL.insert(6);
AVL.insert(27);
AVL.insert(30);
AVL.insert(46);
AVL.insert(70);

console.log(AVL);
AVL.inOrderTraverse(printNode)
