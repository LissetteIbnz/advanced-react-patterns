import React from "react";
import styled from "styled-components";

export const Label: React.FC = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};

const StyledLabel = styled.div`
  background-color: #e9ecef;
  color: #495057;
  padding: 5px 7px;
`;
