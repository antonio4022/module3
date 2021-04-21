/* Write a javascript function that sorts the following array of objects by title.
*/


let myBooks = [
    { author: 'Malcolm X', title: 'The Autobiography of Malcom X', LibraryID: 1247 },
    { author: 'Benot Lerone Jr.', title: 'Before the Mayflower', LibraryID: 1587 },
    { author: 'Cronin E.D.', title: 'Black Moses(The story of Garvey and the UNIA)', LibraryID: 56974 }
]

// arr.sort(function (a, b) {
//     if (a.title.toLowerCase() < b.title.toLowerCase())
//         return -1
//     if (a.title.toLowerCase() > b.title.toLowerCase())
//         return 1;
//     return 0;

// })

function organizeBooks(obj, key) {
    const bye = key.toLowerCase()
    arr.sort(function (a, b) {

        if (a.bye > b.bye)
            return 1;

        if (a.by < b.by)
            return -1;
        return 0;
    })
}
let printMe = organizeBooks(myBooks, title)
console.log(printMe);

