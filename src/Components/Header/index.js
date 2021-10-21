import React, { useState } from "react";
import styled from "styled-components";
import { lcIcon } from "./icons";
import Menu from "./Menu";
import UiButton from "../Ui/Button/UiButton";
import ModalQr from "../Modal";

const Header = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Line>
        <LineWrapper>
          <ContainerBlock>
            <About href="/">
              О проекте
            </About>
            <Divider />
            <Lc href="/">
              <Icon>{lcIcon}</Icon>
              Личный кабинет
            </Lc>
          </ContainerBlock>
        </LineWrapper>
      </Line>
      <HeaderContainer>
        <WrapperContent>
          <Logo className="logo">
            <img src="/logo.png" alt="" />
          </Logo>
          <Menu />
          <ContainerButton className="button_header">
            <UiButton onClick={() => setVisible(true)} type="light">
              Скачать приложение
            </UiButton>
          </ContainerButton>
        </WrapperContent>
      </HeaderContainer>
      <ModalQr visible={visible} onClose={() => setVisible(false)} />
    </div>
  );
};

const ContainerButton = styled.div`
  margin-left: auto;
`;
const Logo = styled.div`
  width: 105px;
  height: 49px;
  margin-right: 40px;

  img {
    width: 100%;
    height: 100%;
  }
`;
const HeaderContainer = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 6px 60px rgba(32, 39, 61, 0.04);
`;

const WrapperContent = styled.div`
  max-width: 1280px;
  padding: 20px 15px;
  margin: 0 auto;
  display: flex;
  @media(max-width: 1200px) {
    padding: 10px 15px;
    .button_header {
      display: none;
    } 
    .menu {
      order: 4;
      margin-left: auto;
    }
  }
`;


const ContainerBlock = styled.div`
  display: flex;
  align-items: center;
`;
const About = styled.a`
  display: block;
  font-family: "RF Dewi", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
  transition: all 0.4s ease;
  cursor: pointer;
`;
const Divider = styled.div`
  background: #FFFFFF;
  opacity: 0.4;
  width: 1px;
  height: 100%;
  margin: 0 20px;
`;
const Lc = styled.a`
  font-family: "RF Dewi", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  svg path {
    transition: all 0.4s ease;
  }
  transition: all 0.4s ease;
  cursor: pointer;
  &:hover {
    color: #448AFF;
    svg path {
      fill: #448AFF;
    }
  }
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;
const Line = styled.div`
  background: #162044;
  max-height: 40px;
  @media (max-width: 1200px) {
   display: none;
  }
`;

const LineWrapper = styled.div`
  background: #162044;
  max-height: 40px;
  display: flex;
  justify-content: flex-end;
  max-width: 1280px;
  padding: 8px 20px;
  margin: 0 auto;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export default Header;
