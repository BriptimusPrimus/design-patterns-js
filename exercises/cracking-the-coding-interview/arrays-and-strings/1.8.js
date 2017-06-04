// Assume you have a method isSubstring which checks if one word is a substring of 
// another  Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 
// using only one call to isSubstring (i e , “waterbottle” is a rotation of “erbottlewat”) 

function isSubstring(s1, s2) {
    return !!s2.match(s1);
}

// Note: this version of the algorithm is potentially 
// doing more than one call to isSubstring function
function isRotationBK(s1, s2) {
    var skip;

    if (s1.length !== s2.length) {
        return false;
    }

    for (var i = 0; i < s1.length; i++) {
        if (s1[i] === s2[0] && isSubstring(s1.slice(i), s2)) {
            skip = s2.length - i;
            return s1.slice(0, i) === s2.slice(skip);
        }
    }

    return false;
}

function isRotation(s1, s2) {
    var skip;
    var j = 0;
    var subFound = false;

    if (s1.length !== s2.length) {
        return false;
    }

    for (var i = 0; i < s1.length; i++) {
        if (s1[i] === s2[j]) {
            j++;
            subFound = true;
        } else if (s1[i] === s2[0]) {
            j = 1;
            subFound = true;
        } else {
            j = 0;
            subFound = false;
        }
    }

    if (subFound) {
        return isSubstring(s2.slice(j), s1);
    }

    return false;
}


// Usage
var assert = require('assert');

console.log('Should check if string2 is a rotation of string1');

assert.deepEqual(isRotation('imepizzat', 'pizzatime'), true, 'pizzatime is a rotation of imepizzat');
assert.deepEqual(isRotation('pizzatime', 'imepizzat'), true, 'imepizzat is a rotation of pizzatime');
assert.deepEqual(isRotation('pizzatime', 'otherword'), false, 'otherword is not a rotation of pizzatime');
assert.deepEqual(isRotation('one', 'onetwothree'), false, 'one is not a rotation of onetwothree');
assert.deepEqual(isRotation('onetwothree', 'one'), false, 'onetwothree is not a rotation of one');
assert.deepEqual(isRotation('adabraabrak', 'abrakadabra'), true, 'adabraabrak is a rotation of abrakadabra');

