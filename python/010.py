"""
SUMMATION OF PRIMES
Problem 10
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
"""
import math

# same function from problem 7
def is_prime(n):
    if n < 2:
        return False
    for i in range (2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True
    
def sum_of_prime(num):
    sum = 0
    for i in range (2, num + 1):
        if is_prime(i):
            sum += i
    return sum
    
print(sum_of_prime(2000000))
