/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */


// HTML elements of the grid cells
const gridCells = document.querySelectorAll('.grid-cell');
/**
 * 
 * 
 *   @param {Event} e The event object passed by the browser
 */
// eslint-disable-next-line no-unused-vars
function handleMouseOver(e) {   
    // Highlights the current cell when mouseover occurs
    this.classList.add('highlighted');        
}

/**
 * Function to remove the 'highlight' class from a given element, which makes it stop being highlighted.
 * This function is used as the callback for both `handleMouseOver` and `handleClick`.
 *  
 * @param {Element} elm The HTML element to be un-highlighted
 */
function removeHighlight(elm){
    elm.classList.remove('highlighted')    
}

/**
 * When a grid cell is clicked, we add the "clicked" class to it. We also call the `removeHighlight` function
 * with the clicked element after a short delay (to show the user that the click was successful).
 *  
 * @param {Event} _e The event object passed by the browser
 */
// eslint-disable-next-line no-unused-vars
function handleClick(e) {                            
    this.classList.add("clicked");       
    setTimeout(() => removeHighlight(this), 1000);            
}   

// Adding event listeners to all grid cells
gridCells.forEach((cell)=>{
    cell.addEventListener('mouseover', handleMouseOver);
    cell.addEventListener('click', handleClick);
});

    
    