
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        let mid = Math.floor(arr.length / 2);

        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));

        return merge(left, right);
    }
}

function merge(left, right) {
    let sortedArr = [];

    while (left.length && right.length) {
        if (left[0] > right[0]) {
            sortedArr.push(right.shift());
        } else {
            sortedArr.push(left.shift());
        }
    }
    return [...sortedArr, ...left, ...right];
}

// time comlexity = O(n log n)
//worst comlexity = O(n^2)

console.log('sort the array : [2, 3, 5, 1, 3, 6, 4]')
console.log(mergeSort([2, 3, 5, 1, 3, 6, 4]));