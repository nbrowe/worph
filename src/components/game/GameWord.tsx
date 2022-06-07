import "./GameWord.css";

interface GameLetterType {
  letter: string
}

/**
 * A single constituent of a GameWord. Designed to look like a Scrabble tile.
 * Note: I do not own the rights to Scrabble. In case it wasn't obvious.
 * @param letter The string of length 1 that contains the letter to be displayed.
 * @returns GameLetter
 */
const GameLetter: React.FC<GameLetterType> = ({
  letter
}) => {
  return (
    <span className="word letter">
      {letter.toUpperCase()}
    </span>
  );
}

export interface GameWordType {
  word: string,
  // age: number,
  // pointValue: number,
}

const GameWord: React.FC<GameWordType> = ({
  word,
  // pointValue,
  // age
}) => {
  return (
    <>
      {Array.from(String(word)).map((letter: string, index: any) => (
        <GameLetter key={index} letter={letter} />
      ))}
    </>
  );
}

export default GameWord;