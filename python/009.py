"""
SPECIAL PYTHAGOREAN TRIPLET
Problem 9
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a^2 + b^2 = c^2.

For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
"""
def triplet(sum_total):
    for a in range(1, sum_total):
        for b in range(a + 1, sum_total - a):
            c = sum_total - a - b
            if a**2 + b**2 == c**2:
                return f"Pythagorean triplet {a} + {b} + {c} = {sum_total} have a product of {a * b * c}"
print(triplet(1000))
