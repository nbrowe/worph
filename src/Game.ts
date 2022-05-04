import { isInDictionary, getWorphSeed } from "./constants/WorphDict";
import { WordType, LetterType } from "./types/BoardTypes";
import { letterArrayToString } from "./utilities/Conversions";

export function getGameStartState(): string {
  return getWorphSeed();
}

export function validateGameState(
  guess: LetterType[],
  secret: string
): WordType {
  const response: WordType = {
    letters: guess.map((l: LetterType) => ({
      letter: l.letter,
      status: "unanswered",
    })),
  };

  const word = letterArrayToString(guess);
  if (isInDictionary(word)) {
    for (let i = 0; i < response.letters.length; i++) {
      response.letters[i].letter = guess[i].letter;
      if (word[i] === secret[i]) {
        response.letters[i].status = "correct";
      } else if (secret.includes(word[i])) {
        response.letters[i].status = "incorrect-position";
      } else {
        response.letters[i].status = "incorrect";
      }
    }
  } else {
    alert("Word was not in dictionary.");
  }
  return response;
}
