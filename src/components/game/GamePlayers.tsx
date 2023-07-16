import React from "react";
import { PlayerCard } from "../multiplayer/Player";
import "./GamePlayers.css";

interface GamePlayersProps {
  players: string[];
  activePlayer: number;
}

const GamePlayers: React.FC<GamePlayersProps> = ({ players, activePlayer }) => {
  return (
    <div className="game-players space-between">
      {players.map((playerName) => (
        <PlayerCard
          playerName={playerName}
          id={players.indexOf(playerName)}
          size={`${
            activePlayer == players.indexOf(playerName) ? "large" : "small"
          }`}
        />
      ))}
    </div>
  );
};

export default GamePlayers;
