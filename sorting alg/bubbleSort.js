
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n - i - 1; j++){
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr
}
// bast case (already sorted) = O(n)
// avarage time complexity = O(n^2)
// worst time complexity = O(n^2)

var sortPeople = function (names, heights) {
    for (let i = 0; i < names.length; i++) {
        for (let j = 0; j < names.length - i - 1; j++) {
            if (heights[j] < heights[j + 1]) {
                [heights[j], heights[j + 1]] = [heights[j + 1], heights[j]];
                [names[j], names[j + 1]] = [names[j + 1], names[j]];
            }
        }
    }
    return names
};

console.log('sort the array : [3, 1, 4, 2, 5, 2, 5]')
console.log(bubbleSort([3, 1, 4, 2, 5, 2, 5]));
console.log('sort the people based on the given hight')
console.log(sortPeople(["Mary","John","Emma"],[180,165,170]));