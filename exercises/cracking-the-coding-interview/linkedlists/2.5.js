// You have two numbers represented by a linked list, where each node contains a
// single digit. The digits are stored in reverse order, such that 1's digit is at the
// head of the list. Write a function that adds two numbers and returns the sum
// as a linked list.

function addLists(n1, n2) {
    if(!n1) {
        return n2;
    }
    if(!n2) {
        return n1;
    }

    var digit, head, tail, temp;
    var carry = 0;

    while (n1 || n2) {
        temp = addDigits(n1 && n1.value, n2 && n2.value, carry);
        carry = temp.carry;
        digit = temp.digit;
        addToList(digit);
        n1 = n1 && n1.next;
        n2 = n2 && n2.next;
    }
    if (carry > 0) {
        addToList(carry);
    }
    return head;

    function addToList(digit) {
        var node = {
            value: digit            
        };
        if (!head) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            tail = node;
        }
    }
}

function addDigits(d1, d2, c) {
    d1 = d1 || 0;
    d2 = d2 || 0;
    var sum = d1 + d2 + c;
    var digit = sum % 10;
    var carry = Math.floor(sum / 10);
    return {
        digit: digit,
        carry: carry
    }
}

// Usage
var assert = require('assert');
console.log('Should adds two numbers and returns the sum as a linked list');

var n1, n2, result;
n1 = {
    value: 7,
    next: {
        value: 1,
        next: {
            value: 6
        }
    }
};
n2 = {
    value: 5,
    next: {
        value: 9,
        next: {
            value: 2
        }
    }
};
printList(n1);printList(n2);
result = addLists(n1, n2);
printList(result);console.log('');

assert.strictEqual(result.value + ' ' + result.next.value + ' ' + result.next.next.value,
    '2 1 9', 'sum is correct for two 3 digits numbers');

n1 = {
    value: 8,
    next: {
        value: 5,
        next: {
            value: 6
        }
    }
};
n2 = {
    value: 6,
    next: {
        value: 9,
        next: {
            value: 3
        }
    }
};
printList(n1);printList(n2);
result = addLists(n1, n2);
printList(result);console.log('');

assert.strictEqual(result.value + ' ' + result.next.value +
    ' ' + result.next.next.value + ' ' + result.next.next.next.value,
'4 5 0 1', 'sum is correct for two 3 digits numbers with carried over');

n1 = {
    value: 8,
    next: {
        value: 5
    }
};
n2 = {
    value: 6,
    next: {
        value: 7,
        next: {
            value: 9,
            next: {
                value: 6,
                next: {
                    value: 4
                }
            }
        }
    }
};
printList(n1);printList(n2);
result = addLists(n1, n2);
printList(result);console.log('');

assert.strictEqual(result.value + ' ' + result.next.value + ' ' + result.next.next.value +
    ' ' + result.next.next.next.value + ' ' + result.next.next.next.next.value,
'4 3 0 7 4', 'sum is correct for numbers with different lengths');

printList(n2);printList(n1);
result = addLists(n2, n1);
printList(result);console.log('');

assert.strictEqual(result.value + ' ' + result.next.value + ' ' + result.next.next.value +
    ' ' + result.next.next.next.value + ' ' + result.next.next.next.next.value,
'4 3 0 7 4', 'sum is correct when the operands are inverted');


function printList(node) {
    var str = '';
    while(node) {
        str += node.value + ' -> ';
        node = node.next;
    }
    console.log(str);
}


// Follow up:
// Suppose the digits are stored in forward order. Repeat the above problem
