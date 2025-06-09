/*
AMICABLE NUMBERS
Problem 21
Let d(n) be defined as the sum of proper divisors of n (numbers less than  which divide evenly into n).
If d(a) = b and d(b) = a , where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 1000.
*/
function sumOfDivisors(n) {
    let divisors = [1]; // proper divisor of any number > 1
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            divisors.push(i);
            if (i !== n / i) {
                divisors.push(n / i);
            }
        }
    }
    return divisors.reduce((a, b) => a + b, 0);
}

function findAmicableNumbers(limit) {
    let amicableNumbers = new Set();
    for (let a = 2; a < limit; a++) {
        let b = sumOfDivisors(a);
        if (b !== a && sumOfDivisors(b) === a) {
            amicableNumbers.add(a);
            amicableNumbers.add(b);
        }
    }
    return Array.from(amicableNumbers).reduce((a, b) => a + b, 0);
}

// sum of all amicable numbers under 1000
console.log(`Sum of amicable numbers under 1000 is ${findAmicableNumbers(1000)}`);

