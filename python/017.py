"""
NUMBER LETTER COUNTS
Problem 17
if the numbers 1 to 5 are written out in words: one, two, three, four, five then there are 3 + 3 + 5 + 4 + 4 = 19 lettters used in total.
if all the numbers from 1 to 1000 (one thousand) inclusive we written out in words, how many letters would be used?
NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
"""

# convert number to word representation
def number_to_words(n):
    ones = {
        1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine"
    }
    teens = {
        10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen"
    }
    tens = {
        20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety"
    }
    
    if 1 <= n < 10:
        return ones[n]
    elif 10 <= n < 20:
        return teens[n]
    elif 20 <= n < 100:
        ten_part = tens[(n//10) * 10]
        one_part = ones[n%10] if n % 10 != 0 else ""
        return ten_part + ("-" + one_part if one_part else "")
    elif 100 <= n < 1000:
        hundred_part = ones[n//100] + " hundred"
        remainder = n%100
        if remainder:
            return hundred_part + " and " + number_to_words(remainder)
        else:
            return hundred_part
    elif n == 1000:
        return "one thousand"
    else:
        return ""
        
def count_letters_in_numbers(limit):
    total_letters = 0
    for n in range (1, limit+1):
        word = number_to_words(n)
        # remove spaces and hyphens before counting letters
        clean_word = word.replace(" ", "").replace("-", "")
        total_letters += len(clean_word)
    return total_letters
    
result = count_letters_in_numbers(1000)
print(f"Total number of letters used from 1 to 1000: {result}")
