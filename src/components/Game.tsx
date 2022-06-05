import React, { useState } from "react";
import { getGameStartState, isValidMove } from "../functions/Worph";
import TextInputForm from "./common/form/TextInputForm";
import "./Game.css";

function Game() {
  const [userInputText, setUserInputText] = useState("");
  //TODO need to update WordType to be less pedantic
  const [currentWord, setCurrentWord] = useState<string>(getGameStartState());
  // const [currentPlayer, setCurrentPlayer] = useState(0);
  const [moveHistory, setMoveHistory] = useState<string[]>([currentWord]);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    function notifyBadInput(e: string) {
      alert(e);
    }

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

  return (
    <>
      <TextInputForm
      //TODO should pass a "name" to the form to apply custom CSS.
        textInputProps={{
          name: "attempt",
          placeholder: "type your worph...",
          text: userInputText,
          onChange: setUserInputText,
        }}
        onSubmit={onFormSubmit}
      />
      <h4>
        the word is <b className="current-word">{currentWord}</b>
      </h4>
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
