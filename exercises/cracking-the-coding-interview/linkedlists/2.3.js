// Implement an algorithm to delete a node in 
// the middle of a singly linked list

function removeNode(node) {
    if (!node || !node.next) {
        // Error case
        return false; 
    }
    node.value = node.next.value;
    node.next = node.next.next;
}

// Usage
var assert = require('assert');

console.log('Should remove a node in the middle of a singly linked list');

var f = {value: 6};
var e = {value: 5, next: f};
var d = {value: 4, next: e};
var c = {value: 3, next: d};
var b = {value: 2, next: c};
var a = {value: 1, next: b};
var head = {value: 0, next: a};

printList(head);
removeNode(d);
printList(head);

assert.strictEqual(head.next, a, 'head and a remained in the list');
assert.strictEqual(a.next, b, 'b is not removed from the list');
assert.strictEqual(b.next, c, 'c not removed from the list');
assert.strictEqual(c.next, d, 'b is still in the list...');
assert.strictEqual(d.value, 5, 'but its value is former e\'s value');
assert.strictEqual(d.next, f, 'e was removed from the list');
assert.strictEqual(f.next, undefined, 'f is the last element');

function printList(node) {
    var str = '';
    while(node) {
        str += node.value + ' -> ';
        node = node.next;
    }
    console.log(str);
}
