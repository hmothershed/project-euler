"""
LARGEST PALINDROME PRODUCT
Problem 4
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99.
Find the largest palindrome made from the product of two 3-digit numbers.
"""

def is_palindrome(x):
    x = str(x)
    return x == x[::-1] # slice the string in reverse order
    
def largest_palindrome():
    largest = 0
    factor1 = 0
    factor2 = 0
    
    for i in range(999, 99, -1):
        for j in range(999, 99, -1):
            prod = i * j
            if is_palindrome(prod) and prod > largest:
                largest = prod
                factor1 = i
                factor2 = j
    return f"The largest palindrome is {largest} = {factor1} x {factor2}"
    
print(largest_palindrome())
