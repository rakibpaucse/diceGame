/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/




var dice = document.querySelector('.dice');
var btn_roll = document.querySelector('.btn-roll');
var btn_hold = document.querySelector('.btn-hold');
var btn_new = document.querySelector('.btn-new');
var btn_done = document.querySelector('.btn-done');


var currnt_0 = document.querySelector('#current-0');
var name_0 = document.querySelector('#name-0');
var score_0 = document.querySelector('#score-0');
var panel_0 = document.querySelector('.player-0-panel');




var currnt_1 = document.querySelector('#current-1');
var name_1 = document.querySelector('#name-1');
var score_1 = document.querySelector('#score-1');
var panel_1 = document.querySelector('.player-1-panel');






btn_new.addEventListener('click',function(){
    document.querySelector('.final_score').value = null
    location.reload();
});






var score = [0,0];

var active_player = 0 , playNumber;
var RandomNumber,currntScore_0 = 0 , currntScore_1 = 0;
var holdScore_0 = 0 , holdScore_1 = 0;

//var playNumber = parseInt(prompt('what will be winner score?'));


currnt_0.textContent = 0; 
score_0.textContent = 0; 
currnt_1.textContent = 0; 
score_1.textContent = 0; 
dice.style.display = 'none';



btn_done.addEventListener('click',function(){
     playNumber = document.querySelector('.final_score').value;
     btn_done.style.color = 'red'

});




btn_roll.addEventListener('click',function(){



        RandomNumber = Math.ceil(Math.random()*6);
        dice.src = 'dice-'+RandomNumber+'.png';
        dice.style.display = 'block';





    if( RandomNumber === 1){

        if ( active_player === 0){
            active_player = 1;
            currnt_0.textContent = 0;
            currntScore_0 = 0;

            panel_0.classList.remove('active');
            panel_1.classList.add('active');
 
        }

        else{
            active_player = 0;
            currnt_1.textContent = 0;
            currntScore_1 = 0;

            panel_1.classList.remove('active');
            panel_0.classList.add('active');
            
        }

    }




    if (active_player === 1 )
            {

                    if( RandomNumber === 1)
                    {
                        currntScore_1 -= RandomNumber;
                    }

                        currntScore_1 += RandomNumber;
                        currnt_1.textContent = currntScore_1;
                        
                
            }
    

    else
            { 
                if( RandomNumber === 1)
                {
                    currntScore_0 -= RandomNumber;
                }

                currntScore_0 += RandomNumber;
                currnt_0.textContent = currntScore_0;
            
            }

 




});



btn_hold.addEventListener('click',function(){

        if(active_player === 0 ){
            holdScore_0 += currntScore_0
            score_0.textContent = holdScore_0;
            currnt_0.textContent = 0;
            currntScore_0 = 0;
            active_player = 1;
            
            panel_0.classList.remove('active');
            panel_1.classList.add('active');
        }


        else{
            holdScore_1 += currntScore_1
            score_1.textContent = holdScore_1;
            currnt_1.textContent = 0;
            currntScore_1 = 0;
            active_player = 0;
            
            panel_1.classList.remove('active');
            panel_0.classList.add('active');
        }




        

    if ( parseInt(score_0.textContent) >= playNumber){
        panel_0.classList.add('winner');
        name_0.textContent = 'WINNER';

        btn_hold.disabled = true; 
        btn_roll.disabled = true; 

        panel_1.classList.remove('active');
        panel_0.classList.remove('active');

        dice.style.display = 'none';
    }

    
    if ( parseInt(score_1.textContent) >= playNumber){
        panel_1.classList.add('winner');
        name_1.textContent = 'WINNER';

        btn_hold.disabled = true; 
        btn_roll.disabled = true; 
  
        panel_1.classList.remove('active');
        panel_0.classList.remove('active');

        dice.style.display = 'none';
    }



});


