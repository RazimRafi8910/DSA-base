let number = 121;

function isPlaindrom(number) {
    return number.toString() === number.toString().split('').reverse().join('')
}


function fibnaciNumber(n) {
    return n - 1 + n - 2;
} 

function fibRecursion(n) {
    if (n <= 1) return n;

    return fibRecursion(n - 1) + fibRecursion(n - 2);
};


function maxProfit(prices) {
    let min = prices[0];
    let profit = 0;
    for(let i=0; i<prices.length; i++){
        if(min > prices[i]){
            min = prices[i];
        }
        if (prices[i] - min > profit) {
            profit = prices[i] - min;
        }
    }
    return profit
}

function selectionSort(n) {
    for (let i = 0; i < n.length; i++){
        for (let j = i + 1; j < n.length; j++){
            if (n[i] > n[j]) {
                [n[i], n[j]] = [n[j], n[i]];
            };
        }
    }
    return n;
}

var plusOne = function(digits) {
    let number = digits.join('');
    number = Number(number) +1
    return number.toString().split('').map(Number);
};

let array = [1, 2, 3, 4, 5, 6, 7, 3];

console.log('Array Problem: plusOne')
console.log(plusOne([7,6,4,3,1]));
console.log('Array Problem: isPlaindrom')
console.log(isPlaindrom(121));
console.log('Array Problem: fibnaciNumber')
console.log(fibnaciNumber(5));
console.log('Array Problem: selectionSort')
console.log(selectionSort([2,4,1,4,3,6,5]));
