

function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++){
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

//best time complexity =  O(n)
//worst case complexity = O(n^2)
//time complexity = O(1);

console.log('sort the array : 12, 11, 13, 5, 6 ')
console.log(insertionSort([12, 11, 13, 5, 6]));