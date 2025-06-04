"""
LATTICE PATHS
Problem 15
Starting in the top left corner of a 2 x 2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
How many such routes are there through a 20 x 20 grid?
"""
import math

def lattice_paths(n):
    """
    calculate the number of lattice paths in an n x n grid
    using the binomial coefficient: C(2n, n) = (2n)! / (n! * n)
    """
    # use python's built-in function for binomial coefficient
    # math.comb(n, k) returns the number of ways to choose k items from n items without repetition and order
    return math.comb(2*n, n)

grid_size = 20
routes = lattice_paths(grid_size)

print(f"The number of routes through a {grid_size} x {grid_size} is: {routes}")
