import React, { useState } from "react";
import { getGameStartState, isValidMove } from "../functions/Worph";
import './Game.css';

function Game() {
  const [userInputText, setUserInputText] = useState("");
  //TODO need to update WordType to be less pedantic
  const [currentWord, setCurrentWord] = useState<string>(getGameStartState());
  // const [currentPlayer, setCurrentPlayer] = useState(0);
  const [moveHistory, setMoveHistory] = useState<string[]>([]);

  const handleEnterPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("in handlesubmit", e);
      if (
        isValidMove(currentWord, userInputText) &&
        !moveHistory.includes(userInputText)
      ) {
        console.log("move valid!!");
        setMoveHistory((prevHist) => [...prevHist, userInputText]);
        setCurrentWord(userInputText);
        setUserInputText("");
      } else {
        console.log("failed");
        notifyBadInput();
      }
    }
  };

  function notifyBadInput() {
    throw new Error("Function not implemented.");
  }

  /**
   * @deprecated
   * Based on original command-line functionality for Worph.
   * @param playerCount
   * @param startPlayer
   * @returns
   */
  // function playWorph(playerCount=4) {
  //   // let currentPlayer = startPlayer WHICH WAS AN INPUT PARAM;
  //   const moveHistory = [currentWord];
  //   const playerCanMove = Array(playerCount).fill(true);
  //   // Game loop
  //   while (!(playerCanMove.filter((p) => p).length == 1)) {
  //     let attempt = pr(
  //       `Player ${currentPlayer}, the word is [${currentWord}]. Worph the word. > `
  //     ).toLowerCase();
  //     if (!moveHistory.includes(attempt) && isValidMove(currentWord, attempt)) {
  //       setMoveHistory((prevHist) => [...prevHist, attempt]);
  //       setCurrentWord(attempt);
  //     } else {
  //       playerCanMove[currentPlayer] = false;
  //     }
  //     currentPlayer = (currentPlayer + 1) % playerCount;
  //   // }
  //   return currentPlayer;
  // }

  return (
    <>
      <div>
        <input
          type="text"
          name="attempt"
          placeholder="type your worph..."
          value={userInputText}
          onChange={(e) => setUserInputText(e.target.value)}
          onKeyUp={handleEnterPressed}
        />
        <h4>
          the word is <b className="current-word">{currentWord}</b>
        </h4>
      </div>
      <div>
        <table>
          <thead className="history header">
            <tr>
              <th>[history]</th>
            </tr>
          </thead>
          <tbody className="history body">
            {moveHistory.slice().reverse().map((word: string, index: number) => (
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
