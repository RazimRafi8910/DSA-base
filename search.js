function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == target) {
            return i;
        }
    }
    return false
}

function kthMissing(arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= k + count) {
            count++;
        }
    }
    return k + count;
}

function substr(needle,haystack) {
    for (let i = 0; i < haystack.length; i++) {
        let m = '';
        if (haystack[i] === needle[0]) {
            for (let j = i; j < needle.length+i; j++) {
                m += haystack[j];
            }
            if (m == needle) {
                return i;
            }
        }
    }
    return -1
}

function globalSearch(arr, target) {
    let num = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == target) {
            num.push(i);
        }
    }
    return num;
}

console.log('find the index of the target :');
console.log(globalSearch([1, 2, 3,6, 4, 5, 6], 6));
console.log('find the first occurence of string :');
console.log(substr("sadbutsad", "sad"));
console.log('find the target number :');
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 5));