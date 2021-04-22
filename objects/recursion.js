/* Recursion Practice Problems

Problem1 1. Write a Javascript program to calculate the factorial of a number.

My understanding of a fractorial is 
example. fractorial of 5 is 1 * 2 * 3 *4 * 5 = 120

Step 1) Define a function that accepts a number that will loop through itself.

Step 2) use a method in the defined function so the first 2 numbers are multiplied by eachother and the sum multiplied by next number in the string with the process repeating until the end of the array
.
step 3) return the sum after each number is multiplied by the sum of the previous multiplied numbers. */


let factorial = function (n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));