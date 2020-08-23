import BinarySearchTree from "./BinarySearchTree.js";
import {Compare,defaultCompare} from "../util.js";
import {Node} from "../models/node.js";

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
};

export default class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }

  // 计算节点高度
  getNodeHeight(node) {
    if (node == null) {
      return -1;
    }
    return Math.max(
      this.getNodeHeight(node.left), this.getNodeHeight(node.right)
    ) + 1;
  }

  // 计算节点的平衡因子
  getBalanceFactor(node) {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }

  // 平衡操作————AVL旋转
  // 左-左：向右的单旋转
  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }

  // 右-右：向左的单旋转
  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }

  // 左-右：向右的双旋转
  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }

  // 右-左：向左的双双转
  rotationRL(node) {
    node.left = this.rotationLL(node.right);
    return this.rotationRR(node);
  }

  // 插入节点
  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  insertNode(node, key) {
    if (node == null) {
      return new Node(key);
    } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node;
    }
    // 将树平衡操作
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
        node = this.rotationLL(node);
      } else {
        return this.rotationLR(node);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
        node = this.rotationRR(node);
      } else {
        return this.rotationRL(node);
      }
    }
    return node;
  }

  // 移除节点
  removeNode(node, key) {
    node = super.removeNode(node, key);
    if (node == null) {
      return node;
    }
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      const balanceFactorLeft = this.getBalanceFactor(node.left);
      if (balanceFactorLeft === BalanceFactor.BALANCED || balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationLL(node);
      }
      if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationLR(node.left);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(node.right);
      if (balanceFactorRight === BalanceFactor.BALANCED || balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationRR(node);
      }
      if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationLR(node.right);
      }
    }
    return node;
  }
}
