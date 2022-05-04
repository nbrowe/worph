import { Word } from "./Word";
import { WordType, GameboardType, LetterType } from "../types/BoardTypes";
import { useState, useEffect } from "react";
import "./Grid.css";

import { validateGameState, getGameStartState } from "../Game";

function Grid() {
  const [hiddenWord] = useState<string>(getGameStartState());
  const [inProgressWord, setInProgressWord] = useState<LetterType[]>([]);
  const [gameBoard, setGameBoard] = useState<GameboardType>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Delete a letter...
      if (e.code === "Backspace" || e.code === "Delete") {
        setInProgressWord((prevWord) => prevWord.slice(0, prevWord.length - 1));
      } else if (e.code === "Enter") {
        const wordResult = validateGameState(inProgressWord, hiddenWord);
        setGameBoard((board) => [...board, wordResult]);
        setInProgressWord([]);
      } else if (inProgressWord && inProgressWord.length < 5) {
        if (e.key >= "a" && e.key <= "z") {
          setInProgressWord((prevWord) => [
            ...prevWord,
            { letter: e.key.toUpperCase(), status: "unanswered" },
          ]);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [hiddenWord, inProgressWord]);

  return (
    <div className="grid-main">
      {gameBoard &&
        gameBoard.map((word: WordType, index: any) => (
          <Word key={index} letters={word.letters} />
        ))}
      <Word letters={inProgressWord} />
    </div>
  );
}

export default Grid;
