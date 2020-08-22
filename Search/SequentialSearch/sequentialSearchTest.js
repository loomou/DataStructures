import {sequentialSearch} from "./sequentialSearch.js";

function createNonSortedArray() {
  let array = [];
  for (let i = 5; i > 0; i--) {
    array.push(i);
  }
  console.log(array);
  return array;
}

const array = sequentialSearch(createNonSortedArray(), 3);
console.log(array);
