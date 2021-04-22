/* Write a Javascript program to calculate the sum of an array of integers.

Step 1. create an array to use for the function.

Step 2 define a function that accepts an array.

step 3 use a method that will iterate throught the function()
adding each iteration to the sum of the last iteration.

step 4 return a sum*/


let weeklyScore = [22, 3, 8, 2];



function sum(arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        s = s + arr[i];
    }
    return s;

}

console.log(sum(weeklyScore));