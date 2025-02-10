class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

console.log("from vim");

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    getSize() {
        return this.size;
    }
    getHead() {
        return this.head;
    }

    addFirst(value) {
        const node = new Node(value);

        node.next = this.head;
        this.head = node;
        
        this.size++;
    }
    addLast(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        };
        currentNode.next = node;
        this.size++;
    }
    addAtIndex(index, value) {
        if (index < 0 || index > this.size) {
            console.log('invalid index');
            return;
        }

        const node = new Node(value);
        if (index === 0) {
            this.head = node;
            this.next = this.head;
            this.size++;
            return;
        }

        let current = this.head;
        // node just before the specified index
        for (let i = 0; i < index - 1; i++){
            current = current.next;
        }
            //[1,2]->[2,3]->[3,4]
        node.next = current.next;
        current.next = node;
        this.size++
    }

    removeHead() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next; /// next of head
        this.size--;
    }

    remveLast() {
        if (!this.head) {
            return
        }
        let current = this.head;
        while (current.next.next) { // checks the next node's next
            current = current.next;
        }
        current.next = null
        this.size--;
    }
    removeAtIndex(index) {

        if (!this.head) {
            return;
        }

        if (index < 0 || index > this.size) {
            console.log('err')
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++){
            current = current.next;
        };

        if (current.next) {
            current.next = current.next.next
        }
    }

    printAll() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next
        }
    }

    isPalindrome = function() {
        let string = '';
        let rev = ''    
        let node = this.head;
        while(node){
            string += node.val;
            rev = node.val + rev
            node = node.next;
        }
        if(rev !== string){
            return false
        }
        return true
    };

    reverse() {
        let current = this.head;
        let prev = null;
        let nextNode;
        while (current) {
            nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        this.head = prev
    }
    arrayTOList(arr) {
        for (let i = 0; i < arr.length; i++){
            const node = new Node(arr[i]);
            if (!this.head) {
                this.head = node;
                this.size++;
                continue;
            }
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            this.size++;
        }
     }

}

// head means first node>> node = value,next;


let list = new LinkedList()
list.addFirst(1)
list.addFirst(23);
list.addFirst(21);
list.addFirst(34)
console.log(list.getSize())
console.log(list.getHead())
console.log(list.printAll())


