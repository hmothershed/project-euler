"""
POWER DIGIT SUM
Problem 16
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
What is the sum of the digits to the number 2^1000?
"""

def power_digit_sum(exponent):
    num = 2 ** exponent
    return sum(int(digit) for digit in str(num))

exponent = 1000
result = power_digit_sum(exponent)
print(f"The sum of digits in 2^{exponent} is: {result}")
