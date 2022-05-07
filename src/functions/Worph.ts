import { isInDictionary, getWorphSeed } from "../constants/WorphDict";
import { WordType, LetterType } from "../types/BoardTypes";
import { letterArrayToString } from "./Conversions";

/**
 * Generates the starting state of the game.
 * @returns Returns a 3-letter word from the dictionary.
 */
export function getGameStartState(): string {
  return getWorphSeed();
}

/**
 * Determines if a move is legal.
 * @param from Current word on the board.
 * @param to Result of player's move.
 */
export function isValidMove(from: string, to: string): boolean {
  return isInDictionary(to) && isAWorph(from, to);
}

/**
 * Compare two strings. If the first string can be legally worphed
 * into the second string by one change, return true.
 * @param current The current word.
 * @param target The word to worph into.
 * @returns Returns true if the worph is valid.
 * @author nbrowe
 */
function isAWorph(current: string, target: string): boolean {
  /**
   * Calculate the edit distance between two strings. Edit distance is
   * defined as the number of additions, substitutions, and deletions
   * required to change one string into another.
   * @param str1 First string.
   * @param str2 Second string.
   * @param m Length of `str1`.
   * @param n Length of `str2`.
   * @returns Returns the edit distance between `str1` and `str2`.
   */
  function editDistance(
    str1: string,
    str2: string,
    m: number,
    n: number
  ): number {
    if (m === 0) return n;
    if (n === 0) return m;
    if (str1[m - 1] === str2[n - 1])
      return editDistance(str1, str2, m - 1, n - 1);
    return (
      1 +
      Math.min(
        editDistance(str1, str2, m, n - 1),
        editDistance(str1, str2, m - 1, n),
        editDistance(str1, str2, m - 1, n - 1)
      )
    );
  }

  const dist = editDistance(current, target, current.length, target.length);
  const lengthDiff = target.length - current.length;
  const lastS = target.endsWith("s") && !current.endsWith("s");

  return dist === 1 && (lengthDiff === 0 || (lengthDiff === 1 && !lastS));
}

/**
 * @deprecated For Wordle only.
 *
 * Appropriately color-codes a wordle guess based on the secret word.
 * @param guess The LetterType[] guess from the user.
 * @param secret The word the game wants the user to correctly guess.
 * @returns Returns a WordType.
 * @author nbrowe
 */
export function validateWordleGameState(
  guess: LetterType[],
  secret: string
): WordType {
  // Pre-populate the response.
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
