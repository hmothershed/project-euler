/*
POWER DIGIT SUM
Problem 16
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
What is the sum of the digits to the number 2^1000?
*/

function powerDigitSum(exponent){
    let num = 1n;   // start with BigInt 1
    for (let i = 0; i < exponent; i++){
        num *= 2n;
    }
    return num.toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0);
}

const exponent = 1000;
const result = powerDigitSum(exponent);
console.log(`The sum of digits in 2^${exponent} is: ${result}`);
