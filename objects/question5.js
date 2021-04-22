/* Write a javascript function that sorts the following array of objects by title.
*/


let myBooks = [
    { author: 'Malcolm X', title: 'The Autobiography of Malcom X', LibraryID: 1247 },
    { author: 'Benot Lerone Jr.', title: 'Before the Mayflower', LibraryID: 1587 },
    { author: 'Cronin E.D.', title: 'Black Moses(The story of Garvey and the UNIA)', LibraryID: 56974 }
]




myBooks.sort(function (a, b) {

    if (a.title.toLowerCase() > b.title.toLowerCase())
        return 1;

    if (a.title.toLowerCase() < b.title.toLowerCase())
        return -1;
    return 0;
})

console.log(myBooks);


