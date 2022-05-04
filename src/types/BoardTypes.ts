export type LetterStatusType =
  | "correct"
  | "incorrect-position"
  | "incorrect"
  | "unanswered";

export type LetterType = {
  letter: string;
  status: LetterStatusType;
};

export type WordType = {
  letters: LetterType[];
};

export type GameboardType = WordType[];
