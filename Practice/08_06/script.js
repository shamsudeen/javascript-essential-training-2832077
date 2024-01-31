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