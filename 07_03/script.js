/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

// .push() - adds one or more items to the end of an array and returns new
console.log(backpackContents); // Output: piggy, headlamp, pen
// backpackContents.unshift("pencil", 5);

console.log(backpackContents.join(" | "));

// backpackContents.forEach(function (item) {
//   item = `<li>${item}</li>`;
//   console.log(item);
// });

// let longItems = backpackContents.find(function (item) {
//   if (item.length >= 5) {
//     return item;
//   }
// });
// console.log("longItems:", longItems);

// newDeskArr.pop()
// Removes the last element from an array and returns that element. This method changes the length
// of the array.
// newDeskArray.sort()

 var numbers = [1, 2, 3, 4, 5];
 numbers.push(6);
 numbers.unshift(7);
 numbers.pop();
 numbers.shift(); //1,2,3,4,5





// eslint-disable-next-line no-irregular-whitespace
// JavaScript code​​​​​​‌​‌​‌​‌​​‌‌‌​‌​‌‌​‌​‌‌​​‌ below
// Write your answer here, then test your code.

// Change these boolean values to control whether you see 
// the expected answer and/or hints
// const showExpectedResult = false;
// const showHints = false;

// const deskArray = [
//     "pen",
//     "camera",
//     "phone",
//     "notebook",
//     "headphones",
//     "laptop",
//     "light bulb",
//     "USB drive",
//     "elephant"
// ];

// const processArray = deskArray => {

//     let newDeskArr = [...deskArray];

//     // Your code goes here
//     newDeskArr.pop()
//     newDeskArr.sort()
//     newDeskArr.unshift(newDeskArr.pop())
//     const usbIndex = newDeskArr.indexOf("USB drive")
//     newDeskArr.push(newDeskArr.splice(usbIndex, 1))

//     const laptopIndex = newDeskArr.indexOf("laptop")
//     newDeskArr.splice(laptopIndex, 1)
//     // Your code ends here

//     return newDeskArr;
// };
