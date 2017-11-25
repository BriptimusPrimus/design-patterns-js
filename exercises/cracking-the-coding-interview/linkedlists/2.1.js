// Write code to remove duplicates from an unsorted linked list
function removeDuplicates(node) {
    var curr = node;
    var prev;
    var existing = {};
    while(curr) {
        if (!existing[curr.value]) {
            existing[curr.value] = true;
            prev = curr;
        } else {
            // Repeated element, remove from list
            prev.next = curr.next;
        }
        curr = curr.next;
    }
}

// Usage
var assert = require('assert');

console.log('Should remove duplicates in a linked list ');

var f = {value: 1};
var e = {value: 1, next: f};
var d = {value: 2, next: e};
var c = {value: 3, next: d};
var b = {value: 2, next: c};
var a = {value: 5, next: b};
var head = {value: 0, next: a};

printList(head);
removeDuplicates(head);
printList(head);

assert.strictEqual(head.next, a, 'a remains the secod element');
assert.strictEqual(a.next, b, 'b is not repeated');
assert.strictEqual(b.next, c, 'c is not repeated');
assert.strictEqual(c.next, e, 'd has a repeated value, it is removed from the list');
assert.strictEqual(e.next, undefined, 'e is the last element, f is removed');



function printList(node) {
    var str = '';
    while(node) {
        str += node.value + ' -> ';
        node = node.next;
    }
    console.log(str);
}