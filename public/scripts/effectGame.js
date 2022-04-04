
function winGameEffect() {
    for(i=0; i<600; i++) {
      var randomRotation = Math.floor(Math.random() * 360);
      var randomScale = Math.random() * 1;
      var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
      var randomHeight =  Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 500));
      
      var randomAnimationDelay = Math.floor(Math.random() * 15);

      var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
      var randomColor = colors[Math.floor(Math.random() * colors.length)];

      var confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.top=randomHeight + 'px';
      confetti.style.right=randomWidth + 'px';
      confetti.style.backgroundColor=randomColor;
      confetti.style.obacity=randomScale;
      confetti.style.transform='skew(15deg) rotate(' + randomRotation + 'deg)';
      confetti.style.animationDelay=randomAnimationDelay + 's';
      document.getElementById("confetti-wrapper").appendChild(confetti);
    }
}

async function modalPrintOnWin() {
       
    isPlaying = 0;
    document.getElementById("confetti-wrapper").style.display ='block';
    modal.style.display = "block";
    modalContent.innerHTML = "<h2 style='text-align:center;'>Bravo champion !</h2>";
    modalContent.innerHTML += "<img src='./images/winner.png' width='250' id='modal-image'>";
    modalContent.innerHTML += "<audio id='audio' controls autoplay style='display:none;'>"+"<source src='sound/win.mp3' type='audio/mpeg'/>";
    winGameEffect();
    if(!/iPhone|iPad|iPod|iOS|Mac OS|Macintosh/i.test(navigator.userAgent)){
       
        window.navigator.vibrate(300);
    }
   
}

async function modalPrintOnLose() {
    
    isPlaying = 0;
    modal.style.display = "block";
    modalContent.innerHTML = "<h2 style='text-align:center;'>Booooooooouh vous avez perdu</h2>";
    modalContent.innerHTML += "<img src='./images/loser.png' id='modal-image'>";
    modalContent.innerHTML += "<audio id='audio' controls autoplay style='display:none;'>"+"<source src='sound/lose.mp3' type='audio/mpeg'/>";
    
    if(!/iPhone|iPad|iPod|iOS|Mac OS|Macintosh/i.test(navigator.userAgent)){
        window.navigator.vibrate(300);
    }
}