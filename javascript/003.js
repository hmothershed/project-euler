/* 
LARGEST PRIME FACTOR
Problem 3
The prime factors of 13195 are 5, 7, 13, and 29.
What is the largest prime factor of the number 600851475143?
*/
function largest_prime_factor(n){
    let factor = 2;
    
    while (factor * factor <= n){
        if(n % factor === 0){
            // divide out the factor
            n = n / factor;
        }
        else{
            // try the next integer
            factor += 1
        }
    }
    // remaining is the largest prime factor
    return n;
}
console.log("The largest prime factor of the number 600851475143 is", largest_prime_factor(600851475143));
