console.log("Up and running!");

/*var cardOne = "King of Diamonds";
var cardTwo = "Queen of Diamonds";
var cardThree = "King of Hearts";
var cardFour = "Queen of Hearts";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
console.log("User flipped " + cardThree);
console.log("User flipped " + cardFour);*/

alert('Hello, friends.');

var cards = ["King of Diamonds", "Queen of Diamonds", "King of Hearts", "Queen of Hearts"];

var cardsInPlay = [];
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


var checkForMatch = function () {

  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");

  }
}

// user flipping a card
var flipCard = function (cardId) {

  // the card the user just flipped in the console
  console.log("User flipped " + cards[cardId]);

  // Add card to array of cards that are in play
  cardsInPlay.push(cards[cardId]);

  // Check to see if two cards have been played
  if (cardsInPlay.length === 2) {
    // If so, call the checkForMatch function
    checkForMatch();
  }
};

// Call the flipCard function
flipCard(0);
// Call the flipCard function
flipCard(2);