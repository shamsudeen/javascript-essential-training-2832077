/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const tipCalculator = (sum, percentage, currency, prefix) => {
  // let sum = 29.95;
  // let percentage = 18;
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  if (prefix){
      console.log(`
      Sum before tip: ${currency}${sum}
      Tip percentage: ${currency}${percentage}%
      Tip:            ${currency}${tip.toFixed(2)}
      Total:          ${currency}${total.toFixed(2)}
    `);
    
  } else {
     console.log(`
  Sum before tip: ${sum}${currency}
  Tip percentage: ${percentage}%
  Tip:            ${tip.toFixed(2)}${currency}
  Total:          ${total.toFixed(2)}${currency}
`);
    
  }

};

tipCalculator(29.95, 28,  "$", true);
// Outputs: "Sum before tip: 29.95\nTip percentage: 28%\nTip:            7.64\nTotal:                    37.69"
// Outputs: "Sum before tip: 29.95\nTip percentage: 28%\nTip:            7.64\nTotal:          37.69" 
