import { Letter } from './Letter';
import { WordType, LetterType } from '../types/BoardTypes';

export const InProgressWord: React.FC<WordType> = ({ word }) => {
  return (
    <>
      {word.map((l: LetterType, index: any) => (
        <Letter key={index} letter={l.letter} status={l.status} />
      ))}
      {Array(5 - word.length)
        .fill(null)
        .map((_value, index) => (
          <Letter key={index} letter={''} status={'unanswered'} />
        ))}
    </>
  )
}

export const Word: React.FC<WordType> = ({ word }) => {
  return (
    <>
      {word.map((l: LetterType, index: any) => (
        <Letter key={index} letter={l.letter} status={l.status} />
      ))}
    </>
  )
}

export const EmptyWord = () => {
  return (
    <>
      <Letter letter={''} status={'unanswered'} />
      <Letter letter={''} status={'unanswered'} />
      <Letter letter={''} status={'unanswered'} />
      <Letter letter={''} status={'unanswered'} />
      <Letter letter={''} status={'unanswered'} />
    </>
  )
}