/*
LATTICE PATHS
Problem 15
Starting in the top left corner of a 2 x 2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
How many such routes are there through a 20 x 20 grid?
*/
function latticePaths(n) {
    /*
     calculate the number of lattice paths in an n x n grid
     using the binomial coefficient: C(2n, n) = (2n)! / (n! * n!)
     */
    function factorial(num) {
        if (num === 0 || num === 1) return 1;
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }
    // calculate the binomial coefficient
    return factorial(2 * n) / (factorial(n) * factorial(n));
}

// compute the number of routes through a 20 x 20 grid
const gridSize = 20;
const routes = latticePaths(gridSize);

console.log(`The number of routes through a ${gridSize} x ${gridSize} grid is: ${routes}`);
