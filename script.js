/* Falling stars */
setInterval(() => {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.left = Math.random() * 100 + 'vw';
  star.style.animationDuration = 3 + Math.random() * 3 + 's';
  star.innerHTML = '✨';
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 6000);
}, 300);

/* Memory game logic */
const symbols = ['💖','💖','🌸','🌸','✨','✨','🎂','🎂'];
symbols.sort(() => 0.5 - Math.random());

const grid = document.getElementById('grid');
let first = null;
let lock = false;
let matches = 0;

symbols.forEach(sym => {
  const tile = document.createElement('div');
  tile.className = 'tile';
  tile.innerText = '❓';
  tile.onclick = () => {
    if (lock || tile.classList.contains('matched')) return;
    tile.innerText = sym;
    if (!first) {
      first = { tile, sym };
    } else {
      lock = true;
      if (first.sym === sym) {
        tile.classList.add('matched');
        first.tile.classList.add('matched');
        matches++;
        first = null;
        lock = false;
        if (matches === 4) {
          // unlock Slide 2
          document.getElementById('slide2').classList.remove('hidden');
          document.getElementById('slide1').querySelector('p').innerText = "Memory Game Completed ✅";
        }
      } else {
        setTimeout(() => {
          tile.innerText = '❓';
          first.tile.innerText = '❓';
          first = null;
          lock = false;
        }, 800);
      }
    }
  };
  grid.appendChild(tile);
});

/* Candle logic */
const candle = document.getElementById('candle');
candle.onclick = () => {
  candle.innerText = '💨';
  document.getElementById('slide2').querySelector('p').innerText = "Candle Blown ✅";
  setTimeout(() => {
    // unlock Slide 3
    document.getElementById('slide3').classList.remove('hidden');
  }, 800);
};

/* Question + options */
const correctAnswer = "sasli";
function checkAnswer(btn){
    const result = document.getElementById("quizResult");
    if(btn.innerText.toLowerCase() === correctAnswer.toLowerCase()){
        document.getElementById('slide3').classList.add('hidden');
        document.getElementById('slide4').classList.remove('hidden');
    } else {
        result.innerHTML = "❌ Wrong choice! Try again 💖";
    }
}

/* Surprise logic */
const Surprise =document.getElementById('Surprise');
Surprise.onclick = () => {
  Surprise.innerText = '🎊';
  document.getElementById('slide2').querySelector('p').innerText = "Box Opened ✅";
  setTimeout(() => {
    // Unlock Slide 5
    
    document.getElementById('slide5').classList.remove('hidden');
  }, 800);
};

const surprise= document.getElementById('surprise');
Surprise.oneclick = () => {
  surprise.innerText = '🎊';
  setTimeout(() => {
    document.getElementById('slide5').classList.remove('hidden'); // show slide 5 with photos 
  },800);
};

/* Flip cards */
document.querySelectorAll(".flip-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

/* Audio logic */
const audio = document.getElementById("unlockAudio");

audio.addEventListener("ended", function() {
  document.getElementById("slide6").classList.remove("hidden");
  document.getElementById("audioMessage").innerHTML = "✨ Surprise Unlocked! ✨";
});

document.getElementById("giftCard").addEventListener("click",function(){
  this.classList.toggle("flipped");
});