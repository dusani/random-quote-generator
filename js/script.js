// created a function to return a random index or number from the quotes array object.
function getRandomQuote() {
  var randomArrayIndex = quotes[Math.floor(Math.random() * quotes.length)];
  return randomArrayIndex;
}

// created a function to print a random quote from our quotes array object.
function printQuote() {
  quote = getRandomQuote();

  return quote;
}

// console log for debugging purposes.
console.log(printQuote());


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote(), false);
