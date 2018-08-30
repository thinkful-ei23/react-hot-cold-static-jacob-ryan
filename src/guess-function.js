
export function generateFeedback(secretNumber, userGuess){
  if(secretNumber === userGuess){
	  return 'You Won. Click new game to play again';
  } else if(Math.abs(secretNumber - userGuess) < 10){
    return 'hot';
  } else if(Math.abs(secretNumber - userGuess) < 20 && Math.abs(secretNumber - userGuess) > 9){
    return ' Kinda hot';
  } else if(Math.abs(secretNumber - userGuess) < 30 && Math.abs(secretNumber - userGuess) > 19){
    return 'less than warm';
  } else {
    return 'cold';
  }
}
