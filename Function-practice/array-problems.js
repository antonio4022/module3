/*-----------problem1----------------*/

// function longestWord(text) {
//     text = text.toUpperCase();
//     let word = text.split(' ')
//     let maxLength = 0
//     let result = null

//     for (let i = 0; i < word.length; i++) {
//         if (word[i].length > maxLength) {
//             maxLength = word[i].length
//             result = word[i]
//         }
//     }

//     return result
// }

// console.log(longestWord("Atlanta is a beautiful place but Massachussetts in money"));


/*-----------2nd attempt using forEach method work--------------------*/


// function longestWord(text) {
//     text = text.split(' ');
//     let maxLength = 0;
//     let result
//     text.forEach(str => {
//         if (str.length > maxLength) {
//             maxLength = str.length
//             result = str
//         }


//     });

//     return result;
// }
function findLongestWord(text) {
    var splitWords = text.split(' ');
    var maxLength = Math.max(...splitWords.map(x => x.length));
    var foundIndex = splitWords.findIndex(x => x.length == maxlength);
    return splitWords[foundIndex];

}


// console.log(longestWord("Atlanta is a beautiful place but Massachussetts in money"));


/*--------------------------Problem2-------------------------------------------------*/


// function getCount(boy) {
//     var vowelCount = 0
//     var arrayOfVowels = ['a', 'i', 'e', 'o', ' u'];
//     for (var char of boy) {
//         if (arrayOfVowels.includes(char)) {
//             vowelCount++
//         }
//     }
//     return vowelCount
// }

//console.log(getCount("This Javascript is crazy hard!"))


// function vowelCount(str) {
//     str = str.toLowerCase();
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === "a" ||
//             str[i] === "e" ||
//             str[i] === "i" ||
//             str[i] === "o" ||
//             str[i] === "u") {
//             count++;
//         }
//     }
//     return count;
//}

//console.log(vowelCount("I thought coding was hard its super HAAAAARD"));

/*--------problem 2 attempt use filter method---doesn't work-*/



//var myVowels = ['a', 'e', 'i', 'o', 'u']


// function vowelCount(str) {
//     let newStr = str.match(/[aeiou]/ig);
//     let i = 0;
//   myVowels.forEach(myVowels => {

//      });
//     {



// function vowelCount(str) {
//     str = str.split('')
//     console.log(str)
//     let newStr = str.filter(letter => myVowels.includes(letter));
//     return newStr.length;

// }

// console.log(vowelCount("Javascript is crazy hard"));

//--------------------------Problem3---------------------------------------

// function giveMeAnI(str, letter) {
//     str = str.toLowerCase();
//     letter = letter.toLowerCase();

//     let pops = 0;
//     for (let x = 0; x < str.length; x++) {
//         if (str[x] === letter) {
//             pops++;
//         }

//     }
//     return pops;
// }

// console.log(giveMeAnI("I cheated on this one and used a similar function", "S"));


// function giveMeAnI(str, letter) {
//     str = str.toLowerCase().split(' ');
//     let pops = 0;
//     letter = letter.toLowerCase();
//     str.forEach(word => {
//         if (word.includes(letter)) {
//             pops++;
//         }
//     });




//     return pops;
// }
// console.log(giveMeAnI("I cheated on this one and used a similar function", "S"));



/*--------------------------------Problem4--------------------------------------------*/


// function isPalindrome(str) {

//     var reversedText = str.toLowerCase()
//         .split('').reverse().join('')

//     return str === reversedText
// }

// console.log(isPalindrome("the race car driver loves speed"));

/*-----------1st attempt------problem 4--------*/



// isPalindrome = (string) => {
//     string = string.toLocaleLowerCase();
//     return Array.from(string).toString() === Array.from(string).reverse().toString()
// }

// console.log(isPalindrome("race car"));


/*---------------------2nd attempt---problem 4-------------*/


// function checkPalindromes(string) {
//     var items = string.toLowerCase().replace(/[^a-z0-9-\s]+/, '').split(' ');
//     items.filter(function(item) {
//       return item.split('').reverse().join('') === item;
//     });

//     return items;
//   }
//   checkPalindromes('I live at home with my Mum, my Dad and my Brother!'); 

/*-------------3nd palidrome with map function doesn't work--------------------*/


// function palindromeChecker(string) {
//     var myString = string.toLowerCase();
//     var myArray = myString.split(" ");
//     var newArray = myArray.map(function (item) {
//           return item.split("").reverse().join("");
//       });
//     console.log(newArray);
//     return newArray.reverse().join(" ") === string;
//   }

//   console.log(palindromeChecker("dad did what"));


/*-------------------------4rd palindrome-------------*/
// isPalindrome = (string) => {
//     let strLen = Math.floor(string.length / 2);
//     string = string.toLocaleLowerCase();

//     for (let i = 0; i < strLen; i++) {
//         if (string[i] !== string[strLen - i - 1]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPalindrome("race car"));


/*-----------problem 5-------------------*/
// let felix = [1]
// let felix.length = 100;
// // const map1 = felix.map(felix % 3 === 0);
// // const result = number.filter(number => number.length === felix);



// for (var x = 0; x <= 100; x++) {
//     if (x % 3 === 0) {
//         console.log(x + " Fizz");
//     }
//     else if (x % 5 === 0 && x % 3 === 0) {
//         console.log(x + " FizzBuzz");
//     }
//     else {
//         console.log(x);
//     }
// }


// console.log(felix);


// let felix = 100;
// let number = felix.length = 100;
// let x = ("number");
// let map1 = (x % 3 === 0);
// let map2 = (x % 5 === 0);
// let map3 = (x % 3 === 0 && felix % 5 === 0);

// felix.forEach(number => {
//     if (number = map1) {
//         console.log(fizz);
//         if (number = map2); 
//         console.log(buzz);
//         if (number = map3)
//             console.log(fizzbuzz);


//     }

// });

/*------problem5------attempt to use the map()-doesn't work------



// var filled = Array.apply(null, Array(100))
//     .map(function (val, index) {
//         if (filled % 3 === 0)
//             console.log(index + "Fizz");


//         return index + 1;



//         console.log(filled);


/* */
