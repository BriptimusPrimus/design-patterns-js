// Given an image represented by an NxN matrix, where each 
// pixel in the image is 4 bytes, write a method to rotate the 
// image by 90 degrees  Can you do this in place?

function rotate(mtx) {
    var result = [];

    function solveColumn(col) {
        result[col] = [];
        for (var i = 0; i < mtx.length; i++) {
            result[col][mtx.length - i -1] = mtx[i][col];
        }
    }

    for (var j = 0; j < mtx.length; j++) {
        solveColumn(j);
    }

    return result;
}



// Usage
var assert = require('assert');

console.log('Should rotate square matrix clockwise');

var mt1 = [[1]];

var mt2 = [
    [1, 2],
    [3, 4]
];
var mt2i = [
    [3, 1],
    [4, 2]
];

var mt3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
var mt3i = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
];

var mt4 = [
    [ 1,  2,  3,  4],
    [ 5,  6,  7,  8],
    [ 9, 10, 11, 12],
    [13, 14, 15, 16]
];
var mt4i = [
    [13,  9, 5, 1],
    [14, 10, 6, 2],
    [15, 11, 7, 3],
    [16, 12, 8, 4]
];

var mt5 = [
    [ 1,  2,  3,  4,  5],
    [ 6,  7,  8,  9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];
var mt5i = [
    [21, 16, 11,  6, 1],
    [22, 17, 12,  7, 2],
    [23, 18, 13,  8, 3],
    [24, 19, 14,  9, 4],
    [25, 20, 15, 10, 5]
];

var mt6 = [
    [ 1,  2,  3,  4,  5,  6],
    [ 7,  8,  9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]
];
var mt6i = [
    [31, 25, 19, 13,  7, 1],
    [32, 26, 20, 14,  8, 2],
    [33, 27, 21, 15,  9, 3],
    [34, 28, 22, 16, 10, 4],
    [35, 29, 23, 17, 11, 5],
    [36, 30, 24, 18, 12, 6]
];

assert.deepEqual(rotate(mt1), mt1, 'Rotates 1x1 matrix');
assert.deepEqual(rotate(mt2), mt2i, 'Rotates 2x2 matrix');
assert.deepEqual(rotate(mt3), mt3i, 'Rotates 3x3 matrix');
assert.deepEqual(rotate(mt4), mt4i, 'Rotates 4x4 matrix');
assert.deepEqual(rotate(mt5), mt5i, 'Rotates 5x5 matrix');
assert.deepEqual(rotate(mt6), mt6i, 'Rotates 6x6 matrix');