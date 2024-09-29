import { InputComponent, InputLabel, InputWrapper } from "./styles";
import { InputProps } from "./types";

function Input({ id  , name, type = "text", placeholder, label, $error, disabled }: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={false}
        $error={}
        
      ></InputComponent>
    </InputWrapper>
  );
}

export default Input;