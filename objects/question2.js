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
    fullname: function () {
        return this.firstName + " " + this.lastName;
    }
};

var people2 = {
    firstName: "Antonio",
    lastName: "Alford-El",
    age: 40,
    fullname: function () {
        return this.firstName + " " + this.lastName;
    }
};


var people3 = {
    firstName: "Kwame",
    lastName: "Ture",
    age: 57,
    fullname: function () {
        return this.firstName + " " + this.lastName;
    }
};




let persons = [people1.fullname(), people2.fullname(), people3.fullname()];

var txt = "";

var x;
for (x in persons) {
    txt += persons[x] + ", ";

}
console.log(txt);














//console.log(people3.fullname);

//console.log(people1.fullname);








