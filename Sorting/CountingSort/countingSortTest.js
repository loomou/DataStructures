import {countingSort} from "./countingSort.js";

function createNonSortedArray() {
  let array = [];
  for (let i = 5; i > 0; i--) {
    array.push(i);
  }
  return array;
}

const array = countingSort(createNonSortedArray());
console.log(array);

