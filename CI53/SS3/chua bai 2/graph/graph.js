class Vertice {
    data;
    constructor(data) {
        this.data = data;
    }
}

class Edge {
    a;
    b;

    constructor(a, b) {
        if (a instanceof Vertice && b instanceof Vertice) {
            this.a = a;
            this.b = b;
        }
    }
}

class Graph {
    name;
    vertices;
    edges;

    constructor(name) {
        this.name = name;
        this.vertices = [];
        this.edges = [];
    }

    addVertice(v) {
        if (v instanceof Vertice) {
            this.vertices.push(v);
        }
    }
    addEdge(a, b) {
        if (a instanceof Vertice && b instanceof Vertice && a != b) {
            let foundEdge = this.edges.find((edge) => {
                return (edge.a == a && edge.b == b) || (edge.a == b && edge.b == a)
            })
            if(!foundEdge){
                let newEdge = new Edge(a, b);
                this.edges.push(newEdge);
            }
        }
    }
}

let a = new Vertice("A");
let b = new Vertice("B");
let c = new Vertice("C");
let d = new Vertice("D");
let e = new Vertice("E");

let myGraph = new Graph("my graph");

myGraph.addVertice(a);
myGraph.addVertice(b);
myGraph.addVertice(c);
myGraph.addVertice(d);
myGraph.addVertice(e);


myGraph.addEdge(a,b);
myGraph.addEdge(b,a);
myGraph.addEdge(a,c);
myGraph.addEdge(c,d);

console.log(myGraph);

