// Implement a function to check if a linkedlist is a palindrome
function isPalindrome(head) {
    if (!head) {
        return false;
    }

    var slow = head;
    var fast = head.next;
    var stack = [];
    var isOdds = true;

    while (fast) {
        stack.push(slow);
        slow = slow.next;
        fast = fast.next;

        if (fast) {
            fast = fast.next;
        } else {
            isOdds = false;
        }
    }

    if (isOdds) {
        // Jump the middle value
        slow = slow.next; 
    }

    while(slow) {
        if (slow.value !== stack.pop().value) {
            return false;
        }
        slow = slow.next;
    }

    return true; // or return stack.length === 0;
}

// Usage
var assert = require('assert');
console.log('Should check if a list is a palindrome');

var a, b, c, d, e, f;
f = {value: 1};
e = {value: 2, next: f};
d = {value: 3, next: e};
c = {value: 3, next: d};
b = {value: 2, next: c};
a = {value: 1, next: b};

printList(a);
assert.strictEqual(isPalindrome(a), true, 'list of 6 is a palindrome');

e.next = undefined;
printList(a);
assert.strictEqual(isPalindrome(a), false, 'list of 5 is not a palindrome');

printList(b);
assert.strictEqual(isPalindrome(b), true, 'list of 4 is a palindrome');

c.value = 2;
printList(c);
assert.strictEqual(isPalindrome(c), true, 'list of 3 is a palindrome');

printList(b);
assert.strictEqual(isPalindrome(b), false, 'list of 4 is not a palindrome anymore');

printList(f);
assert.strictEqual(isPalindrome(f), true, 'list of 1 is a palindrome');

assert.strictEqual(isPalindrome(), false, 'empty list is not a palindrome');

c.value = 9;
d.value = 2;
e.value = 1;
printList(a);
assert.strictEqual(isPalindrome(a), true, 'list of 5 is a palindrome');

function printList(node) {
    var str = '';
    while(node) {
        str += node.value + ' -> ';
        node = node.next;
    }
    console.log(str);
}