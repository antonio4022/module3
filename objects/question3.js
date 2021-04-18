/* Create an object with three items in it, then write a javascript function that accepts an object and tells you the length (tells you how many items are in it) of the object.


1. Step 1 create an object with 3 items.
2. define a function that accepts objects and iterates through the object keeping count of the number of items.
3. in the defined function that keeps count of objects the final step should return the count.
*/

var phone = {
    type: "Andriod",
    model: "Note10",
    condition: "new",
    year: 2020
};

function findLength(obj) {
    let text = Object.values(obj)
    return text.length
}

console.log(findLength(phone));