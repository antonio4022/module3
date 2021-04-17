/*Question 1 write a javascrpt program to delete a property from a object
1. define an object with properties that will used in the example.
2. Use the delete key word on the object targeting the specific property

*/


var myStudent = {
    name: "John",
    age: 20,
    address: "111 main street",
    classes: 'javascript, react, html'

};

delete myStudent.classes;

/*----------------------*Question 2 --------------------
Write a javascript
Create an array of people objects with first name, last name, and age, then write a javascript program to display the first and last name of all the people.

Step 1 create the people objects as instructed.
Step 2 create an array variable with the people objects inside the array.
Step 2 use a method that will return all the first and last names from the object.

*/

var people1 = {
    firstName: "John",
    lastName: "Snow",
    age: 20,
};

var people2 = {
    firstName: "Antonio",
    lastName: "Alford-El",
    age: 40,

};


var people3 = {
    firstName: "Kwame",
    lastName: "Ture",
    age: 57,
};

var people = ["people1", "people2", "people3"];

function names(person) {
    for (let i = 0; i < person.length; i++)
        // result = [i].firstName + [i].lastName;
        //return result
        console.log([i]person);
}



console.log(names(people));







