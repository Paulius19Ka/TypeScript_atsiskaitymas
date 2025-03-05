"use strict";
const textToOnesAndZeroes = (text) => {
    if (text.length === 0) {
        return 0;
    }
    let output = 1;
    let binaryNum;
    for (let i = 1; i < text.length; i++) {
        if (i % 2 === 0) {
            binaryNum = 1;
        }
        else {
            binaryNum = 0;
        }
        output = output * 10 + binaryNum;
    }
    return output;
};
console.log(textToOnesAndZeroes('labas'));
console.log(textToOnesAndZeroes('kebabas'));
console.log(textToOnesAndZeroes('a'));
console.log(textToOnesAndZeroes(''));
