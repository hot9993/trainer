import React from "react";
import styled, { css } from "styled-components";

const CardBrowser = ({ visibleData, small, image, buttonType, buttonValue, buttonDisabled, white }) => {
  const RenderButton = () => {
    if (buttonType === "text") {
      return (
        <PriceButtonStyled buttonDisabled={buttonDisabled}>
          {buttonValue}
        </PriceButtonStyled>
      );
    }
    if (buttonType === "disabled") {
      return (
        <PriceButtonStyled buttonDisabled={buttonDisabled}>
          <Disabled />
        </PriceButtonStyled>
      );
    }
    return (
      <PriceButton>
        {buttonValue}
      </PriceButton>
    );
  };
  if (visibleData) {
    return (
      <Container transform>
        <Image src={image} />
        <FlexLine>
          <Title>Константин К.</Title>
          <Description>Сноубординг / 1 час</Description>
        </FlexLine>
        <PriceButton className="button__active">
          3 000 ₽
        </PriceButton>
      </Container>
    );
  }
  return (
    <Container white={white}>
      <div>
        <Image small={small} src={image} />
      </div>
      <FlexLine>
        <Line small={small} />
        <LineSmall small={small} />
      </FlexLine>
      <RenderButton />
    </Container>
  );
};

const Disabled = styled.div`
  background: #7E8BB6;
  opacity: 0.2;
  border-radius: 50px;
  width: 48px;
  height: 12px;
`;
const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.03em;
  color: #273464;
`;
const Description = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #7E8BB6;
`;
const PriceButton = styled.div`
  background: rgba(211, 216, 231, 0.48);
  border-radius: 8px;
  height: 64px;
  width: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: -0.03em;
  color: #FFFFFF;
  transition: all 0.6s ease;

  &.button__active {
    background: #448AFF;
  }
`;
const PriceButtonStyled = styled.div`

  ${p => p.buttonDisabled && css`
    background: #E7EDFA;
    color: #7E8BB6;
  `}
  ${p => !p.buttonDisabled && css`
    background: #448AFF;
    color: #FFFFFF;
  `}
  border-radius: 8px;
  height: 48px;
  width: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 29px;
  text-align: center;
  letter-spacing: -0.03em;
  transition: all 0.6s ease;

  &.button__active {
    background: #448AFF;
  }
`;
const FlexLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Image = styled.img`
  border-radius: 12px;
  width: ${p => p.small ? "60px" : "70px"};
  height: ${p => p.small ? "60px" : "70px"};
  object-fit: cover;
`;
const Line = styled.div`
  width: ${p => p.small ? "192px" : "273px"};
  height: 12px;
  background: #4E5A85;
  opacity: 0.1;
  border-radius: 50px;
  margin-bottom: 10px;
`;

const LineSmall = styled.div`
  height: 12px;
  background: #4E5A85;
  opacity: 0.1;
  border-radius: 50px;
  width: ${p => p.small ? "152px" : "201px"};
`;
const Container = styled.div`
  background: #F6F9FF;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 30px;
  transition: all 0.6s ease;
  ${p => p.white && css`
    background: #fff;
  `}; 
  @media(min-width: 1250px) {
  ${p => p.transform && css`
    transform: translate3d(150px, 0, 0);
  `}
}
`;

export default CardBrowser;
