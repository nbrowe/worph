import React, { useState } from "react";
import { getGameStartState, isValidMove } from "../functions/Worph";
import { TextInput } from "./common/TextInput";
import "./Game.css";

function Game() {
  const [userInputText, setUserInputText] = useState("");
  //TODO need to update WordType to be less pedantic
  const [currentWord, setCurrentWord] = useState<string>(getGameStartState());
  // const [currentPlayer, setCurrentPlayer] = useState(0);
  const [moveHistory, setMoveHistory] = useState<string[]>([currentWord]);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      isValidMove(currentWord, userInputText) &&
      !moveHistory.includes(userInputText)
    ) {
      setMoveHistory((prevHist) => [...prevHist, userInputText]);
      setCurrentWord(userInputText);
      setUserInputText("");
    } else {
      notifyBadInput(
        moveHistory.includes(userInputText)
          ? `${userInputText} has already been played`
          : `${userInputText} is not valid`
      );
    }
  };

  function notifyBadInput(e: string) {
    alert(e);
  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <TextInput
          text={userInputText}
          name="attempt"
          placeholder="type your worph..."
          setText={setUserInputText}
        />
        <input type="submit" value="send" />
        <h4>
          the word is <b className="current-word">{currentWord}</b>
        </h4>
      </form>
      <div>
        <table>
          <thead className="history header">
            <tr>
              <th>history</th>
            </tr>
          </thead>
          <tbody className="history body">
            {moveHistory
              .slice()
              .reverse()
              .map((word: string, index: number) => (
                <tr key={index}>
                  <td>{word}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Game;
