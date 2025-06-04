/*
LONGEST COLLATZ SEQUENCE
Problem 14
The following iterative sequence is defined for the set of positive integers.

n --> n/2 (n is even)
n --> 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1.

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowd to go above one million.
*/

// compute the length of the collatz sequence for number n
function collatzSequenceLength(n, cache) {
    const originalN = n;
    let length = 0;
    
    // loop until we reach 1
    while (n !== 1) {
        // if length known at n, use it
        if (cache.has(n)) {
            length += cache.get(n);
            break;
        }
        // collatz rule
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        length += 1;
    }
    
    // store the computed length in cache
    cache.set(originalN, length);
    return length;
}

// main function to find the starting number under limit that has the longest collatz sequence
function findLongestCollatz(limit) {
    let maxLength = 0;
    let numberWithMaxLength = 0;
    const cache = new Map();

    for (let i = 1; i < limit; i++) {
        const length = collatzSequenceLength(i, cache);
        if (length > maxLength) {
            maxLength = length;
            numberWithMaxLength = i;
        }
    }

    return [numberWithMaxLength, maxLength + 1]; // +1 to include the starting number itself
}

const [number, length] = findLongestCollatz(1000000);
console.log(`The number under 1 million that produces the longest chain is ${number}, with a chain length of ${length}.`);
