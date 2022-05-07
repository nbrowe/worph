import { LetterStatusType, LetterType } from '../types/BoardTypes';
import './Letter.css';

const colorMap: Record<LetterStatusType, string> = {
  "correct": "#6aaa64",
  "incorrect-position": "#c9b458",
  "incorrect": "#787c7e",
  "unanswered": "#FFFFFF"
}

export const Letter: React.FC<LetterType> = ({ letter, status }) => {
  return (
    <div 
      className={`letter ${letter !== undefined ? status === "unanswered" ? 'unanswered' : 'answered' : ""}`} 
      style={{ backgroundColor: colorMap[status ?? "unanswered"] }}>
      {letter}
    </div>
  );
}