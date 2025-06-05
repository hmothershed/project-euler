/*
NUMBER LETTER COUNTS
Problem 17
if the numbers 1 to 5 are written out in words: one, two, three, four, five then there are 3 + 3 + 5 + 4 + 4 = 19 lettters used in total.
if all the numbers from 1 to 1000 (one thousand) inclusive we written out in words, how many letters would be used?
NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

// convert number to word representation
function numberToWords(n) {
    const ones = {
        1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine"
    };
    const teens = {
        10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen"
    };
    const tens = {
        20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety"
    };
    
    if (1 <= n && n < 10) {
        return ones[n];
    } else if (10 <= n && n < 20) {
        return teens[n];
    } else if (20 <= n && n < 100) {
        const tenPart = tens[Math.floor(n / 10) * 10];
        const onePart = n % 10 !== 0 ? ones[n % 10] : "";
        return tenPart + (onePart ? "-" + onePart : "");
    } else if (100 <= n && n < 1000) {
        const hundredPart = ones[Math.floor(n / 100)] + " hundred";
        const remainder = n % 100;
        if (remainder) {
            return hundredPart + " and " + numberToWords(remainder);
        } else {
            return hundredPart;
        }
    } else if (n === 1000) {
        return "one thousand";
    } else {
        return "";
    }
}

function countLettersInNumbers(limit) {
    let totalLetters = 0;
    for (let n = 1; n <= limit; n++) {
        const word = numberToWords(n);
        // remove spaces and hyphens before counting letters
        const cleanWord = word.replace(/ /g, "").replace(/-/g, "");
        totalLetters += cleanWord.length;
    }
    return totalLetters;
}

const result = countLettersInNumbers(1000);
console.log(`Total number of letters used from 1 to 1000: ${result}`);

