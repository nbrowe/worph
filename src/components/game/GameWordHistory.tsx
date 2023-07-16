import GameWord from "./GameWord";
import "./GameWordHistory.css";

interface GameWordHistoryType {
  history: string[];
}

const GameWordHistory: React.FC<GameWordHistoryType> = ({ history }) => {
  return (
    <>
      <table className="history">
        <thead className="history header">
          <tr>
            <th>history</th>
          </tr>
        </thead>
        <tbody className="history body">
          {history
            .slice()
            .reverse()
            .map((word: string, index: any) => (
              <tr key={index}>
                <td>{<GameWord word={word} />}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default GameWordHistory;
