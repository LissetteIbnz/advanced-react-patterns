import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { useCounterContext } from "../useCounterContext";
import { StyledButton } from "./styles.js";

interface IncrementProps {
  icon: FontAwesomeIconProps["icon"]
}

export function Increment({ icon = "plus" }: IncrementProps) {
  const { handleIncrement } = useCounterContext();
  return (
    <StyledButton onClick={handleIncrement}>
      <FontAwesomeIcon icon={icon} color="#17a2b8" />
    </StyledButton>
  );
}

