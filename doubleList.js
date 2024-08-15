class Node{
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addFirst(value) {
        const node = new Node(value);
        node.next = this.head
        if (this.head) {
            this.head.prev = node;
        }
        this.head = node
        this.size++
    }

    addEnd(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        node.prev = current
        current.next = node;
    }

    addAtIndex(value,index) {
        if (index < 0  ) {
            console.log('invalid');
            return
        }

        const node = new Node(value);
        if (index === 0) {
            node.next = this.head
        if (this.head) {
            this.head.prev = node;
            }
            this.head = node;
        }
    let current = this.head;
    for (let i = 0; i < index-1; i++){
        current = current.next;
    }
    node.prev = current;
    node.next = current.next;
    if (current.next) {
        current.next.prev = node
    }
    current.next = node;
    this.size++
}

    removeFirst() {
        if (!this.head) {
            return
        }
        this.head = this.head.next
        if (this.head) {
            this.head.prev = null;
        }
    }
    removeLast() {
        if (!this.head) {
            return;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next
        }
        current.next = null;
    }
    reomveAtIndex() {
        if (index < 0 || index > this.size) {
            console.log('invalid');
            return
        }
        let current = this.head
        for (let i = 0; i < index-1; i++){
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
            if (current.next) {
                current.next.prev = current;
            }
        }
    }
    printAll() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }

    }
}

let list = new LinkedList();

list.addFirst(11)
list.addFirst(12)
list.addEnd(14)
list.addAtIndex(13,2)
list.addEnd(15)
list.printAll()