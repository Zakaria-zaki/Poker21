var evenDeg = 10;
var oddDeg = -10;
var clicks = 0;
var totalCard = 0;
var cardValue = 0;
var isPlaying = 0;
var modal = document.getElementById("myModal");
var modalContent = document.getElementsByClassName("modal-content")[0];
var span = document.getElementsByClassName("close")[0];
let collectionOfCards = [];

document.body.onkeyup = async (e) => {
    if(e.keyCode == 68 && isPlaying === 1){
    document.getElementById("inputCard").value = 1;
    cardDeals();   
    }
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.getElementById('confetti-wrapper').style.display = 'none';

     
    }
  }
  span.onclick = function() {
    modal.style.display = "none";
  }

  window.addEventListener("orientationchange", function() {
    if (isPlaying == 1 && window.orientation == 90 ) {
      document.getElementById("inputCard").value = 1;
      cardDeals();

    }
  }, false);