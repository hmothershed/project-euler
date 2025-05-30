/* 
SMALLEST MULTIPLE
Problem 5
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function gcd(a,b){
    while (b !== 0){
        [a, b] = [b, a % b];    // euclidean algorithm
    }
    return a;
}

function lcm(a, b){
    return (a * b) / gcd(a, b);     // lcm using gcd
}

function lcmRange(n){
    let result = 1;
    for (let i = 2; i <= n; i++){
        result = lcm(result, i);    // update result with cumulative lcm
    }
    return result;
}

console.log(lcmRange(20));
