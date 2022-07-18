import './Button.css';

type ButtonColorType = "white" | "red" | "green" | "blue" | "yellow" | "pink" | "cyan";

const buttonColorMap: Record<ButtonColorType, string> = {
  "white": "#ffffff",
  "red": "#ff0000",
  "green": "#00ff00",
  "blue": "#0000ff",
  "yellow": "#ffff00",
  "pink": "#ff00ff",
  "cyan": "#00ffff"
};

interface ButtonProps {
  label: string,
  disabled: boolean,
  color: ButtonColorType
};

export const Button: React.FC<ButtonProps> = ({ label, disabled = false, color }) => {
  return (
    <button
      className={`${disabled ? "disabled" : ""}`} 
      style={{ backgroundColor: buttonColorMap[color ?? "white"] }}>
      {label}
    </button>
  );
}