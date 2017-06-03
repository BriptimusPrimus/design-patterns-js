// Write an algorithm such that if an element in an MxN matrix is 0,
// its entire row and column is set to 0

function transformMatrix(matrix) {
    var lenM = matrix.length;
    var lenN = matrix[0].length;
    var stop = false;
    var i = 0;
    var j = 0;
    var cols = {};
    var rows = {};

    while (!stop) {
        if (matrix[i][j] === 0) {
            rows[i] = true;
            cols[j] = true;
            i++; // skip this row
            j = 0;
        } else {
            // next column
            j++;
            if(j >= lenN) {
                // end of column, next row
                i++;
                j = 0;
            }
        }

        if (i >= lenM) {
            stop = true;
        }
    }

    for (row in rows) {
        for (k = 0; k < lenN; k++) {
            matrix[row][k] = 0;
        }
    }
    for (col in cols) {
        for (var l = 0; l < lenM; l++) {
            matrix[l][col] = 0;
        }
    }

    return matrix;
}


// Usage
var assert = require('assert');

console.log('Should set row and column to 0 for elements equal 0');

var mt4_1 = [
    [13,  9, 5, 1],
    [14, 0, 6, 2],
    [15, 11, 7, 3],
    [16, 0, 8, 4]
];
var mt4_1i = [
    [13, 0, 5, 1],
    [ 0, 0, 0, 0],
    [15, 0, 7, 3],
    [ 0, 0, 0, 0]
];

var mt4_2 = [
    [ 1,  2,  3,  4],
    [ 5,  6,  7,  8],
    [ 9, 10, 11, 12],
    [13, 14, 15, 16]
];
var mt4_2i = [
    [ 1,  2,  3,  4],
    [ 5,  6,  7,  8],
    [ 9, 10, 11, 12],
    [13, 14, 15, 16]
];

var mt5x6_1 = [
    [ 1,  0,  3,  4,  5, 1],
    [ 6,  7,  8,  9, 10, 1],
    [11, 12,  0, 14, 15, 1],
    [16, 17, 18, 19,  0, 1],
    [21, 22, 23, 24, 25, 1]
];
var mt5x6_1i = [
    [ 0,  0,  0,  0,  0, 0],
    [ 6,  0,  0,  9,  0, 1],
    [ 0,  0,  0,  0,  0, 0],
    [ 0,  0,  0,  0,  0, 0],
    [21,  0,  0, 24,  0, 1]
];

var mt5x6_2 = [
    [ 0,  2,  3,  4,  5, 1],
    [ 6,  7,  8,  9, 10, 1],
    [11, 12, 13, 14, 15, 1],
    [16, 17, 18, 19, 20, 1],
    [21, 22, 23, 24, 25, 1]
];
var mt5x6_2i = [
    [ 0,  0,  0,  0,  0, 0],
    [ 0,  7,  8,  9, 10, 1],
    [ 0, 12, 13, 14, 15, 1],
    [ 0, 17, 18, 19, 20, 1],
    [ 0, 22, 23, 24, 25, 1]
];

var mt6_1 = [
    [ 1,  2,  3,  4,  5,  6],
    [ 7,  8,  9, 10, 11, 12],
    [13, 14,  0, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]
];
var mt6_1i = [
    [ 1,  2,  0,  4,  5,  6],
    [ 7,  8,  0, 10, 11, 12],
    [ 0,  0,  0,  0,  0,  0],
    [19, 20,  0, 22, 23, 24],
    [25, 26,  0, 28, 29, 30],
    [31, 32,  0, 34, 35, 36]
];

var mt6_2 = [
    [ 1,  2,  3,  4,  5,  0],
    [ 7,  8,  9, 10, 11, 12],
    [ 0, 14, 15, 16, 17, 18],
    [19, 20,  0, 22, 23,  0],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]
];
var mt6_2i = [
    [ 0,  0,  0,  0,  0,  0],
    [ 0,  8,  0, 10, 11,  0],
    [ 0,  0,  0,  0,  0,  0],
    [ 0,  0,  0,  0,  0,  0],
    [ 0, 26,  0, 28, 29,  0],
    [ 0, 32,  0, 34, 35,  0]
];

var mt2x3_1 = [
    [1, 0, 3],
    [4, 0, 6]
];
var mt2x3_1i = [
    [0, 0, 0],
    [0, 0, 0]
];


assert.deepEqual(transformMatrix(mt4_1), mt4_1i, 'Transforms 4x4 matrix 1');
assert.deepEqual(transformMatrix(mt4_2), mt4_2i, 'Does not transforms 4x4 matrix 2');
assert.deepEqual(transformMatrix(mt5x6_1), mt5x6_1i, 'Transforms 5x6 matrix 1');
assert.deepEqual(transformMatrix(mt5x6_2), mt5x6_2i, 'Transforms 5x6 matrix 2');
assert.deepEqual(transformMatrix(mt6_1), mt6_1i, 'Transforms 6x6 matrix 1');
assert.deepEqual(transformMatrix(mt6_2), mt6_2i, 'Transforms 6x6 matrix 2');
assert.deepEqual(transformMatrix(mt2x3_1), mt2x3_1i, 'Transforms 2x3 matrix 1');

console.log('***********************************');
console.log(' ');
console.log('mt4_1:');
console.log(mt4_1);
console.log(' ');
console.log('***********************************');

console.log('***********************************');
console.log(' ');
console.log('mt4_2:');
console.log(mt4_2);
console.log(' ');
console.log('***********************************');

console.log('***********************************');
console.log(' ');
console.log('mt5x6_1:');
console.log(mt5x6_1);
console.log(' ');
console.log('***********************************');

console.log('***********************************');
console.log(' ');
console.log('mt5x6_2:');
console.log(mt5x6_2);
console.log(' ');
console.log('***********************************');

console.log('***********************************');
console.log(' ');
console.log('mt6_1:');
console.log(mt6_1);
console.log(' ');
console.log('***********************************');

console.log('***********************************');
console.log(' ');
console.log('mt6_2:');
console.log(mt6_2);
console.log(' ');
console.log('***********************************');

console.log('***********************************');
console.log(' ');
console.log('mt2x3_1:');
console.log(mt2x3_1);
console.log(' ');
console.log('***********************************');