
const fruits = ['apple', 'orange', 'berry', 'banana'];

function showFirstTwo(arr, index) {
    return arr.slice(0, index);
}

console.log(showFirstTwo(fruits, 3));




// <!---------------------Question 2 join elements into a string------------------!>

var myColor = ["Red", "Green", "White", "Black"];

function turnToString(arr) {
    return arr.join();

}
console.log(turnToString(myColor));

/*-----------array-like-object---------Question 2----*/

console.log(myColor.join('*'));



/*-----------------Question 3----------------------*/




var numbers = [6, 8, 2, 4, -4, 3, 2, 1];

//compare function required (a-b)
numbers.sort(function (a, b) {
    return a - b;
})

console.log(numbers);

//decending compare function
numbers.sort(function (a, b) {
    return b - a;
})
console.log(numbers);


/*--------------Question 4---Remove duplicates------------------*/

const myNumbers = [1, 2, 2, 4, 5, 4, 6, 8, 6, 7, 9, 3, 4];

myNum = []

let len = myNumbers.length;

for (let i = 0; i < len; i++) {
    if (myNum.indexOf(myNumbers[i]) === -1) {
        myNum.push(myNumbers[i]);
    }
}
console.log(myNum);



/*--question 4 2nd attempt-----*/

// let myNum = [...new Set(myNumbers)];

// myNum.forEach(data => console.log(data));


/*-----question 4 3rd attempt------*/

console.log([...new set(myNumbers)]);

//  doesnt' work -- myNumbers = myNumbers.filter((value, index, arr) => arr.indexOf(value) == index);


/*-----------question 4 another 4th attempt doesn't work----*/

// uniqueNumbers = myNumbers.reduce((map, obj) => map.set(obj new map());