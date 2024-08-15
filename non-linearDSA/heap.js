

class MinHeap{
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftIndex(index) {
        return 2 * index + 1;
    }

    getRightIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    builtArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.heap.push(arr[i]);
            this.heapUp()
        }
    }

    insert(value) {
            this.heap.push(value);
            this.heapUp()
    }


    removeMin() {
        if (this.heap.length === 0) {
            return false;
        }

        let min = this.heap[0];
        let last = this.heap.pop()
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapDown()
        }
        return min;
    }

    heapUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let ParentIndex = this.getParentIndex(index);
            if (this.heap[ParentIndex] > this.heap[index]) {
                this.swap(ParentIndex, index);
                index = ParentIndex;
            } else {
                break;
            }
        }
    }

    heapDown() {
        let index = 0;
        let length = this.heap.length;
        while (index < length) {
            let leftChild = this.getLeftIndex(index);
            let rightChild = this.getRightIndex(index);
            let small = index;

            if (leftChild < length && this.heap[leftChild] < this.heap[small]) {
                small = leftChild;
            }

            if (rightChild < length && this.heap[rightChild] < this.heap[small]) {
                small = rightChild;
            }

            if (small !== index) {
                this.swap(small, index);
                index = small
            } else {
                break;
            }
        }
    }
}


const heap = new MinHeap();
console.log('Min Heap')
console.log('insert : 7,1,4,2,3,5,6')
heap.insert(7)
heap.insert(1)
heap.insert(4)
heap.insert(2)
heap.insert(3)
heap.insert(5)
heap.insert(6)
console.log('heap remove min :')
console.log(heap.removeMin())
// heap.builtArray([7, 1, 4, 2, 3, 5, 6]);  
console.log('heap :')
console.log(heap.heap)


class MaxHeap{
    constructor() {
        this.heap = []
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftIndex(index) {
        return 2 * index + 1;
    }

    getRightIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    insert(value) {
        this.heap.push(value);

        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = this.getParentIndex(index);
            if (this.heap[parent] < this.heap[index]) {
                this.swap(parent, index);
                index = parent;
            } else {
                break;
            }
        }
    }

    removeMax() {
        let max = this.heap[0];
        let last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            let index = 0;
            let length = this.heap.length;
            while (index < length) {
                let leftChild = this.getLeftIndex(index);
                let rightChild = this.getRightIndex(index);
                let large = index;

                if (leftChild < length && this.heap[leftChild] > this.heap[large]) {
                    large = leftChild;
                }

                if (rightChild < length && this.heap[rightChild] > this.heap[large]) {
                    large = rightChild;
                }

                if (large !== index) {
                    this.swap(large, index);
                    index = large;
                } else {
                    break;
                }
            }       
        }
        return max;
    }

    builtMaxHeap(arr) {
        const n = arr.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--){
            this.heapify(arr,n,i)
        }
    }

    heapify(arr, n, i) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            this.heapify(arr, n, largest);
        }
    }

    //heap sort
    heapSort(arr) {
        this.builtMaxHeap(arr);

        for (let i = arr.length - 1; i > 0; i--){
            [arr[0], arr[i]] = [arr[i], arr[0]];
            this.heapify(arr, i, 0);
        }
        return arr
    }
}

const maxHeap = new MaxHeap();
console.log('Heap Max')
console.log('insert : 5,2,3,6,1')
maxHeap.insert(5)
maxHeap.insert(2)
maxHeap.insert(3)
maxHeap.insert(6)
maxHeap.insert(1)
console.log('remove max :');
console.log(maxHeap.removeMax())
console.log('heap :')
console.log(maxHeap.heap)

console.log(maxHeap.heapSort([2, 1, 4, 3, 6, 5, 7]));

let array = [1, 2, 3, 4, 5]
console.log(array);

let arry = [1, 2, 3, 4, 5];
console.log('this is the array we create by :' + arry);


// complexity :-
//  time- build = O(n);
//  space- build = O(1);

// time = insert = O(log n)
// space = insert = O(1)

// time = remove = O(log n)
// space = remove = O(1)
