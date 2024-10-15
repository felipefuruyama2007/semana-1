let randomNumber =
Math.floor(Math.random()*10)+1;
let attempts = 0;
function checkguess (){
    const userguess=parseint(document.getElementById (guess).value);attempts++;
    if (userGuess === randomNumber) {
        document.getElementById (message).innerText = 'parabens voce acertou';

