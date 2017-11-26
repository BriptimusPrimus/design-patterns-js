// Hanoi
// Write a program to move the disks from the 
// first tower to the last using stacks

function hanoi(tower1, tower2, tower3) {
    var operations = 0;
    moveTower(tower1.size(), tower1, tower2, tower3);

    function moveDisk(src, tar) {
        tar.push(src.pop());
        operations += 1;
        // Uncomment to watch step by step
        // console.log('Moved disk ', tar.peek(), ' from ', src.name, ' to ', tar.name);
        // console.log(tower1.values);
        // console.log(tower2.values);
        // console.log(tower3.values);
        // console.log('');
    }
    
    function moveTower(disks, src, mid, tar) { 
        if (disks < 1 || src.size() < 1) {
            return;
        }

        moveTower(disks - 1, src, tar, mid);
        moveDisk(src, tar);
        moveTower(disks - 1, mid, src, tar);
    }

    return operations;
}

function newStack(name, arr) {
    var items = arr || [];

    function push(item) {
        items.push(item);
    }

    function pop() {
        return items.pop();
    }

    function peek() {
        return items[size() - 1];
    }

    function size() {
        return items.length;
    }

    return {
        name: name,
        values: items,
        push: push,
        pop: pop,
        peek: peek,
        size: size
    }
}

// Usage
var assert = require('assert');
console.log('Should resolve hanoi towers problem');

var tower1, tower2, tower3, ops;

tower1 = newStack('left', [5, 4, 3, 2, 1]);
tower2 = newStack('middle');
tower3 = newStack('right');

console.log(tower1.values);
console.log(tower2.values);
console.log(tower3.values);
ops = hanoi(tower1, tower2, tower3);
console.log('Number of operations: ', ops);
console.log(tower1.values);
console.log(tower2.values);
console.log(tower3.values);

assert.strictEqual(tower1.size(), 0, 'Source tower is empty now');
assert.strictEqual(tower2.size(), 0, 'Middle tower is still empty');
assert.strictEqual(tower3.size(), 5, 'Target tower has all disks');
assert.strictEqual(ops, 31, '5 disks require 31 operations');

assert.strictEqual(tower3.pop(), 1, 'Firts disk is on top');
assert.strictEqual(tower3.pop(), 2, 'Second disk after');
assert.strictEqual(tower3.pop(), 3, 'Third disk after');
assert.strictEqual(tower3.pop(), 4, 'Fourth disk after');
assert.strictEqual(tower3.pop(), 5, 'Fifth disk after');
