// bubble sort

// const bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j+1]) {
//                 let swap = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = swap;
//             }
//         }
//     }
//     return arr;
// };

// console.log(bubbleSort([1,4,2,5]));


//Bubble Sort - while loop

// function bubbleSort(arr) {
//   let j = 0;
//   while (j < arr.length) {
//     for (i = 0; i < arr.length; i++) {
//       if (arr[i + 1] < arr[i]) {
//         swap = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = swap;
//       }
//     }
//     j++;
//   }
//   return arr;
// }

// console.log(bubbleSort([1,4,2,5]));






// shuffled string

// s = "cdoe"
// indices = [0, 2, 1, 3]

// const shuffledString = (s, indices) => {
//     let unshuffled = "";
//     for (let i = 0; i < s.length; i++) {
//         unshuffled += s[indices[i]];
//     }
//     return unshuffled;
// }
// console.log(shuffledString(s, indices));






// fizzbuzz

// const fizzBuzz = (num) => {
//   for (let i = 1; i < num; i++) {
//     if (i % 15 == 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//       console.log("Fizz");
//     } else if (i % 5 == 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };

// fizzBuzz(25);
