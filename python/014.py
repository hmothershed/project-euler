"""
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
"""

# compute the lenght of the collatz sequence for number n
def collatz_sequence_length(n, cache):
    original_n = n
    length = 0
    
    # loop until we reach 1
    while n != 1:
        # if length known at n, use it
        if n in cache:
            length += cache[n]
            break
        # collatz rule
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3*n + 1
        length += 1
    # store the computed length in cache
    cache[original_n] = length
    return length

# main function to find the starting number under limit that has the longest collatz sequence
def find_longest_collatz(limit):
    max_length = 0
    number_with_max_length = 0
    cache = {}
    
    # try every number from 1 to the limit
    for i in range(1, limit):
        length = collatz_sequence_length(i, cache)  # get sequence length of number
        if length > max_length:
            max_length = length     # update max length
            number_with_max_length = i  # update number that has max length
    # return length+1 to include the starting number itself in the count
    return number_with_max_length, max_length + 1
    
number, length = find_longest_collatz(1_000_000)
print(f"The number under 1 million that produces the longest chain is {number}, with a chain length of {length}.")
