import { isInDictionary, getWorphSeed } from './constants/WorphDict';
import { WordType, LetterType } from './types/BoardTypes';

// Game will choose a secret word.
export function generateWord(): string {
  return getWorphSeed();
}

export function letterArrayToString(word: LetterType[]) {
  return word.map(l => l.letter).join('').toLocaleLowerCase();
}

export function validateGameState(guess: LetterType[], secret: string): WordType {
  const response: WordType = {
    word: guess.map(
      (l: LetterType) => (
        { letter: l.letter, status: 'unanswered' }
      ))
  };

  // Ensure response is 5 letters long
  if (guess && guess.length === 5) {
    const word = letterArrayToString(guess);
    // Guess is in dictionary
    if (isInDictionary(word)) {
      // Iterate over every letter
      for (let i = 0; i < 5; i++) {
        response.word[i].letter = guess[i].letter
        if (word[i] === secret[i]) {
          response.word[i].status = 'correct';
        } else if (secret.includes(word[i])) {
          response.word[i].status = 'incorrect-position';
        } else {
          response.word[i].status = 'incorrect';
        }
      }
    } else {
      // Guess wasn't in the dictionary
      alert('Word was not in dictionary.'); // TODO we'll pass a status code as a return.
    }
  } else {
    // Guess' word length was not 5
    alert('Please enter a 5-letter word.');
  }
  return response;
}
