/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

// Article Object
const createArticle = (article) => {
  const el = document.createElement('ARTICLE');
  // Add title to the article using helper function
  addTitle(el, article.title);
  return el;
};

// Title Helper Function
const addTitle = (parent, text) => {
  const h1El = document.createElement('H1');
  h1El.textContent = text;
  parent.appendChild(h1El);
}

// Call main function and pass an example article
console.log(createArticle({ title: 'This is a test' }));



// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>JavaScript Practice</title>
// </head>
// <body>

//     <div id="myElement">Original Text</div>

//     <script>
//         // 1. Basic function declaration
//         function myFunctionDeclaration() {
//             console.log("Function Declaration called!");
//         }

//         // 2. Change an element in the DOM using querySelector
//         const myElement = document.querySelector('#myElement');
//         myElement.classList.add('highlighted');

//         // 3. Call the function declaration
//         myFunctionDeclaration();

//         // 4. Basic function expression
//         const myFunctionExpression = function() {
//             console.log("Function Expression called!");
//         };

//         // Call the function expression
//         myFunctionExpression();
//     </script>

// </body>
// </html>

// find an element
// make a change to it
// call the function
// confirm that it works
// repeat with an arrow function

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>JavaScript Practice</title>
// </head>
// <body>

//     <div id="myElement">Original Text</div>

//     <script>
//         // Function to find an element, make a change, and call the function
//         function manipulateElement() {
//             const element = document.querySelector('#myElement');
            
//             // Make a change to the element
//             element.textContent = "Text Changed";
//             element.style.color = "blue";

//             console.log("Function called! Element changed.");
//         }

//         // Call the function
//         manipulateElement();

//         // Repeat with an arrow function
//         const manipulateElementArrow = () => {
//             const element = document.querySelector('#myElement');
            
//             // Make a change to the element
//             element.textContent = "Text Changed by Arrow Function";
//             element.style.color = "green";

//             console.log("Arrow Function called! Element changed.");
//         };

//         // Call the arrow function
//         manipulateElementArrow();
//     </script>

// </body>
// </html>
