import React from "react";
import TextInput, { TextInputType } from "../../common/form/TextInput";

export interface ProposedWordEntryFieldType {
  textInputProps: TextInputType;
  onSubmit: Function,
  showSubmitButton?: boolean;
}

const ProposedWordEntryField: React.FC<ProposedWordEntryFieldType> = ({
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

export default ProposedWordEntryField;
