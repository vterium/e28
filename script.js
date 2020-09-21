let winMessage = document.querySelector('#winMessage');
let higherMessage = document.querySelector('#higherMessage');
let lowerMessage = document.querySelector('#lowerMessage');

pick.addEventListener('click', guessing)



function guessing() {
  let randomNumber = Math.round(Math.random() * 10);
  let number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  let win = false;
  
  while(win == false){
 

  let tries = 0;
  let results = document.querySelector('#results');
  let userChoice = document.querySelector('input[name ="choice"]:checked').value;

  let guess = number[randomNumber];
 
  output.innerHTML = guess;
  
  tries++;

  results.style.display = 'block';
  setTimeout(function() {
    results.style.display = 'block';
  }, 100)

 if (guess == userChoice) {
    winMessage.style.display = 'none';
    win = true;


  } 
  
 else if (guess < userChoice) {
    higherMessage.style.display = 'block';
    lowerMessage.style.display = 'none';

  }
  
 if (guess > userChoice) {
    higherMessage.style.display = 'none';
    lowerMessage.style.display = 'block';
  }
 

 }
 
}
