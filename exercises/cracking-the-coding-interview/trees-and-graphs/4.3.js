// Given a sorted (increasing order) array with unique integer elements,
// write an algorithm to create a binary search tree with minimal heigh
function createBST(arr) {
    if (!arr || !arr.length) {
        return;
    }

    if (arr.length === 1) {
        return {
            value: arr[0]
        };
    }

    var mid = Math.floor(arr.length / 2);
    var node = {
        value: arr[mid],
        left: createBST(arr.slice(0, mid)),
        right: createBST(arr.slice(mid + 1))
    }
    return node;
}


// Usage
var assert = require('assert');
console.log('Should create a binary search tree with minimal heigh');

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var tree = createBST(list);

assert.strictEqual(tree.value, 8, 'Head of the tree is element in the middle of the list');
assert.strictEqual(tree.left.value, 4, 'Left node is element in the middle of the left side');
assert.strictEqual(tree.right.value, 12, 'Right node is element in the middle of the right side');
assert.strictEqual(tree.left.left.value, 2, 'Left node is element in the middle of the left side');
assert.strictEqual(tree.left.right.value, 6, 'Right node is element in the middle of the right side');


var list2 = [];
inOrderTraverseNode(tree, function(val) {
    list2.push(val);
});
console.log(list2);
console.log(tree);

list.forEach(function(item, idx) {
    assert.strictEqual(item, list2[idx], 'In order traverse should create a sorted list');
});

function inOrderTraverseNode(node, callback) { 
    if (node) {
        inOrderTraverseNode(node.left, callback);
        callback(node.value);
        inOrderTraverseNode(node.right, callback);
    }
};