

class Queue {
    constructor() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }

    enqueue(element) {
        this.items.push(element);
    }

    isEmpty() {
        return this.items.length === 0;
    }

    front() {
        if (this.isEmpty()) {
            return 'not there'
        }
        return this.items[0]
    }

    printAll() {
        let queue =''
        for (let i = 0; i < this.size(); i++) {
            queue += this.items[i] + ", ";
        }
        console.log(queue);
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'full'
        }
        return this.items.shift(); 
    }
}

const queue = new Queue();

console.log('enqueue : 2,2,3,4,5,');
console.log('dequeue :');
queue.enqueue(2);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
queue.dequeue();
console.log('all elements');
queue.printAll()


class CricularQueue {
    constructor(n) {
        this.queue = [];
        this.size = n
    }

    enQueue(value) {
        if (this.size === this.queue.length) {
            return false;
        }
        this.queue.push(value);
        return true;
    }

    deQueue() {
        if (this.queue.length === 0) {
            return false;
        }
        this.queue.shift();
        return true
    }

    front() {
        if (this.queue.length === 0) {
            return false;
        }
        return this.queue[0]
    }
    rear() {
        if (this.queue.length === 0) {
            return false;
        }
        return this.queue[this.queue.length - 1];
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    isFull() {
        return this.queue.length === this.size;
    }
}

const cqueue = new CricularQueue(3);

console.log('circular queue :');
cqueue.enQueue(1);
cqueue.enQueue(2);
cqueue.enQueue(3);
cqueue.deQueue()
console.log(cqueue.front())
console.log(cqueue.rear())


//stack using Queue


let MyStack = function () {
    this.queue1 = [];
    this.queue2 = [];
}

MyStack.prototype.push = function (x) {
    this.queue1.push()
}