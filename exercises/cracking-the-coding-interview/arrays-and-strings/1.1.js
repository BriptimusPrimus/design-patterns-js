// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

function hasUniqueChars(input) {
	var prevChars = {};
	for (i = 0; i < input.length; i++) {
		if (prevChars[input[i]]) {
			return false;
		}
		prevChars[input[i]] = true;
	}
	return true;
}

// Usage
var assert = require('assert');

console.log('Should determine if a string has all unique characters');
assert.strictEqual(hasUniqueChars('abcdefghijklmnopqrstuvwxyz'),
	 true, "Return true for string with all letters");

assert.strictEqual(hasUniqueChars('0123456789'),
	 true, "Return true for string with digits");

assert.strictEqual(hasUniqueChars('abcdeffghijklmn'),
	 false, "Return false for string with repeated f");

assert.strictEqual(hasUniqueChars('01010110100010111'),
	 false, "Return false for string with repeated digits");