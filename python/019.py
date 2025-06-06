"""
COUNTING SUNDAYS
Problem 19
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday
Thirty days has September, April, June, and November. All the rest have thirty-one, Saving February alone, Which has twenty-eight, rain or shine. And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during twentieth century (1 Jan 1901 to 31 Dec 2000)?
"""

# check if leap year
def leap(year):
    return (year % 4 == 0 and (year % 100 != 0 or year % 400 == 0))
    
def count_sundays_on_first():
    # days in each month non-leap year
    month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    # start on 1 Jan 1900 which is a Monday so 0 = Monday and 6 = Sunday
    day_of_week = 0
    sunday_count = 0
    
    for year in range(1900, 2001):
        for month in range(12):
            if year >= 1901 and day_of_week == 6:
                sunday_count += 1
            # update days for the current month
            days_this_month = month_days[month]
            # handle february
            if month == 1 and leap(year):
                days_this_month += 1
            # advance the day of the week
            day_of_week = (day_of_week + days_this_month) % 7
    return sunday_count
    
print(f"Number of Sundays that fell on the first of the month during the 20th century was {count_sundays_on_first()}")
