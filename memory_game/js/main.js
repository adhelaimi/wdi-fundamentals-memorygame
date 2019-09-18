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
var cardOne = cards[0];
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
console.log("User flipped" + cardFour );


if (cardsInPlay.length === 4) {

  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

