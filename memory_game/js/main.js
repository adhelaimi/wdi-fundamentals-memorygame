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

var cardsInPlay = [];

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
};


var flipCard = function () {
  cardId = this.getAttribute('data-id');
  console.log(cardId);

  cardsInPlay.push(cards[cardId].card);
  this.setAttribute('src', cards[cardId].cardImage);

  if (cardsInPlay.length === 2) {
    checkForMatch();
    cardsInPlay = [];
  }
};

var createBoard = function () {
  
  for (var i = 0; i < cards.length; i++) {
    
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');


    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);

    document.getElementById('game-board').appendChild(cardElement);

  }

}

// Call the createBoard.
createBoard();

//JavaScript
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