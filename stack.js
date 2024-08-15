


class Stack{
    constructor() {
        this.stack = []
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return 'stack is empty'
        }
        return this.stack.pop()
    }

    peek() {
        if (this.isEmpty()) {
            return 'stack is empty' 
        }
        return this.stack[this.size() - 1];
    }

    getValue() {
        if (this.isEmpty()) {
            return 'stack is empty'
        }
        for (let i = 0; i < this.size(); i++){
            console.log(this.stack[i]);
        }
    }
}

const stack = new Stack();

console.log('stack push :1,2,3');
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop()
stack.getValue()

// console.log(stack.isEmpty())
// console.log(stack.peek())



function reverseSentance(string) {
    let s = string.split(' ');
    let stack = [];

    for (let i of s) {
        stack.push(i);
    }
    let result = '';

    while (stack.length) {
        let current = stack.pop();
        if (current) {
            result += " " + current;
        }
    }
    return result.trim();
}

//time complexity = O(n)


function isValid(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++){
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else {
            if (isEmpty(stack)) {
                return false;
            }
            let top =  stack.pop()
            if (s[i] === ')' && top !== '(' || s[i] === '}' && top !== '{' || s[i] === ']' && top !== '[') {
                return false;
            }
        }
    }   
    return stack.length === 0;
};

function isEmpty(stack) {
    return stack.length === 0
}

console.log('check the valid')
console.log(isValid('({})'));
console.log("reverse the Sentance")
console.log(reverseSentance('hello world'));