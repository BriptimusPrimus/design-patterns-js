// Given a directed graph, design an algorithm to find out weather there
// is a route between two nodes
function isTherePath(ori, des, callback) {
    var node, neighbors;
    var queue = [];

    if(!ori || !des) {
        return false;
    }

    ori.visited = true;
    queue.push(ori);

    while(queue.length > 0) {
        node = queue.shift();
        callback(node);

        if (node === des) {
            console.log('found');
            return true;
        }

        node.neighbors && node.neighbors.forEach(function(item) {
            if (!item.visited) {
                item.visited = true;
                queue.push(item);
            }
        });
    }

    console.log('not found');
    return false;
}


// Usage
var assert = require('assert');
console.log('Should find out if there is a route between two nodes');

//    A -> B    E
//    | \  |    |
//    V  > V    V
//    C <- D <- G
//    |    ^
//    V    |
//    H -> I    F

var a = {value: 'a'};
var b = {value: 'b'};
var c = {value: 'c'};
var d = {value: 'd'};
var e = {value: 'e'};
var f = {value: 'f'};
var g = {value: 'g'};
var h = {value: 'h'};
var i = {value: 'i'};

a.neighbors = [b, c, d];
b.neighbors = [d];
c.neighbors = [h];
d.neighbors = [c];
e.neighbors = [g];
g.neighbors = [d];
h.neighbors = [i];
i.neighbors = [d];

function visit(node) {
    console.log('visit node ', node.value);
}

assert.strictEqual(isTherePath(a, i, visit), true, 'a to i');
console.log(' ------- ');
console.log('');
clearNodes();

assert.strictEqual(isTherePath(a, d, visit), true, 'a to d');
console.log(' ------- ');
console.log('');
clearNodes();

assert.strictEqual(isTherePath(a, g, visit), false, 'a to g');
console.log(' ------- ');
console.log('');
clearNodes();

assert.strictEqual(isTherePath(c, a, visit), false, 'c to a');
console.log(' ------- ');
console.log('');
clearNodes();

assert.strictEqual(isTherePath(e, h, visit), true, 'e to h');
console.log(' ------- ');
console.log('');
clearNodes();

assert.strictEqual(isTherePath(c, e, visit), false, 'c to e');
console.log(' ------- ');
console.log('');
clearNodes();

assert.strictEqual(isTherePath(a, f, visit), false, 'a to f');
console.log(' ------- ');
console.log('');
clearNodes();

assert.strictEqual(isTherePath(f, d, visit), false, 'f to d');
console.log(' ------- ');
console.log('');
clearNodes();

assert.strictEqual(isTherePath(i, c, visit), true, 'i to c');
console.log(' ------- ');
console.log('');
clearNodes();

function clearNodes() {
    items = [a, b, c, d, e, f, g, h, i];
    items.forEach(function(item) {
        item.visited = false;
    });
}