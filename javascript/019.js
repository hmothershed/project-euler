/*
COUNTING SUNDAYS
Problem 19
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday
Thirty days has September, April, June, and November. All the rest have thirty-one, Saving February alone, Which has twenty-eight, rain or shine. And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

// check if leap year
function leap(year){
    return (year % 4 === 0 && (year % 100 === 0 || year % 400 === 0));
}

function countSundaysOnFirst(){
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // start on 1 Jan 1901 which is a Monday so 0 = Monday and 6 = Sunday
    let dayOfWeek = 0;
    let sundayCount = 0;
    
    for (let year = 1900; year <= 2000; year++){
        for (let month = 0; month < 12; month++){
            if (year >= 1901 && dayOfWeek === 6){
                sundayCount++;
            }
            // update days for the current month
            let daysThisMonth = monthDays[month];
            // handle february
            if (month === 1 && leap(year)){
                daysThisMonth++;
            }
            // advance the day of the week
            dayOfWeek = (dayOfWeek + daysThisMonth) % 7;
        }
    }
    return sundayCount;
}

console.log(`Number of Sundays that fell on the first of the month during the 20th century was ${countSundaysOnFirst()}`);
