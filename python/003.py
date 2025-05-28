"""
LARGEST PRIME FACTOR
Problem 3
The prime factors of 13195 are 5, 7, 13, and 29.
What is the largest prime factor of the number 600851475143?
"""

def largest_prime_factor(n):
    # start with smallest prime
    factor = 2
    
    while factor * factor <= n:
        if n % factor == 0:
            # divide out the factor as many times as it divides n
            n //= factor
        else:
            # move onto the next possible factor
            factor += 1
    return n

print("The largest prime factor of the number 600851475143 is", largest_prime_factor(600851475143))
