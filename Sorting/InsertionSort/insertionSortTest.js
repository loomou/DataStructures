import {insertionSort} from "./insertionSort.js";

function createNonSortedArray() {
  let array = [];
  for (let i = 5; i > 0; i--) {
    array.push(i);
  }
  return array;
}

const array = insertionSort(createNonSortedArray());
console.log(array);
