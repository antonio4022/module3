/* Recursion Practice Problems

Problem1 1. Write a Javascript program to calculate the factorial of a number.

Step 1) Define a function that accepts a number that will loop through the length of that number.
Step 2) in the defined function the first 2 numbers are multiplied by eachother and the sum multiplied by next number in the string with the process repeating until the end of the string.
step 3) return the sum after each number is multiplied by the sum of the previous multiplied numbers. */

function findFractal(nums) {
    let j = nums[0];
    for (let i = 1; i <= nums.length; i++) {
        let x == nums[i] * j
        let j = x;
    }
    console.log(nums[j]);
}

console.log(findFractal(5));