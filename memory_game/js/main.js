//console.log("Up and running!");

/*var cardOne = "King of Diamonds";
var cardTwo = "Queen of Diamonds";
var cardThree = "King of Hearts";
var cardFour = "Queen of Hearts";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
console.log("User flipped " + cardThree);
console.log("User flipped " + cardFour);*/

//alert('Hello, friends.');

//var cards = ["King of Diamonds", "Queen of Diamonds", "King of Hearts", "Queen of Hearts"];

//var cardsInPlay = [];
//CARD ONE
/*var cardOne = cards[0];
cardsInPlay.push('cardOne');
console.log("User flipped" + cardOne);

//CARD TWO
var cardTwo = cards[1];
cardsInPlay.push('cardTwo');
console.log("User flipped" + cardTwo);

//CARD THREE
var cardThree = cards[2];
cardsInPlay.push('cardThree');
console.log("User flipped" + cardThree);

//CARD Four
var cardFour = cards[3];
cardsInPlay.push('cardFour');
console.log("User flipped" + cardFour );*/


/*var checkForMatch = function () {

  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");

  }
}*/

// user flipping a card
/*var flipCard = function (cardId) {

  // the card the user just flipped in the console
  console.log("User flipped " + cards[cardId]);

  // Add card to array of cards that are in play
  cardsInPlay.push(cards[cardId]);

  // Check to see if two cards have been played
  if (cardsInPlay.length === 2) {
    // If so, call the checkForMatch function
    checkForMatch();
  }
};*/

// Call the flipCard function
//flipCard(0);
// Call the flipCard function
//flipCard(2);
// Create an array to store all card objects
var cards = [
  {
    card: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    card: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    card: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    card: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];

// Create an array to store the cards in play
var cardsInPlay = [];

// Create a function to check for a match
var checkForMatch = function () {
  // Check to see if two cards match and provide feedback to user
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
};

// Create a function to represent a user flipping a card
var flipCard = function (cardId) {

  // Display the card the user just flipped in the console.
  console.log("User flipped " + cards[cardId].card);

  // Add card to array of cards that are in play
  cardsInPlay.push(cards[cardId].card);

  // Display the image path in the console
  console.log(cards[cardId].cardImage)

  // Display the suit in the console
  console.log(cards[cardId].suit)

  // Check to see if two cards have been played
  if (cardsInPlay.length === 2) {
    // If so, call the checkForMatch function
    checkForMatch();
    // Empty cards in play array for next try
    cardsInPlay = [];
  }
};

// For now, we are manually calling the flipCard function
// to represent a user's play
// Call the flipCard function, passing in an index as the argument
flipCard(0);
// Call the flipCard function, passing in an index as the argument
flipCard(2);