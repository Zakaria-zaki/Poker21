async function stopGame(){
      var lastcard = await getCard(deckID);
      var cardImage = lastcard.cards[0].image;
      var cardValue = lastcard.cards[0].value;
      var tab = ['KING','JACK','QUEEN']
      var ace = 'ACE';
      collectionOfCards.push(lastcard);
      document.getElementById("remainig").innerHTML = "Remaining : " +lastcard.remaining;
      if (tab.includes(cardValue)){  
        cardValue = 10;
      } else if (cardValue === ace){
        cardValue = 0;
      } else {
        cardValue;
      }
      
      
      totalCard = parseInt(cardValue)+parseInt(totalCard);
      document.getElementById("score").innerHTML = "score : " +totalCard;
    if (totalCard === 21 || totalCard > 21){

      modalPrintOnWin();
      modalContent.innerHTML += "<h2 style='text-align:center;'>Votre carte porte bonheur est le "+collectionOfCards.slice(-1)[0].cards[0].value+" de "+collectionOfCards.slice(-1)[0].cards[0].suit+"</h2>";
     
    } else {
      modalPrintOnLose();
      modalContent.innerHTML += "<h2 style='text-align:center;'>Votre bourreau est le "+collectionOfCards.slice(-1)[0].cards[0].value+" de "+collectionOfCards.slice(-1)[0].cards[0].suit+"</h2>";
      
    }
    
    document.getElementById("cards-deal").innerHTML += "<img src='"+ cardImage +"'style='transform:rotate("+((Math.random() * 50)-25)+ "deg); position: absolute;' class='card-image' id='card-image"+collectionOfCards.slice(-1)[0].cards[0].code+"'>";

    document.getElementById('btn-stop').style.display = "none";
}