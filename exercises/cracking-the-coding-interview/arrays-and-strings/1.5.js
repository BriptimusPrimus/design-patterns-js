// Write a method to replace all spaces in a string with ‘%20’

// Usage
var assert = require('assert');

function replaceRegex(str) {
    return str.replace(/\s/g, '%20');
}

function replaceSplit(str) {
    return str.split(' ').join('%20');
}

function replace(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        result += str[i] === ' ' ? '%20' : str[i];
    }
    return result;
}

console.log('Should replace empty strings');

assert.strictEqual(
    replaceRegex('Nationwide is on your side.'),
    'Nationwide%20is%20on%20your%20side.',
    'Replaces spaces in Nationwide is on your side with regex.'
);
assert.strictEqual(
    replaceRegex('Big brother is watching you.'),
    'Big%20brother%20is%20watching%20you.',
    'Replaces spaces in Big brother is watching you with regex.'
);

assert.strictEqual(
    replaceSplit('Nationwide is on your side.'),
    'Nationwide%20is%20on%20your%20side.',
    'Replaces spaces in Nationwide is on your side with split.'
);
assert.strictEqual(
    replaceSplit('Big brother is watching you.'),
    'Big%20brother%20is%20watching%20you.',
    'Replaces spaces in Big brother is watching you with split.'
);

assert.strictEqual(
    replace('Nationwide is on your side.'),
    'Nationwide%20is%20on%20your%20side.',
    'Replaces spaces in Nationwide is on your side.'
);
assert.strictEqual(
    replace('Big brother is watching you.'),
    'Big%20brother%20is%20watching%20you.',
    'Replaces spaces in Big brother is watching you.'
);