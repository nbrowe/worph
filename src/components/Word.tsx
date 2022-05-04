import { Letter } from './Letter';
import { WordType, LetterType } from '../types/BoardTypes';

/**
 * Word component.
 * @param props [`letters`: A LetterType array;
 *               `length`: The length of `letters`.]
 * @returns React functional component.
 * @exports Word
 * @author nbrowe
 */
export const Word: React.FC<WordType> = ({ letters }) => {
  return (
    <>
      {letters.map((l: LetterType, index: any) => (
        <Letter key={index} letter={l.letter} status={l.status} />
      ))}
    </>
  )
}
