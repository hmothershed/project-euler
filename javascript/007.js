/* 
10 001ST PRIME
Problem 7
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10001st prime number?
*/

function isPrime(n){
    if (n < 2) return false;
    const sqrt = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= sqrt; i++){
        if (n % i === 0) return false;
    }
    return true;
}

function findNthPrime(n){
    let count = 0;
    let num = 1;
    
    while (count < n){
        num++;
        if (isPrime(num)){
            count++;
        }
    }
    return num;
}

console.log(findNthPrime(10001));
