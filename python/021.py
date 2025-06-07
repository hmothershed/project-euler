"""
AMICABLE NUMBERS
Problem 21
Let d(n) be defined as the sum of proper divisors of n (numbers less than  which divide evenly into n).
If d(a) = b and d(b) = a , where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 1000.
"""

def sum_of_divisors(n):
    divisors = [1] # proper divisor of any number > 1
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            divisors.append(i)
            if i != n // i:
                divisors.append(n // i)
    return sum(divisors)
    
def find_amicable_numbers(limit):
    amicable_numbers = set()
    for a in range(2, limit):
        b = sum_of_divisors(a)
        if b != a and sum_of_divisors(b) == a:
            amicable_numbers.add(a)
            amicable_numbers.add(b)
    return sum(amicable_numbers)
    
# sum of all amicable numbers under 1000
print(f"Sum of amicable numbers under 1000 is {find_amicable_numbers(1000)}")