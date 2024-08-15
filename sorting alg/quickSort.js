

function quikSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++){
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quikSort(left), pivot, ...quikSort(right)];
}

console.log('sort the array : [2, 3, 5, 1, 3, 6, 4]')
console.log(quikSort([2, 3, 5, 1, 3, 6, 4]))