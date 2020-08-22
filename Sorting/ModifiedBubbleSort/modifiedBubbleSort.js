const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
}

function defaultCompare(a, b) {
    if (a < b) {
        return 0
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

function swap(array, a, b) {
    const temp = array[a]
    array[a] = array[b]
    array[b] = temp
}

function modifiedBubbleSort(array, compareFn = defaultCompare) {
    const {length} = array
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
                swap(array, j, j + 1)
            }
        }
    }
    return array
}