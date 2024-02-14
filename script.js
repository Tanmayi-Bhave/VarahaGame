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




//startong conditions
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

//rolling dice funnctionality
btnRoll.addEventListener('click', function(){

    //generate randome dice no
    const dice=Math.trunc(Math.random()* 6 + 1);
    console.log(dice);

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
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
        document.getElementById(`current--${activePlayer}`).textContent=0;
        activePlayer= activePlayer=== 0 ? 1 : 0; 
        currentScore=0; 
        

    }

});
