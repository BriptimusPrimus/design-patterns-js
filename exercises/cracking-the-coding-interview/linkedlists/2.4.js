// Write code to partition a linked list around a value x,
// such that all nodes less than x come before all nodes 
// greater than or equal to x

function partition(head, x) {
    var node = head;
    var head1, head2, tail1, tail2, nextNode;

    function addToList1(n) {
        if (!head1) {
            head1 = n;
            tail1 = n;
        } else {
            tail1.next = n;
            tail1 = n;
        }
    }

    function addToList2(n) {
        if (!head2) {
            head2 = n;
            tail2 = n;
        } else {
            tail2.next = n;
            tail2 = n;
        }
    }    
        
    while(node) {
        nextNode = node.next;
        node.next = undefined;
        if(node.value < x) {
            // Goes into list1
            addToList1(node);
        } else {
            // Goes into list2
            addToList2(node);
        }
        node = nextNode;
    }

    // Concatenate lists
    if (tail1) {
        tail1.next = head2;
    } else {
        head1 = head2;
    }
    return head1;
}

// Usage
var assert = require('assert');

console.log('Should remove a node in the middle of a singly linked list');

var f = {value: 3};
var e = {value: 5, next: f};
var d = {value: 1, next: e};
var c = {value: 4, next: d};
var b = {value: 2, next: c};
var a = {value: 9, next: b};
var head = {value: 4, next: a};

printList(head);
var list = partition(head, 4);
printList(list);

assert.strictEqual(list, b, 'b is new head');
assert.strictEqual(list.value, 2, 'new head value is 2');
assert.strictEqual(list.next, d, 'd is second node now');
assert.strictEqual(d.next, f, 'f is third node now');
assert.strictEqual(f.next, head, 'previous head is fourth node now');
assert.strictEqual(head.next, a, 'followed by a');
assert.strictEqual(a.next, c, 'followed by c');
assert.strictEqual(c.next, e, 'followed by e');
assert.strictEqual(e.next, undefined, 'e is the last element');

// Partition by too small a number
list = partition(list, 1);
printList(list);
assert.strictEqual(list, b, 'b is still the head');
assert.strictEqual(list.next, d, 'd is still second node');
assert.strictEqual(e.next, undefined, 'e is the tail');

// Partition by too big a number
list = partition(list, 11);
printList(list);
assert.strictEqual(list, b, 'b is still the head');
assert.strictEqual(list.next, d, 'd is still second node');
assert.strictEqual(e.next, undefined, 'e is the tail');

function printList(node) {
    var str = '';
    while(node) {
        str += node.value + ' -> ';
        node = node.next;
    }
    console.log(str);
}