/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Pack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const content = `
  <main>
    <article>
      <h1>${everydayPack.name}</h1>
      <ul>
        <li>Volume: ${everydayPack.volume}</li>
        <li>Color: ${everydayPack.color}</li>
        <li>Age: ${everydayPack.backpackAge()}</li>
        <li>Number of pockets: ${everydayPack.pocketNum}</li>
        <li>Left strap length: ${everydayPack.strapLength.left}</li>
        <li>Right strap length: ${everydayPack.strapLength.right}</li>
        <li>Lid status: ${everydayPack.lidOpen}</li>
      </ul>
    </article>
  </main>
`;

document.body.innerHTML = content;

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());


// eslint-disable-next-line no-irregular-whitespace
// // JavaScript code​​​​​​‌​‌​‌​‌​​​​‌‌‌‌​​​​‌​​​​ below
// Write your answer here, then test your code.
// Your job is to implement the findLargest() method.

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
// const showExpectedResult = false;
// const showHints = false;

// function Camera(brand, model, year, format, lens, filmType) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.format = format;
//     this.lens = lens;
//     this.filmType = filmType;
// }

// const getCurrentYear = () => new Date().getFullYear();

// const cameraAge = (year) => getCurrentYear() - year;

// // Goal output:
// // My camera is a [brand] [model] made in [year] making it [age] years old. It's a [format] camera with a [lens] lens using [filmtype] film.`
// const cameraHTML = (myCamera) => {
//     // Your code goes between the backticks in `cameraStory` below.
//     const cameraStory = `My camera is a ${myCamera.brand} ${myCamera.model} made in ${myCamera.year} making it ${cameraAge(myCamera.year)} years old. It's a ${myCamera.format} camera with a ${myCamera.lens} lens using ${myCamera.filmType} film.`;
//     return cameraStory;
// }    


