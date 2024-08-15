


function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        let min = i;
        for (let j = i; j < n; j++){
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}

// time complexity = O(n^2)
// space complexity = O(1)

console.log('sort the array : [6, 1, 4, 2, 3, 5, 2, 5]')
console.log(selectionSort([6, 1, 4, 2, 3, 5, 2, 5]));