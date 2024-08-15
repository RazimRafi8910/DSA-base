//Adjacency Matrix
const matrix = [
    [0,1,0],
    [1,0,1],
    [0,1,0]
]


/*
Adjacency List
Vertices are stored in a map like data structure and every vertex sotres
a list of its adjacent vertices

    b
   / \
  a   c
  
*/

let adjacencyList = {
    'A':['B'],
    'B':['A','C'],
    'C':['B']
}


class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + ' > ' + [...this.adjacencyList[vertex]])
        }
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return
        }
        for (let adjacencyVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex,adjacencyVertex)
        }
        delete this.adjacencyList[vertex];
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    checkEdges(vertex) {
        if (!this.adjacencyList[vertex]) {
            return false;
        }
        for (let ver of this.adjacencyList[vertex]) {
            console.log(ver);
        }
    }

    bfs(startingVertex) {
        let result = [];
        let visited = {};
        let queue = [startingVertex];
        visited[startingVertex] = true;
        while (queue.length) {
            let current = queue.shift();
            result.push(current);
            this.adjacencyList[current].forEach(element => {
                if (!visited[element]) {
                    visited[element] = true;
                    queue.push(element)
                }
            });
        }
        return result
    }

    dfsStack(start) {
        const stack = [start];
        const result = [];
        const visited = {};

        visited[start] = true;
        while (stack.length) {
            let current = stack.pop(start);
            result.push(current);

            this.adjacencyList[current].forEach((element) => {
                if (!visited[element]) {
                    visited[element] = true;
                    stack.push(element)
                }
            })
        }
        return result
    }

    shortedPathBFS(start, end) {
        let queue = [start];
        let visited = new Set([start]);
        let parent = {};

        while (queue.length > 0){
            let current = queue.shift();

            if (current === end) {
                let path = [];
                let at = end;
                while (at !== null) {
                    path.unshift(at);
                    at = parent[at];
                }
                return path
            }

            for (let neighbor of this.adjacencyList[current]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    parent[neighbor] = current;
                    queue.push(neighbor);
                }
            }
        }
        return null
    }
}


let array = [
    [1, 2],
    [3, 4],
    [4, 5]
]

function matrixDfs (adj){
    const visited = new Array(adj.length).fill(false);
    const queue = [];
    queue.push(1);
    
    let visit
    while (queue.length > 0) {
        visit = queue.shift();

        console.log(visit + " ");
        for (let i = 0; i < adj[visit].length; i++){

            if (!visited[i]) {
                queue.push(i)
                visited[i] = true;
            }

        }
    }
}

matrixDfs(array)

const graph = new Graph();
console.log('create vertes: A,B,C')
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.display()
console.log('create edge : A-B, B-C')
graph.addEdge('A','B')
graph.addEdge('B', 'C')

console.log('asdf');
graph.checkEdges('B')
