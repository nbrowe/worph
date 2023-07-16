import React, { useState } from "react";
import { getGameStartState, isValidMove } from "../functions/Worph";
import "./Game.css";
import ProposedWordEntryField from "./game/user_input/ProposedWordEntryField";
import GamePlayers from "./game/GamePlayers";

function Game() {
  const [userInputText, setUserInputText] = useState("");
  //TODO need to update WordType to be less pedantic
  const [currentWord, setCurrentWord] = useState<string>(getGameStartState());
  // const [currentPlayer, setCurrentPlayer] = useState(0);
  const [moveHistory, setMoveHistory] = useState<string[]>([currentWord]);

  const [currentPlayer, setCurrentPlayer] = useState<number>(0);

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
      setCurrentPlayer((currentPlayer + 1) % players.length);
    } else {
      notifyBadInput(
        moveHistory.includes(userInputText)
          ? `${userInputText} has already been played`
          : `${userInputText} is not valid`
      );
    }
  };

  //! mock data here.
  const players = ["alice", "bob", "charlie", "dirk", "eve"];

  return (
    <>
      <div className="flex-parent">
        <div className="left flex-child">
          <div className="players">
            <GamePlayers players={players} activePlayer={currentPlayer}/>
          </div>
          <div className="current-word">
            <h1>
              the word is <b className="current-word">{currentWord}</b>
            </h1>
          </div>
          <div className="game-input">
            <ProposedWordEntryField
              textInputProps={{
                name: "attempt",
                placeholder: "type your worph...",
                text: userInputText,
                onChange: setUserInputText,
              }}
              onSubmit={onFormSubmit}
            />
          </div>
        </div>
        <div className="right flex-child">
          <table className="history">
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
      </div>
    </>
  );
}

export default Game;
