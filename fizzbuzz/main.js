// function newbuzz(Arr) {


//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0)
//             return "Fizzbuzz"
//         else if (i % 3 === 0)
//             return "fizz"
//         else if (i % 5 === 0)
//             return "buzz"

//         else return i
//     }

// }

function numOrFizz(arr) {

    for (let i = 1; i <= 100; i += 1) {
        if (i % 3 == 00 && i % 5 == 0) {
            return fizzbuzz;
        } else if (i % 5 == 0) {
            return buzz;
        } else if (i % 3 == 0) {
            return fizz;
        } else
            return arr[i];
    }
}


console.log(numOrFizz('one'));





/* ----My original fizzbuzz ---------------- answer-----------*/

// for (let i = 1; i <= 100; i+= 1){     // This i+= 1 is not the same as i++.
//     if (i % 3 == 00 && i % 5 == 0){
//       console.log("fizzbuzz");
//     } else if (i % 5 == 0){
//       console.log("buzz");
//     } else if (i % 3 == 0) {
//       console.log("fizz");
//     } else
//       console.log (i);
