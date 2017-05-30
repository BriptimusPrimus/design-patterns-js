// Design an algorithm and write code to remove the duplicate
// characters in a string without using any additional buffer  
// NOTE: One or two additional variables are fine   
// An extra copy of the array is not 

function removeDuplicates(str) {
    var prev = {};
    var i = 0;    
    while (i < str.length) {
        if (prev[str.charAt(i)]) {
            str = str.slice(0, i) + str.slice(i + 1);
        } else {
            prev[str.charAt(i)] = true;
            i++;
        }
    }
    return str;
}

// Usage
var assert = require('assert');

console.log('Should remove duplicate characters from a string');

assert.strictEqual(removeDuplicates('abcadef'), 'abcdef', 'removes the duplicated a');
assert.strictEqual(removeDuplicates('abcbbdefb'), 'abcdef', 'removes the 3 duplicated b letters');
assert.strictEqual(removeDuplicates('abcdefghijklmn'), 'abcdefghijklmn', 'removes nothing');
assert.strictEqual(removeDuplicates('abcadefggghijkklmn'), 'abcdefghijklmn', 'removes several letters');
assert.strictEqual(removeDuplicates('abcdbefgaa'), 'abcdefg', 'removes letters at the end');