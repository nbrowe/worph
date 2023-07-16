export type colorType =
| "red"
| "green"
| "blue"
| "yellow"
| "pink"
| "cyan"
| "lightgrey"
| "black";

export const colorMap: Record<colorType, string> = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  yellow: "#ffff00",
  pink: "#ff00ff",
  cyan: "#00ffff",
  lightgrey: "#cccccc",
  black: "#000000",
};

export const colorId: Record<number, colorType> = {
  0: "red",
  1: "blue",
  2: "yellow",
  3: "green",
  4: "pink",
  5: "cyan",
  6: "lightgrey",
  7: "black"
}
