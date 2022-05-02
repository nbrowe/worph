import { Word, EmptyWord, InProgressWord } from './Word';
import { WordType, GameboardType, LetterType } from '../types/BoardTypes';
import { useState, useEffect } from 'react';
import './Grid.css';

import { validateGameState, generateWord } from '../Game';

function Grid() {
  const hiddenWord = generateWord();
  const [inProgressWord, setInProgressWord] = useState<LetterType[]>([]);
  const [gameBoard, setGameBoard] = useState<GameboardType>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Delete a letter...
      if (e.code === 'Backspace' || e.code === 'Delete') {
        setInProgressWord((prevWord) => prevWord.slice(0, prevWord.length - 1));
      } else if (e.code === 'Enter') {
        const wordResult = validateGameState(inProgressWord, hiddenWord)
        console.log(wordResult);
        setGameBoard(board => [...board, wordResult]);
        setInProgressWord([]);
      } else if (inProgressWord && inProgressWord.length < 5) {
        if (e.key >= 'a' && e.key <= 'z') {
          setInProgressWord((prevWord) => [
            ...prevWord,
            { letter: e.key.toUpperCase(), status: 'unanswered' },
          ]);
        }
      }
    };


    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [hiddenWord, inProgressWord]);

  return (
    <div className="grid-main">
      {gameBoard && gameBoard.map((word: WordType, index: any) => (
        <Word key={index} word={word.word} />
      ))}
      <InProgressWord word={inProgressWord} />
      {Array(5 - gameBoard.length)
        .fill(null)
        .map((_value, index) => (
          <EmptyWord key={index} />
        ))}
    </div>
  );
};

export default Grid;
