
function multiply(arr) {
    if (arr.length <= 0) {
        return 1;
    } else {
        return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1));
    }
}

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial( n - 1);
    }
}

function rangeOfNumber(start, end) {
    if (end < start) {
        return []
    } else {
        let number = rangeOfNumber(start, end - 1);
        number.push(end);
        return number;
    }
}

function array(num) {
    if (num == 0) {
        return 1;
    } else {
        return num * array(num - 1);
    }
}

function isPalindrome(number) {
    return number.toString().split('').reverse().join('') == number.toString()
}

function fibonacci(num) {
    if (num <= 1) return num;
        return fibonacci(num - 1) + fibonacci(num - 2);
        
}

function reverseString(string) {
    if (string.length == 0) {
        return '';
    } else {
        return reverseString(string.substr(1)) + string.charAt(0);
    }
}

function multiplyTable(n,num) {
    if (n > 10) {
        return;
    } else {
        console.log(`${num} * ${n} = `+ n*num)
        return multiplyTable(n + 1, num);
    }
}


function evenNumber(arr, index = 0, result = []) {
    if (index >= arr.length) {
        return result;
    } else {
        if (arr[index] % 2 === 0) {
            result.push(arr[index]);
        }
        return evenNumber(arr, index + 1, result);
    }
}


console.log('Recursion multipluTable :');
console.log(multiplyTable(1,5));
console.log('Recursion reverseString :');
console.log(reverseString('hello'));
console.log('Recursion fibonacci :');
console.log(fibonacci(5));
console.log('Recursion isPalindrome :');
console.log(isPalindrome(151));
console.log('Recursion rangeOfNumber :');
console.log(rangeOfNumber(1,5));