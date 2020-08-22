import MinHeap from "./MinHeap.js";
import {defaultCompare, reverseCompare} from "../util.js";

export default class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.compareFn = reverseCompare(compareFn);
  }
}
