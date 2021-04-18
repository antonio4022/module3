/*Create an object, then write a Javascript function that checks whether an object contains the specified key.

step 1 create an Object with several properties
step 2 define a function that accepts and object
step 3 In the created function use a method that checks for the specified keyword with boolean (truth or false)
step 4 The function returns true or false.
*/

var person = {
    fName: 'John',
    lName: 'Snow',
    city: 'Boston',
    state: 'Massachussetts'
};

function checkKey(obj, key) {
    for (k of Object.keys(obj)) {
        if (k.includes(key)) {
            return `${key} key is in object`;
        }
    }
}

console.log(checkKey(person, 'city'));