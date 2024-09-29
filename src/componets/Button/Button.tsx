import { ButtonProps } from "./types";
import { ButtonComponent } from "./styles";

function Button({
  type = "button",
  name,
  onClick,
  isDeleteVariant = false,
  disable = false,
}: ButtonProps) {
  return (
    <ButtonComponent
      $isDeleteVariant={isDeleteVariant}
      disabled={disable}
      onClick={onClick}
      type={type}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
