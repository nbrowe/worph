import { isInDictionary, getWorphSeed } from "../constants/WorphDict";

/**
 * Generates the starting state of the game.
 * @returns a 3-letter word from the dictionary.
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
 * @returns true if the worph is valid.
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
   * @returns the edit distance between `str1` and `str2`.
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
