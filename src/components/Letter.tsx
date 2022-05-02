import styles from './Letter.module.scss';
import { LetterStatusType, LetterType } from '../types/BoardTypes';

const colorMap: Record<LetterStatusType, string> = {
  "correct": "#6aaa64",
  "incorrect-position": "#c9b458",
  "incorrect": "#787c7e",
  "unanswered": "#FFFFFF"
}

export const Letter: React.FC<LetterType> = ({ letter, status }) => {
  return (
    <div 
      className={`${styles.letter} ${letter !== undefined ? status === "unanswered" ? styles.unanswered : styles.answered : ""}`} 
      style={{ backgroundColor: colorMap[status ?? "unanswered"] }}>
      {letter}
    </div>
  );
}