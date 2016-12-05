/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/

// 0. Connect the main.js document to the HTML page.
/*    Add to the bottom of the HTML page: <script src="main.js"></script>*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");

// 1. Create a function that simply returns a string that says something funny
//    when it is called and then displayed into the HTML page.

function funnyFunction() {
    return "Something funny";
}

document.getElementById("q1").innerHTML = funnyFunction();

// 2. Define a function called "divideByTwo".
//    It should accept one parameter within a text field called "number" and
//    submitted when a button is clicked.
//    The function should divide the number by two and
//    then displayed into the HTML page.

function divideByTwo(number) {
    return "The result of dividing the argument by 2 is " + number / 2;
};

document.getElementById("q2").innerHTML = divideByTwo(10);

// 3. Define a function called "greeting".
//    It should accept two parameters within input fields, which will both be first names.
//    The function should display to the HTML page a greeting to both people.

function greeting(nameOne, nameTwo) {
    return "Hello " + nameOne + " and " + nameTwo + "!";
};

document.getElementById("q3").innerHTML = greeting("Eric", "Mike");

// 4. Create a function that finds the average of 6 numbers passed in when called
//    and returns the value and is then displayed in the HTML page.

function average(a, b, c, d, e, f) {
    return "The result of averaging the 6 arguments is " + (a + b + c + d + e + f) / 6;
};

document.getElementById("q4").innerHTML = average(1, 2, 3, 4, 5, 6);

// 5. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month.
//    Write a function that takes the price per unit and calculates the total for you each month.
//    Since the price of the cashews can change anytime, pass that amount into the function to get your total price.

function amazon(price) {
    return "The total cost of cashews this month is $" + (price * 6).toFixed(2);
};

document.getElementById("q5").innerHTML = amazon(.99);

// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

function area(length, width) {
    return "The area of the rectangle is " + (length * width);
};

function perimeter(length, width) {
    return "the perimeter of the rectangle is " + (length + length + width + width);
};

document.getElementById("q6").innerHTML = area(4, 5) + " and " + perimeter(4, 5);


// 7. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.

function quarter(number) {
    return "The result of quartering the argument is " + number / 4;
};

document.getElementById("q7").innerHTML = quarter(12);

// 8. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, display a statement to the HTML page about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

function sleepings(hours) {
    if (hours > 8) {
        return "You've gotten enough rest!";
    } else {
        return "You need to get more sleep!";
    };
};

document.getElementById("q8").innerHTML = sleepings(10);

// 9. Develop a function that determines a person's age by asking them for their birth year.

function age(birthYear) {
    return "You are " + (2016 - birthYear) + " years old";
};

document.getElementById("q9").innerHTML = age(1985);


// 10. Write a function that accepts the following array and separates the people into two teams. Display each team within the HTML page.
//    No names next to each other in the array should be on the same team.

teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]

var teamA = [];
var teamB = [];

function intoTeams(teammates) {
    for (var i = 0; i < teammates.length; i++) {
        if (i === 0 || i % 2 === 0) {
            teamA.push(teammates[i]);
        } else {
            teamB.push(teammates[i]);
        }
    }
}

intoTeams(teammates);

document.getElementById("q10").innerHTML = "Team A is : " + teamA.join(", ") + " and Team B is: " + teamB.join(", ");

// 11. Allow a user to enter a three digit number.
//     Write a function that adds the numbers together.
//     Hint #1: You need to turn a string into an integer.
//     Hint #2: Strings can be treated as arrays too.

function digitAdd(threeDigit) {
    return parseInt(threeDigit[0]) + parseInt(threeDigit[1]) + parseInt(threeDigit[2]);
};

document.getElementById("q11").innerHTML = "The result of summing the individual digits within your three-digit string is " + digitAdd("123");

// 12. You've finally gotten around to counting the change in your piggy bank.
//     Write a function that accepts four parameters from a user (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Understanding the toFixed method will help you with the format.

function countChange(quarters, dimes, nickels, pennies) {
    var totalChange = (quarters * .25) + (dimes * .1) + (nickels * .05) + (pennies * .01);
    return "The sum of your change is $" + totalChange.toFixed(2);
};

document.getElementById("q12").innerHTML = countChange(2, 2, 2, 2);

// ADVANCED TRACK

// A. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.

document.getElementById("qabutton").addEventListener("click", function() {
    var phoneNumber = document.getElementById("phoneinput").value;
    if (phoneNumber.toString().length < 10 || phoneNumber.toString().length > 11) {
        document.getElementById("qa").innerHTML = "Error: Phone number is invalid length.";
    } else if (phoneNumber.toString().length === 10) {
        document.getElementById("qa").innerHTML = phoneNumber;
    } else if (phoneNumber.toString().length === 11) {
        if (phoneNumber.toString().charAt(0) === "1") {
            document.getElementById("qa").innerHTML = phoneNumber.toString().slice(1);
        } else {
            document.getElementById("qa").innerHTML = "Error: Phone number is 11 digits and the first digit is not one.";
        }
    }
});

// B. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
var arrayOfAllTheThings = ["one", 23, {
    thingsWhalesLove: "beaches"
}, "six hundred", 33, 6834, "5,435"]
var myAnswer = []

function isNumber(myParameter) {
    for (var i = 0; i < myParameter.length; i++) {
        if (isNaN(myParameter[i])) {
            myAnswer.push(i + " is NOT a number");
        } else {
            myAnswer.push(i + " is a number");
        };
    };
};

isNumber(arrayOfAllTheThings);
document.getElementById("qb").innerHTML = myAnswer.join(", ");

// C. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     Display the result in the HTML page.
//     To get the random number rolled by each die, use Math.random and Math.floor.

function diceRoll() {
    var dieA = Math.floor(Math.random() * 6) + 1;
    var dieB = Math.floor(Math.random() * 6) + 1;
    var dieTotal = dieA + dieB;
    return dieTotal;
};

document.getElementById("qc").innerHTML = "DieA + DieB equals: " + diceRoll();

// D. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.

function monopolyBoard() {
    var spacesMoved = 0;
    var counter = 0;
    while (spacesMoved <= 40) {
        spacesMoved += diceRoll();
        counter++;
    }
    return "It took " + counter + " turns to get around the board!";
}

document.getElementById("qd").innerHTML = monopolyBoard();

// E. Write a function that takes a year from a user
//    and reports whether or not it is a leap year.
//    Display the result in the HTML page.
//    Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is. 1900 is not a leapyear, but 2000 is.

function leapYear(year) {
    if (year % 100 === 0 && year % 400 === 0) {
        return year + " is a leap year - divisible by 100, BUT, divisible by 400";
    } else if (year % 100 === 0 && year % 400 !== 0) {
        return year + " is not a leap year - divisible by 100 , NOT divisible by 400"
    } else if (year % 4 === 0) {
        return year + " is a leap year - divisible by 4";
    } else {
        return year + " is not a leap year";
    }
};

document.getElementById("qe").innerHTML = leapYear(1908);
