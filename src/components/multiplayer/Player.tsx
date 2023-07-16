import React from "react";
import { colorType, colorMap } from "../../types/StyleTypes";
import { colorId } from "../../types/StyleTypes"
import "./Player.css"

interface PlayerProps {
  playerName: string;
  playerColor: colorType;
}

export const Player: React.FC<PlayerProps> = ({ playerName, playerColor }) => {
  return (
    <h2 style={{ color: colorMap[playerColor ?? "black"] }}>{playerName}</h2>
  );
};


type cardSizeType = "small" | "large";

interface PlayerCardProps {
  playerName: string;
  id: number;
  size: cardSizeType;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ playerName, id, size }) => {
  return (
    <div className={`player-card ${size}`}>
      <Player playerName={playerName} playerColor={colorId[id]} />
    </div>
  );
};
