import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { useCounterContext } from "../useCounterContext";
import { StyledButton } from "./styles.js";

interface DecrementProps {
  icon: FontAwesomeIconProps["icon"]
}

export const Decrement = ({ icon = "minus" }: DecrementProps) => {
  const { handleDecrement } = useCounterContext();
  return (
    <StyledButton onClick={handleDecrement}>
      <FontAwesomeIcon icon={icon} color="#17a2b8" />
    </StyledButton>
  );
}
