/*
SPECIAL PYTHAGOREAN TRIPLET
Problem 9
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a^2 + b^2 = c^2.

For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/
function triplet(sum_total){
    for (let a = 1; a < sum_total; a++){
        for (let b = a + 1; b < sum_total - a; b++){
            c = sum_total - a - b;
            if ((a*a) + (b*b) === (c*c)){
                return `Pythagorean triplet ${a} + ${b} + ${c} = ${sum_total} have a product of ${a*b*c}`;
            }
        }
    }
}

console.log(triplet(1000));
