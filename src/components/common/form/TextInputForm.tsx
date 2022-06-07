import React from "react";
import TextInput, { TextInputType } from "./TextInput";

export interface TextInputFormType {
  textInputProps: TextInputType;
  onSubmit: Function,
  showSubmitButton?: boolean;
}

const TextInputForm: React.FC<TextInputFormType> = ({
  textInputProps,
  onSubmit,
  showSubmitButton = false,
}) => {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <TextInput
        name={textInputProps.name}
        placeholder={textInputProps.placeholder}
        text={textInputProps.text}
        onChange={textInputProps.onChange}
      />
      {showSubmitButton && <input type="submit" value="->" />}
    </form>
  );
};

export default TextInputForm;
