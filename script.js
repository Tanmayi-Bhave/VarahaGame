'use strict';

//selecting elements
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0El=document.getElementById('score--0');
const score1El=document.getElementById('score--1');
const curr0El=document.getElementById('current--0');
const curr1El=document.getElementById('current--1');
const diceEl=document.querySelector('.dice');
const btnRoll=document.querySelector('.btn--roll');
const btnNew=document.querySelector('.btn--new');
const btnHold=document.querySelector('.btn--hold');
let currentScore=0;
let activePlayer=0; 
let playing =true;


const switchPlayer= function(){
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
        document.getElementById(`current--${activePlayer}`).textContent=0;
        activePlayer= activePlayer=== 0 ? 1 : 0;
        currentScore=0; 

};

//startong conditions
let scores=[0,0];
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

//rolling dice funnctionality
btnRoll.addEventListener('click', function(){
    if (playing)
    {
            //generate randome dice no
    const dice=Math.trunc(Math.random()* 6 + 1);
    //console.log(dice);

    //Displya dice img accordingly
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;
    

    //check if rolled no 1, switch player
    if(dice!==1)
    {
        currentScore +=dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        //document.getElementById(`player--${activePlayer}`).classList.add('player--active'); 
        //curr0El.textContent=currentScore;

    }
    else{
        switchPlayer();
    }

    }
});

btnHold.addEventListener('click', function () {
    //console.log("hello");
    if (playing) {
      // 1. Add current score to active player's score
      scores[activePlayer] += currentScore;
      // scores[1] = scores[1] + currentScore
  
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
  
      // 2. Check if player's score is >= 50
      if (scores[activePlayer] >= 50) {
        // Finish the game
        playing = false;
        diceEl.classList.add('hidden');
  
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
      } else {
        // Switch to the next player
        switchPlayer();
      }
    }
  });

  btnNew.addEventListener('click', function(){
    //currentScore=0;
    score0El.textContent=0;
    score1El.textContent=0;
    curr0El.textContent=0;
    curr1El.textContent=0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
    currentScore=0;
    activePlayer=0; 
    playing =true;
    scores=[0,0];

    diceEl.classList.add('hidden');
    //document.getElementById(`current--${activePlayer}`).textContent=0;
    //document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    //document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    // document.getElementById(`current--${activePlayer}`).textContent=0;
  }); 

  document.querySelector('.btn--rule').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('rule-popup').style.display = 'block';
});

document.getElementById('close').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('rule-popup').style.display = 'none';
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('rule-popup').style.display = 'none';
});


