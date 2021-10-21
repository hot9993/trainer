import React from "react";
import styled from "styled-components";
import { Arrow, Icons, Pero, RoundIcon, Score, Search, Time } from "./icons";
import CardBrowser from "../../Card/CardBrowser";

const BrowserWindow = () => {
  return (
    <Container>
      <Wrapper>
        <Icons />
        <ContainerBody>
          <ContainerBlockLeft>
            <Flex>
              <RoundIcon />
            </Flex>
            <Flex>
              <div>
                <RoundIcon />
              </div>
              <div>
                <RoundIcon />
              </div>
              <div>
                <RoundIcon />
              </div>
            </Flex>
          </ContainerBlockLeft>
          <ContainerCenterBlock>
            <ContainerSearch>
              <Search />
              <ContainerIcons>
                <Arrow />
                <Time />
                <Pero />
              </ContainerIcons>
            </ContainerSearch>
            <ListContainer>
              <CardBrowser image="/card-images/1.jpg" buttonValue="2 000 ₽" />
              <CardBrowser image="/card-images/2.jpg" visibleData />
              <CardBrowser image="/card-images/3.jpg" buttonValue="2 500 ₽" />
              <CardBrowser image="/card-images/4.jpg" buttonValue="4 000 ₽" />
            </ListContainer>
          </ContainerCenterBlock>
        </ContainerBody>
        <ScoreContainer>
          <Score />
        </ScoreContainer>
      </Wrapper>
      <MobileImageContainer>
        <MobileImage src="/browsermobile.png" />
      </MobileImageContainer>
    </Container>
  );
};

const MobileImageContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
const MobileImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;
const ScoreContainer = styled.div`
  position: absolute;
  left: -100px;
  top: 50%;
  transform: translate(0, -50%);
  @media (max-width: 1250px) {
    left: -50px;
  }
`;
const ListContainer = styled.div`
  & > div {
    margin-top: 20px;
  }
`;
const ContainerIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 20px;
`;
const ContainerSearch = styled.div`
  display: flex;
`;
const ContainerCenterBlock = styled.div``;
const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div {
    margin-top: 10px;
  }
`;
const ContainerBlockLeft = styled.div`
  background: #F4F7FF;
  border-radius: 10px;
  width: 156px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
`;
const ContainerBody = styled.div`
  background: #E7EDFA;
  width: 1010px;
  margin-top: -10px;
  padding: 25px;
  display: flex;
  gap: 20px;
  border-radius: 0 0 10px 10px;
`;
const Wrapper = styled.div`
  max-width: 1060px;
  grid-column-start: 2;
  grid-column: 2 / 12;
  position: relative;
  @media (max-width: 1200px) {
    transform: scale(0.7);
    grid-column: 1 / 12;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  max-width: 1440px;
  padding: 0 15px;
  margin: 80px auto 50px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  @media (max-width: 1200px) {
    margin-top: 0;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

export default BrowserWindow;
