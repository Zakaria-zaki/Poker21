async function replayGame(){
    totalCard = 0;
    cardValue = 0;
    isPlaying = 1;
    document.getElementById("score").innerHTML = "score :" +totalCard;
   
  }

  

async function restartGame(){
  console.log(localStorage.getItem('collectionCards'));
  
  collectionOfCards = [];
  let element = document.querySelectorAll(".card-image");
  Array.prototype.forEach.call( element, function( node ) {
    node.parentNode.removeChild( node );
  });

  localStorage.setItem('collectionCards',collectionOfCards);
  if (isPlaying === 0) {
    isPlaying = 1;
    document.getElementById('btn-stop').style.display = "inline-block";

  }

  totalCard = 0;
  cardValue = 0;
  if(document.getElementById('cards-deal').style.display === "inline-block"){
    document.getElementById('cards-deal').style.display = "none";

  }
  if(document.getElementById('party-information').style.display === "inline-block"){
    document.getElementById("score").innerHTML = "score :" +totalCard;
    document.getElementById("remainig").innerHTML = "Remaining : 52"; 
    document.getElementById("api").innerHTML = "connecté à l'api :" +card.success;
    document.getElementById("network").innerHTML = "connecté à internet :"+window.navigator.onLine;
  }

  const url = `https://deckofcardsapi.com/api/deck/${deckID}/shuffle/`;
  const response = await fetch(url);
  
  
}