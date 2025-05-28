/* 
LARGEST PALINDROME PRODUCT
Problem 4
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

function isPalindrome(x){
    x = x.toString().split('');
    let len = x.length;
    for(let i = 0; i < len/2; i++){
        if(x[i] !== x[len-1-i]){
            return false;
        }
    }
    return true;
}

function largestPalindrome(){
    let largest = 0;
    
    for (let i = 999; i >= 100; i--){
        for (let j = 999; j >= 100; j--){
            let prod = i * j;
            if (isPalindrome(prod) && prod > largest){
                largest = prod;
                factor1 = i;
                factor2 = j;
            }
        }
    }
    return `The largest palindrome is ${largest} = ${factor1} x ${factor2}`;
}
console.log(largestPalindrome());
