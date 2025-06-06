/*
FACTORIAL DIGIT SUM
Problem 20
n! means n * (n-1) * ... * 3 * 2 * 1.
For example, 10! = 10 * 9 * ... * 3 * 2 * 1 = 3628800, and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
Find the sum of the digits in the number 100!.
*/

function factDigitSum(n) {
    function factorial(num){
        let result = 1n;    // BigInt literal
        for (let i = 2n; i <= BigInt(num); i++){
            result *= i;
        }
        return result;
    }
    const factorialResult = factorial(n).toString();
    return[...factorialResult].reduce((sum, digit) => sum + parseInt(digit), 0);
}
console.log(factDigitSum(100));
