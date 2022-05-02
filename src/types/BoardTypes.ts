export type LetterStatusType = "correct" | "incorrect-position" | "incorrect" | "unanswered";

export type LetterType = {
  letter: string,
  status: LetterStatusType
};

export type WordType = {
  word: Array<LetterType>,
};

// TODO Backend would like to pass a status code to the board.

export type GameboardType = WordType[];