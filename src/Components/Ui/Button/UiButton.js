import React from "react";
import styled, { css } from "styled-components";

const UiButton = ({ children, arrow, ...props }) => {
  return (
    <Button {...props}>
      {children}
      {arrow && (
        <Icon>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 13V20L20.5 12L12.5 4V11H4.5V13H12.5Z" fill="white" />
          </svg>
        </Icon>
      )}
    </Button>
  );
};

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 16px 35px;
  font-family: "RF Dewi", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  border: none;
  transition: all 0.4s ease;
  cursor: pointer;
  ${p => p.type === "light" && css`
    background: #448AFF;

    &:hover {
      background: #336BC8;
    }
  `}
  ${p => p.type === "dark" && css`
    background: #162044;

    &:hover {
      background: #283874;
    }
  `}
`;

export default UiButton;
