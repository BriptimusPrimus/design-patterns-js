// Write a method to decide if two strings are anagrams or not

function areAnagrams(a, b) {
    var letters = {};

    if (a === b) {
        return false;
    }

    for (var i = 0; i < a.length; i++) {
        if (letters[a[i]]) {
            letters[a[i]]++;
        } else {
            letters[a[i]] = 1;
        }
    }

    for (var i = 0; i < b.length; i++) {
        if (letters[b[i]]) {
            letters[b[i]]--;
            if (!letters[b[i]]) {
                delete letters[b[i]];
            }
        } else {
            return false;
        }
    }

    return Object.keys(letters).length === 0;
}

// Usage
var assert = require('assert');

console.log('Should decide if two words are anagrams');

assert.strictEqual(areAnagrams('cares', 'acres'), true, 'cares and acres are anagrams');
assert.strictEqual(areAnagrams('cares', 'races'), true, 'cares and races are anagrams');
assert.strictEqual(areAnagrams('acres', 'races'), true, 'acres and races are anagrams');
assert.strictEqual(areAnagrams('acres', 'scare'), true, 'acres and scare are anagrams');
assert.strictEqual(areAnagrams('acres', 'race'), false, 'acres and race are not anagrams');
assert.strictEqual(areAnagrams('race', 'acres'), false, 'race and acres are not anagrams');
assert.strictEqual(areAnagrams('xyz', 'abc'), false, 'xyz and abc are not anagrams');