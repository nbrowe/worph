import { Word, EmptyWord, InProgressWord } from './Word';
import { WordType, GameboardType, LetterType } from '../types/BoardTypes';
import { useState, useEffect } from 'react';

import styles from './Grid.module.scss';
import { validateGameState, generateWord } from '../Game';

export const Grid = () => {
  const [hiddenWord] = useState(generateWord());
  const [gameBoard, setGameBoard] = useState([]);
  const [inProgressWord, setInProgressWord] = useState([]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Backspace' || e.code === 'Delete') {
      setInProgressWord((word: string | any[]) => word?.slice(0, word?.length - 1));
    } else if (e.code === 'Enter') {
      if (inProgressWord.length < 5) {
        console.log('Enter 5 Letters');
      } else {
        const wordResult = validateGameState(inProgressWord, hiddenWord)
        console.log(wordResult);
        setGameBoard((board: any) => {
          return [...board, wordResult];
        });
        setInProgressWord([]);
      }
    } else if (inProgressWord.length < 5) {
      if (e.code >= 'a' && e.code <= 'z') {
        setInProgressWord((word: any) => [
          ...word,
          { letter: e.key.toUpperCase(), status: 'unanswered' },
        ]);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className={styles.grid}>
      {gameBoard.map((word: Array<LetterType>, index: any) => (
        <Word key={index} word={word} />
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
