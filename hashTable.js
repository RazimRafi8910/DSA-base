
class HashTable{
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        // this.table[index] = value;
        let item = this.table[index];
        if (!item) {
            this.table[index] = [[key, value]];
        } else {
             //[key ,value]
             let sameKeyItem = item.find(item => item[0] === key);
             if (sameKeyItem) {
                 sameKeyItem[1] = value;
             } else {
                 item.push([key, value]);
             }
        }
    }
    get(key) {
        const index = this.hash(key);
        // return this.table[index];
        let item = this.table[index];
        if (item) {
            let sameKeyItem = item.find(item => item[0] === key);
            if (sameKeyItem) {
                return sameKeyItem[1];
            }
        }
        return undefined;
    }
    remove(key) {
        const index = this.hash(key);
        // this.table[index] = undefined;
        let item = this.table[index];
        if (item) {
            let sameKeyItem = item.find(item => item[0] === key);
            if (sameKeyItem) {
                item.splice(item.indexOf(sameKeyItem), 1);
            }
        }
    }
    display() {
        for (let i = 0; i < this.table.length; i++){
            if (this.table[i]) {
                console.log(i + this.table[i]);
            }
        }
    }
}

const table = new HashTable(50);

table.set('age', 19);
table.set('name', 'razim');
table.set('place', 'kannur');
console.log('all the values :')
table.display()


function containsDuplicate(nums) {
    let set = new Set()
    for(let i=0; i<nums.length; i++){
        if(set.has(nums[i])){
            return true
        }
        set.add(nums[i])
    }
    
    return false
}

var containsNearbyDuplicate = function(nums, k) {
    let obj ={};
    let result = false;
    for(let i=0; i<nums.length; i++){
        if(obj[nums[i]] !== undefined && i- obj[nums[i]] <= k){
            return true
        }
        obj[nums[i]] = i
    }
    return false
};

console.log('return the duplicate element : [1,2,3,1]')
console.log(containsDuplicate([1, 2, 3, 1]))
console.log('return the Near by Duplicate : [1,2,3,1,2,3] k =2')
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));