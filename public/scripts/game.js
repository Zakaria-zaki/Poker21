async function startGame() {         
  var x = document.getElementById("card-back");
  isPlaying = 1;
  if (x.style.display === "none" && isPlaying === 1) {
   x.style.display = "block";
        document.getElementById("buttons-start").style.display = "none";
        document.getElementById("buttons-start").style.display = "none";
        document.getElementById("him").style.display = "none";
        x.style.display = "block";
        document.getElementById("startGame").style.display = "none";
        x.innerHTML += "<div id='buttons' style='display: inline;'>";
          
  } else {
    isPlaying = 0;
    x.style.display = "none";
  }
}


async function cardDeals() {
  if (isPlaying === 1 ){
      
    document.getElementById("game").style.display="inline-block";
    let cardsToDeal = parseInt(document.getElementById("inputCard").value);
    var tab = ['KING','JACK','QUEEN']
    var ace = 'ACE';
      clicks += 1;
      if (clicks === 1){
        
        deckID = await getNewDeckID();
        document.getElementById("buttons").innerHTML += "<button id='ress'  class='btn-green' onclick='restartGame()'>Restart</button>";
        document.getElementById("buttons").innerHTML += "<button id='btn-stop'  class='btn-green' onclick='stopGame()'>Stop Game</button>";
        document.getElementById("buttons").innerHTML += "<button id='replay'  class='btn-green' onclick='replayGame()'>Replay Game</button>";
        document.getElementById("party-information").style.display = "inline-block";
        document.getElementById("party-information").innerHTML += "<h4 id='deckid'> DeckId du jeu : "+deckID;
        document.getElementById("party-information").innerHTML += "<h4 id='score'>"
        document.getElementById("party-information").innerHTML += "<h4 id='remainig'>"
        document.getElementById("party-information").innerHTML += "<h4 id='api'>"
        document.getElementById("party-information").innerHTML += "<h4 id='network'>"
      }
          

          
    document.getElementById("cards-deal").style.display = "inline-block";
    if(document.getElementById('btn-stop').style.display === "none") {
      document.getElementById('btn-stop').style.display = "inline-block";
    }
    
    for (let i = 0; i < cardsToDeal; i++) {

      if(!/iPhone|iPad|iPod|iOS|Mac OS|Macintosh/i.test(navigator.userAgent)){
       
        window.navigator.vibrate(300);
      }

      card =  await getCard(deckID);
      
      var cardImage = card.cards[0].image;
      var cardValue = card.cards[0].value;
      if (tab.includes(cardValue)){  
        cardValue = 10;
      } else if (cardValue === ace){
        cardValue = 0;
      } else {
        cardValue;
      }
      document.getElementById("cards-deal").innerHTML += "<img src='"+ cardImage +"'style='transform:rotate("+((Math.random() * 50)-25)+ "deg); position: absolute;' class='card-image' id='card-image"+card.cards[0].code+"'>";

      totalCard = parseInt(cardValue)+parseInt(totalCard);
      collectionOfCards.push(card);
      

      
       
      document.getElementById("score").innerHTML = "score :" +totalCard;
      document.getElementById("remainig").innerHTML = "Remaining :" +card.remaining;
      document.getElementById("api").innerHTML = "connecté à l'api :" +card.success;
      document.getElementById("network").innerHTML = "connecté à internet :"+window.navigator.onLine;

      

      
    }  
    if (isPlaying == 1 && card.remaining > 0) {
         
      if (totalCard === 21){
        modalPrintOnWin();
        modalContent.innerHTML += "<h2 style='text-align:center;'>Votre carte porte bonheur est le "+collectionOfCards.slice(-1)[0].cards[0].value+" de "+collectionOfCards.slice(-1)[0].cards[0].suit+"</h2>";
        document.getElementById('btn-stop').style.display = "none";
        element.cards[0].image;
       
                   
        } else if (totalCard > 21) {

        modalPrintOnLose();
        modalContent.innerHTML += "<h2 style='text-align:center;'>Votre bourreau est le "+collectionOfCards.slice(-1)[0].cards[0].value+" de "+collectionOfCards.slice(-1)[0].cards[0].suit+"</h2>";
        document.getElementById('btn-stop').style.display = "none";

      }
    }
  }
}