import {findMinValue, findMaxValue} from "./minMaxSearch.js";

function createNonSortedArray() {
  let array = [];
  for (let i = 5; i > 0; i--) {
    array.push(i);
  }
  console.log(array);
  return array;
}

const array1 = findMinValue(createNonSortedArray());
console.log(array1);
const array2 = findMaxValue(createNonSortedArray());
console.log(array2);
