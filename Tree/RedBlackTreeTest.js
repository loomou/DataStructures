import RedBlackTree from "./RedBlackTree.js";

const RBT = new RedBlackTree();

const printNode = (value, color) => console.log(value, color === 0 ? "red" : "black");

RBT.insert(11);

RBT.insert(7);
RBT.insert(15);
RBT.insert(5);
RBT.insert(3);
RBT.insert(9);
RBT.insert(8);
RBT.insert(10);
RBT.insert(13);
RBT.insert(12);
RBT.insert(14);
RBT.insert(20);
RBT.insert(18);
RBT.insert(25);
RBT.insert(6);

console.log(RBT);
RBT.inOrderTraverse(printNode)
