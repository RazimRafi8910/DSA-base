
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    };

    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) return false
    }
    return true
};

function largestOddNumber(num) {
    let right = num.length - 1;
    if(Number(num[right])%2 !== 0 ){
           return num;
       }
   while(right>=0){
       if(Number(num[right])%2 !== 0){
           console.log(right)
           return  num.substr(0,right+1);
       } else {
           right--;
       }
   }
   
   return ''
}

function percentageOfletter(s,letter) {
    let count = 0;
    for(let i=0; i<s.length; i++){
        if(s[i]===letter){
            count+=1;
        }
    };
    let result = (count/s.length)*100
    let rounded = Math.floor(result)
    return rounded;
}

let namee = 'razim'

console.log(namee.includes('az'));

console.log('anagram of string :');
console.log(isAnagram("anagram","nagaram"));
console.log('find the larget odd number in string');
console.log(largestOddNumber("52"));
console.log('percentage of a letter in string :');
console.log(percentageOfletter("foobar","0"));