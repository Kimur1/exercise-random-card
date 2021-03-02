let cards = ['♥', '♣', '♦', '♠']
let numbers =['A','2' ,'3','4','5','6','7','8','9','10','J','Q','K'];

function displayCard() {

  let singleCard = cards[Math.floor(Math.random() * cards.length)];
  let singleNumber = numbers[Math.floor(Math.random() * numbers.length)];


  let showCard = `${singleCard} ${singleNumber}   ${singleCard} `;
  document.getElementById("showing").style.background = '#ffffff';

  document.getElementById("showing").innerHTML = showCard;
  document.getElementById("btn").onclick = function(){

let index = displayCard(13);
  };
  
}