// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// created a variable to hold the contents of the div in the html. This variable
// will be used in the printQuote function.
var message = "";

// created an empty array variable. This empty array will hold the objects
// that are spliced or removed from my quotes array object. That way quotes
// quotes are not duplicated until they have been displayed at least once.
var displayedQuotes = [];

// created a function for the div in the html to print out the contents correctly.
function print(quote) {
	var div = document.getElementById('quote-box');
	div.innerHTML = quote;
}

// create a random rgb color to be used as the backgound color.
function randomColor() {
	var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ','
										+ (Math.floor(Math.random() * 256)) + ','
										+ (Math.floor(Math.random() * 256)) + ')';

	return color;
}

// created a function to return a random index or number from the quotes array object.
function getRandomQuote() {
  var randomArrayIndex = quotes[Math.floor(Math.random() * quotes.length)];

	// created a variable to hold my spliced quote. This spliced qoute is then
	// pushed or added to my empty array named displayedQuotes.
	var spliceQuote = quotes.splice(randomArrayIndex, 1)[0];
	displayedQuotes.push(spliceQuote);

	// This is a condition that checks if my initial quotes array object is empty.
	// If it is, then replace all the values with the displayedQuotes array. Also
	// make the displayedQuotes array empty again.
	if (quotes.length === 0){
		quotes = displayedQuotes;
		displayedQuotes = [];
	};

  return spliceQuote;
}

// created a function to print a random quote from our quotes array object and
// also change the background to a random color.
function printQuote() {
  // gets a random quote from the array object and stores it in a variable
  randomQuote = getRandomQuote();

	// fills the 'quote-box' div with the values of our randomly generated quote.
  message = '<p class="quote">' + randomQuote.quote + '</p>';
  message += '<p class="source">' + randomQuote.source + '<span class="citation">' + randomQuote.citation + '</span><span class="year">' + randomQuote.year + '</span><span class="category">' + randomQuote.category + '</pan></p>';

	// prints the quote to our html page.
  print(message);

	// generates a random color.
	randomColor();

	// changes the body background color to the newly generated color.
	document.getElementById('bgcolor').style.backgroundColor = randomColor();
	document.getElementById('loadQuote').style.backgroundColor = randomColor();
}

// changes the quote and background color after a 10 second delay/interval
var interval = setInterval(printQuote, 10000);
