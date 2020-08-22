import {selectionSort} from "./selectionSort.js";

function createNonSortedArray() {
  let array = [];
  for (let i = 5; i > 0; i--) {
    array.push(i);
  }
  return array;
}

const array = selectionSort(createNonSortedArray());
console.log(array);
