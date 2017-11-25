// Implement an algorithm to find the kth to last element of a singly linked list
function findKthToLast(node, k) {
    var result;
    var curr = node;

    // Set curr in initial position
    // k elements after the head
    for (var i = 0; i < k; i++) {
        if (curr) {
            curr = curr.next;
        } else {
            // Return undefined if the list is not big enough
            return;
        }
    }

    // Start with head as initial position
    result = node;

    // Start moving pointers
    while(curr) {
        curr = curr.next;
        result = result.next;
    }

    return result;
}

// Usage
var assert = require('assert');

console.log('Should find the kth to last element of a singly linked list');

var f = {value: '6'};
var e = {value: '5', next: f};
var d = {value: '4', next: e};
var c = {value: '3', next: d};
var b = {value: '2', next: c};
var a = {value: '1', next: b};
var head = {value: '0', next: a};

assert.strictEqual(findKthToLast(head, 1), f, 'f is the last element');
assert.strictEqual(findKthToLast(head, 2), e, 'e is the kth=2 to last element');
assert.strictEqual(findKthToLast(head, 3), d, 'd is the kth=3 to last element');
assert.strictEqual(findKthToLast(head, 4), c, 'c is the kth=4 to last element');
assert.strictEqual(findKthToLast(head, 5), b, 'b is the kth=5 to last element');
assert.strictEqual(findKthToLast(head, 6), a, 'a is the kth=6 to last element');
assert.strictEqual(findKthToLast(head, 7), head, 'head is the kth=7 to last element');
assert.strictEqual(findKthToLast(head, 8), undefined, 'There is no kth=8 to last element');