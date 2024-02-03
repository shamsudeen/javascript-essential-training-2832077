/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const gridContainer = document.querySelector(".grid");

gridContainer.addEventListener("mouseenter", () => {
  gridContainer.style.outline = "6px solid red";
});

gridContainer.addEventListener("mouseleave", () => {
  gridContainer.style.outline = "";
});

/**
 * Function to generate random hex color
 */
const randColor = () => {
  let hexColor = Math.floor(Math.random() * 16777215).toString(16);
  return hexColor;
};

// Get all cells
const gridCells = document.querySelectorAll(".cell");

// For each cell, add eventlisteners aplenty
gridCells.forEach((cell) => {
  // Set outline when cell is hovered
  cell.addEventListener("mouseenter", (e) => {
    console.log(e);
    cell.style.outline = "2px solid red";
  });

  // Remove outline when the cell is no longer being hovered
  cell.addEventListener("mouseleave", (e) => {
    cell.style.outline = "";
  });

  // Change the background of the cell when it's been clicked on
  cell.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "#" + randColor();
  });
});

// Remove outline when the cell is no longer being hovered
cell.addEventListener("mouseleave", (e) => {
  cell.style.outline = "";
});

// Change bgcolor of cell when it's clicked
cell.addEventListener("click", (e) => {
  cell.style.backgroundColor = `#${randColor()}`;
});
// Add new row functionality
addRowBtn.addEventListener("click", function () {
  const table = document.createElement("table");
  var row = table.insertRow();
  for (var i = 0; i < 4; i++) {
    var cell = row.insertCell();
    cell.className = "cell";
  }
  mainTable.appendChild(table);
});

// Function to remove rows from table
function deleteRows() {
  while (mainTable.rows.length > 1) {
    mainTable.deleteRow(-1);
  }
}

resetBtn.addEventListener("click", function () {
  deleteRows();
});

// Remove outline when cell is exited
cell.addEventListener("mouseleave", () => {
  cell.style.outline = "";
});

// Set/remove random background color on click
cell.addEventListener("click", () => {
  if (cell.style.backgroundColor) {
    cell.style.backgroundColor = "";
  } else {
    cell.style.backgroundColor = `#${randColor()}`;
  }
});

//Generate a random color
// function   randColor() {
//   return Math.floor(Math.random * 16777215).toString(16);
// }

// Copy cells' content to clipboard on ctrl+c
document.body.addEventListener("keydown", function (e) {
  if ((window.navigator.platform.match(/Macintosh|Windows|Linux/i)) && e.ctrlKey && !e.altKey && !e.shiftKey && e.code === "KeyC") {
  let numStr = Math.floor(Math.random() * 16777215).toString(16);
  return "0".repeat(6 - numStr.length) + numStr;
}
let numStr = Math.floor(Math.random() * 16777215).toString(16);
return "0".repeat(6 - numStr.length).concat(numStr);
let rowIndex, colIndex;

rowInput.oninput = (e) => {
  rowIndex = parseInt(e.target.value);
};
colInput.oninput = (e) => {
  colIndex = parseInt(e.target.value);
};

submitBtn.onclick = addRowCol;

function addRowCol() {
  tableBody.innerHTML = "";
  createTable();
  populateCells();
}

/**
 * Set page background using the "d" key on the keyboard
 */
document.body.addEventListener("keydown", function (event) {
  const body = document.body;
  body.addEventListener("keydown", (event) => {
    // event.code holds the current key pressed:
    console.log(event.code);

    // Test for KeyD (the "d" key)
    if (event.code === "KeyD") {
      body.style.backgroundColor === ""
        ? (body.style.backgroundColor = "hsl(201, 34%, 13%)")
        : (body.style.backgroundColor = "");
    }
  })
  });

// Function to generate HTML Table structure with rows and columns based on user input
function createTable() {
  let table = `<table border="1">`;
  let rows = ` <tr>`;
  for (let i = 1; i <= rowIndex; i++) {
    rows += `<td> Row ${i}</td>`;
  }
  table += rows + `</tr>`;

  for (let j = 1; j <= colIndex; j++) {
    table += `\n${rows}`;
  }
  table += `\n</table>`;
  tableBody.insertAdjacentHTML("beforeend", table);
}

const tableBody = document.getElementById("table-body");
rowInput.oninput = () => updateRows();
colInput.oninput = () => updateCols();

function updateRows() {
  rowIndex = Number(rowInput.value);
  while (tableBody.children[0].children.length > rowIndex) {
    tableBody.removeChild(tableBody.lastElementChild);
  }
  while (tableBody.children.length < rowIndex) {
    tableBody.appendChild(tableBody.firstElementChild.cloneNode(true));
  }
  createTable();
}

function updateCols() {
  colIndex = Number(colInput.value);
  if (!tableBody.innerHTML) return;
  const firstRow = tableBody.children[0];
  for (let i = firstRow.children.length; i < colIndex; i++) {
    firstRow.append(`<td>Column ${i+1}</td>`);
  }
  while (firstRow.children.length > colIndex) {
    firstRow.removeChild(firstRow.lastElementChild);
  }
  createTable();
}

// Event Listeners
submitBtn.addEventListener('click', e => {
  // Prevent form from submitting normally
  e.preventDefault();
  
  // Clear old table before creating new one
  clearOldTable();
  
  // Create the table based on user input
  createTable();
})
// Function to generate HTML table given number of rows and columns
function createTable() {
  let htmlString = '<tr>';
  for (const cell of tableBody.children[0].children) {
    htmlString += `<th>${cell.innerText}</th>`;
  }
  htmlString += '</tr>\n';
  for (let i = 0; i < rowIndex; i++) {
    htmlString += tableBody.children[0].children[0].outerHTML;
  }
  tableGen.innerHTML = htmlString + '\n</tbody></table>';
}

rowInput.oninput = () => {
  rowIndex = Math.max(1, Number(rowInput.value));
};  

// Add event listener to dynamically add/delete table cells when adding or removing a row
if (addRowBtn !== undefined && removeRowBtn !== undefined) {
  addRowBtn.addEventListener("click", function(){
    const clone = tableBody.children[0].cloneNode(true);
    for (const element of Array.from(clone.children)) {
      element.disabled = false;
    }
    rowIndex++;
    tableBody.appendChild(clone);
  });

  removeRowBtn.addEventListener("click", function(){
    if (rowIndex > 1){
      rowIndex--;
      tableBody.removeChild(tableBody.lastElementChild);
    }
  })




};  
// Event Listener that triggers the creation of an HTML Table whenever any input field is changed
mainForm.addEventListener('change', function(){
  // Reset the table and clear all rows before creating new table
  resetTable();
  createTableHeading();
  createTableBody();
});

function displayErrorMessage() {
  errorMsg.style.display = "block";
}

function hideErrorMessage() {
  errorMsg.style.display = "none";
}

// Function to check whether user has entered valid inputs in each cell of the table body
function validateInputs() {
  let isValid = true;
  const cells = document.querySelectorAll('#table-body tr:not(:first-child) td');
  cells.forEach((cell, index) => {
    const inputField = cell.getElementsByTagName('input')[0];
    const selectField = cell.getElementsByTagName('select')[0];
    if (!inputField.checkValidity()) {
      inputField.classList.add('invalid');
      isValid = false;
    } else {
      inputField.classList.remove('invalid');
    }
    if (selectField && !selectField.checkValidity()) {
      selectField.classList.add('invalid');
      isValid = false;
    } else {
      selectField.classList.remove('invalid');
    }
  });
  return isValid;
}
