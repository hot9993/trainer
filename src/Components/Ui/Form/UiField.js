import React, { useState } from "react";
import styled from "styled-components";

const UiInput = () => {
  const [value, setValue] = useState("");
  const [state, setState] = useState(false);
  const checkValue = () => {
    if (value.trim().length > 0) {
      setState(true);
    } else {
      setState(false);
    }
  };
  return (
    <>
      <ContainerInput
        className={state && "focusedContainer"}
        onFocus={() => setState(true)}
        onBlur={checkValue}
      >
        <Label className={state && "focused"}>Электронная почта</Label>
        <Input name="email" onChange={(e) => setValue(e.target.value)} />
      </ContainerInput>
    </>
  );
};

const ContainerInput = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  padding: 0;
  margin: 0;
  vertical-align: top;
  background: #F6F9FF;
  border-radius: 8px;
  min-width: fit-content;
  border: 1px solid transparent;
  overflow: hidden;

  &.focusedContainer {
    border: 1px solid #448AFF;
  }
`;

const Label = styled.div`
  font-family: "RF Dewi", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #7E8BB6;
  line-height: 1.4375em;
  letter-spacing: 0.00938em;
  padding: 0px;
  display: block;
  transform-origin: left top;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 24px);
  position: absolute;
  left: 0px;
  top: 0px;
  transform: translate(12px, 16px) scale(1);
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  z-index: 1;
  pointer-events: none;

  &.focused {
    max-width: calc(133% - 24px);
    position: absolute;
    left: 0px;
    top: 0px;
    transform: translate(12px, 7px) scale(0.75);
    transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }
`;

const Input = styled.input`
  letter-spacing: inherit;
  border: 0px;
  box-sizing: content-box;
  background: none;
  height: 1.4375em;
  margin: 0px;
  -webkit-tap-highlight-color: transparent;
  display: block;
  min-width: 0px;
  width: 100%;
  animation-name: mui-auto-fill-cancel;
  animation-duration: 10ms;
  padding: 25px 12px 8px;
  outline: 0;
  font-family: "RF Dewi", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  color: #273464;
`;

export default UiInput;
