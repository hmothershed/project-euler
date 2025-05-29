"""
SMALLEST MULTIPLE
Problem 5
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
"""
import math     # to use for built-in gcd function

def lcm(a, b):
    return abs(a*b) // math.gcd(a,b)    # finding lcm using gcd
    
def lcm_range(n):
    result = 1
    for i in range(2, n+1):
        result = lcm(result, i)     # compute running lcm
    return result
    
print(lcm_range(20))
