import React from "react"; // Apparently doing this to fix how React sees the "input" tag
import "./TextInput.css";

export interface TextInputProps {
  name: string;
  text: string;
  onChange: Function;
  placeholder: string;
}

/**
 * A simple React FC implementation of a text input field.
 * @param text The text shown in the input field.
 * @param onChange The function to call once the text is updated.
 * @param name The name of this TextInput.
 * @param placeholder A string to display when the field is empty.
 * @returns TextInput
 */
const TextInput: React.FC<TextInputProps> = ({
  name,
  text,
  onChange,
  placeholder = "",
}) => {
  return (
    <input
      className="input"
      type="text"
      name={name}
      placeholder={placeholder}
      value={text}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
export default TextInput;
