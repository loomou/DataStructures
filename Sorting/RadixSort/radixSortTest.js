import {radixSort} from "./radixSort.js";

function createNonSortedArray(){
  let array = [];
  for (let i = 5; i > 0; i--){
    array.push(i);
  }
  return array;
}

const array = radixSort(createNonSortedArray());
console.log(array);
