import {Compare, defaultCompare, DOES_NOT_EXIST} from "../../util.js";
import {quickSort} from "../../Sorting/QuickSort/quickSort.js";

export function binarySearch(array, value, compareFn = defaultCompare) {
  const sortedArray = quickSort(array);
  let low = 0;
  let high = sortedArray.length - 1;
  while (lesserOrEquals(low, high, compareFn)) {
    const mid = Math.floor((low + high));
    const element = sortedArray[mid];
    if (compareFn(element, value) === Compare.LESS_THAN) {
      low = mid + 1;
    } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return DOES_NOT_EXIST;
}

function lesserOrEquals(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}
