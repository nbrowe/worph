export type LetterStatusType = "correct" | "incorrect-position" | "incorrect" | "unanswered";

export type LetterType = {
  letter: string,
  status: LetterStatusType
};

export type WordType = {
  word: LetterType[]
};

export type GameboardType = WordType[];