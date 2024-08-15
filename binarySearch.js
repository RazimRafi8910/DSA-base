//binary search only works on sorted array

function binearySearch(arr,target) {
    let start = 0;
    let end = arr.length - 1;
    let nums = arr.sort((a, b) => a - b);
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return - 1;
}

function writtedOnVim(){
	let array = [1,2,3,4,5,6,7,8];
    for (let i = 0; i <= array.lenght - 1; i++){
		console.log(array[i]);
	};
	return true
}

function sqrtRoot(x) {
    if (x == 0 || x == 1) {
        return x;
    }
    let start = 0;
    let end = x;
    let result = 0;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        
        if (mid * mid == x) {
            return mid
        } 
        if (mid * mid < x) {
            start = mid + 1;
            result = mid;
        } else {
            end = mid - 1;
        }
    }
    return result;
}

function countOccurrence(nums ,target) {
    let start = 0;
    let end = nums.length - 1;
    let count = 0;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] == target) {
            let left = mid - 1;
            let right = mid;
            while (nums[left] == target && left>= 0) {
                count++;
                left--;
            }
            while (nums[right] == target && left <= nums.length - 1 ) {
                count++;
                right++;
            }
            return count;
        }
        if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return count;
}

console.log('Count Occurrence of Number :[1, 2, 3, 4, 4, 5, 6], target = 4')
console.log("result" + ": " + countOccurrence([1, 2, 3,4, 5, 6, 6, 6], 6));
console.log('find the number :')
console.log(binearySearch([0,1, 2, 3, 4, 5, 6, 7, 8], 6));
console.log('find the squrt of number 16 :')
console.log(sqrtRoot(16));
