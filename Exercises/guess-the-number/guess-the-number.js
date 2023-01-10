/*
al caricamento della pagina sceglie un numero e si inserisce un numero ogni volta nell'input (magari lo stampo in console)

highest score è la somma del numero vinto + la precedente vincita

inserisci un bottone di reset per estrarre un nuovo numero
*/

//CREO IL NUMERO RANDOM

let randomNumber = Math.floor(Math.random() * 20)+1;
console.log(randomNumber);
/*
function randomNumber() {
    console.log(Math.floor(Math.random() * 20)+1);
}
*/

document.getElementById('btn_guess').addEventListener('click', () => {
    let guessNumber = parseInt(document.getElementById('input_number').value);
    let scoreNumTag = document.querySelector('#label_score > span');
    let highScoreTag = document.querySelector('#label_highscore > span');
    
    if(guessNumber == randomNumber) {
        document.querySelector('.logo').innerHTML = "!";
        
        //let scoreNum = parseInt(scoreNumTag.innerHTML);
        scoreNumTot = parseInt(scoreNumTag.innerHTML) + guessNumber;
        document.querySelector('#label_score > span').innerHTML = scoreNumTot;
        highScoreTot = parseInt(highScoreTag.innerHTML) + scoreNumTot;
        document.querySelector('#label_highscore > span').innerHTML = highScoreTot;

        let winnerTag = document.querySelector('.message');
        winnerTag.innerHTML = "CONGRATULATION! You are the winner!";
        winnerTag.classList.add('winner');
        

    } else {
        document.querySelector('.logo').innerHTML = "X";
        highScoreDef = parseInt(highScoreTag.innerHTML) - guessNumber;
        document.querySelector('#label_highscore > span').innerHTML = highScoreDef;
        if(highScoreDef<0) {
            document.querySelector('#label_highscore > span').innerHTML = 0;
            document.getElementById('btn_guess').innerHTML = "GAME OVER <br> Play again!";
            document.getElementById('btn_guess').classList.add('game-over');

            document.getElementById('btn_guess').addEventListener('click', () => {
                window.location.reload();
            })

        }
    }

    document.getElementById('input_number').value = "";
})

