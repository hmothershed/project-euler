/*
SUMMATION OF PRIMES
Problem 10
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
*/

// same function from problem 7
function isPrime(n){
    if (n < 2) return false;
    const sqrt = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= sqrt; i++){
        if (n % i === 0) return false;
    }
    return true;
}

function sumPrime(num){
    let sum = 0;
    for (let i = 2; i < num + 1; i++){
        if(isPrime(i)){
            sum += i;
        }
    }
    return sum;
}

console.log(sumPrime(2000000));
