
class TrieNode{
    constructor() {
        this.childern = {};
        this.isEndWord = false;
    }
}


class Trie{
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.childern[char]) {
                current.childern[char] = new TrieNode();
            }
            current = current.childern[char];
        }
        current.isEndWord = true;
    }

    search(word) {
        let current = this.root;
        let foundWord = '';
        for (let char of word) {
            if (!current.childern[char]) {
                return false;
            }
            current = current.childern[char]
            foundWord += char;
        }
        return foundWord;
    }

    constain(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.childern[char]) {
                return false;
            }
            current = current.childern[char]
        }
        return current.isEndWord;
    }

    startWith(prefix) {
        let current = this.root;
        for (let char of prefix) {
            if (!current.childern[char]) {
                return false;
            }
            current = current.childern[char];
        }
        return true;
    }
}


const trie = new Trie();

console.log('insert words : razim,apple')
trie.insert('razim');
trie.insert('apple');
console.log('start with prefix: app')
console.log(trie.startWith('app'))
console.log('search :razim')
console.log(trie.search('razim'));
console.log('contain with app :')
console.log(trie.constain('razim'))

