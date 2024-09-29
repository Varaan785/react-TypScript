import Button from "componets/Button/Button";

import { FeedbackProps } from "./types";
import {FeedbackWrapper,FedbackControl,Count,ButtonwithcountContainer}  from "./styles";



function Feedback({
  likes,
  dislikes,
  onDislike,
  onLike,
  resetResults,
}: FeedbackProps) {
  return (
    <FeedbackWrapper>
      <FedbackControl>
        <ButtonwithcountContainer>
          <Button name="Like" onClick={onLike} />
          <p className="count">{likes}</p>
        </ButtonwithcountContainer>
        <ButtonwithcountContainer>
          <Button name="Dislike" onClick={onDislike} />
          <Count>{dislikes}</Count>
        </ButtonwithcountContainer>
      </FedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  );
}

export default Feedback;