
import { Avatar, CardWrapper, CartItem } from "./styles";
import { SimpsonsCardProps } from "./types";


  function SimponsCard({
    firstName,
     lastName,
      avatar,
       job,
        hobby = "No Hobby",
      }: SimpsonsCardProps) {
 
  const getSimpsonName = (): string => {
    return `${firstName} ${lastName}`;
  };

  return (
    <CardWrapper>
      <Avatar src={avatar} alt="Avatar" />
      <CartItem>Full name: {getSimpsonName()} </CartItem>
      <CartItem>Job: {job}</CartItem>
      <CartItem>Hobby: {hobby}</CartItem>
    </CardWrapper>
  );
}

export default SimponsCard;