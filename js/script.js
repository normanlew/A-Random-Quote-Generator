/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// This program generates random quotes from famous people

/*** 
 * This array contains objects of quotes.
***/
quotes = [
  {
    quote: "The roots of education... are bitter, but the fruit is sweet.",
    source: "Aristotle"
  },

  {
    quote: "In matters of conscience, the law of majority has no place.",
    source: "Gandhi",
    citation: "Young India",
    year: 1920
  },

  {
    quote: "Spread love everywhere you go; first of all in your house. Give love to your children, to your wife or husband, to a next door neighbor. Let no one ever come to you without leaving better and happier. Be the living expression of God's kindness; kindness in your face, kindness in your eyes, kindness in your smile.",
    source: "Mother Teresa"
  },

  {
    quote: "It is better to fail in originality, than to succeed in imitation. He who has never failed somewhere, that man can not be great. Failure is the true test of greatness.",
    source: "Herman Melville",
    citation: "Hawthorne and His Mosses",
    year: 1850
  },

  {
    quote: "A person who's happy will make others happy; a person who has courage and faith will never die in misery!",
    source: "Anne Frank",
    citation: "The Diary of a Young Girl",
    year: "1942-1944"
  }
];



/***
 * This function selects a quote from the array of quote objects.
***/
function getRandomQuote() {
  var index = Math.floor(Math.random() * 5);
  return quotes[index];
}


/***
 * This function creates an html string that contains all the attributes of a quote object.  It then updates the html file with the
 * new quote.
***/
function printQuote() {
  var theQuote = getRandomQuote();
  var html = "<p class='quote'>" + theQuote.quote + "</p><p class='source'>" + theQuote.source;

  if (theQuote.hasOwnProperty('citation')) {
    html += "<span class='citation'>" +  theQuote.citation + "</span>";
  };

  if (theQuote.hasOwnProperty('year')) {
    html += "<span class='year'>" + theQuote.year +  "</span>";
  }

  html += "</p>";

  document.getElementById('quote-box').innerHTML = html; 
}





/***
 * This function calls the printQuote() function everytime the button that generates a random quote is clicked
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);