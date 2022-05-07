import { LetterType } from "../types/BoardTypes";

/**
 * Converts a LetterType array to its corresponding string representation.
 * @param word An array of LetterType to be converted.
 * @returns string
 */
export function letterArrayToString(word: LetterType[]): string {
    return word
      .map((l) => l.letter)
      .join("")
      .toLocaleLowerCase();
  }