import {bucketSort} from "./bucketsSort.js";

function createNonSortedArray() {
  let array = [];
  for (let i = 5; i > 0; i--) {
    array.push(i);
  }
  return array;
}

const array = bucketSort(createNonSortedArray());
console.log(array);
