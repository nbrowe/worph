interface TextInputProps {
  name: string,
  text: string,
  setText: Function,
  placeholder: string
}

export const TextInput: React.FC<TextInputProps> = ({ name, text, setText, placeholder = "" }) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={text}
      onChange={(e) => setText(e.target.value)}
    /> 
  );
}