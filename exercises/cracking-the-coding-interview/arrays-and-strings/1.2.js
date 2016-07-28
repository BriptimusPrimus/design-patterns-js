// Implement a function void reverse(char* str) in C or C++ 
// which reverses a nullterminated string.

// Adaptation to javascript: 
// Implement a function void reverse a single linked list 
// containing objects with a single char value

function recursiveReverseNodes(node, prev) {
	if (node.next) {
		recursiveReverseNodes(node.next, node);
	}
	node.next = prev;
}

// Usage
var assert = require('assert');

console.log('Should reverse a single linked list ');

var d = {value: '4'};
var c = {value: '3', next: d};
var b = {value: '2', next: c};
var a = {value: '1', next: b};
var head = {value: '0', next: a};

console.log(JSON.stringify(head));
recursiveReverseNodes(head, undefined);
console.log(JSON.stringify(d));

assert.strictEqual(d.next, c, 'tail is the new head');
assert.strictEqual(c.next.value, '2', '2 comes after 3');
assert.strictEqual(head.next, undefined, 'The original head is now the tail');
assert.strictEqual(d.next.next.next.next.value, '0', 'The list consists of 5 nodes');