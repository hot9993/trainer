import React from "react";
import styled, { css } from "styled-components";

const CardText = ({ title, description, children, reverse }) => {
  return (
    <ContainerText reverse={reverse}>
      <ContainerImage>
        {children}
      </ContainerImage>
      <Box>
        <Title>
          {title}
        </Title>
        <Description dangerouslySetInnerHTML={{__html: description}} />
      </Box>
    </ContainerText>
  );
};


const ContainerImage = styled.div``;
const ContainerText = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1072px;
  margin: 20px auto;
  align-items: center;
  ${p => p.reverse && css`
    flex-direction: row-reverse;
  `};
  @media(max-width: 992px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    ${p => p.reverse && css`
    flex-direction: column-reverse;
  `};
  }
`;
const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: -0.03em;
  color: #273464;
  margin-bottom: 20px;
  @media(max-width: 576px) {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.03em;
    color: #273464;
  }
`;

const Box = styled.div`
  max-width: 440px;
  @media(max-width: 992px) {
    max-width: 100%;
    margin-bottom: 40px;
  }
`;
const Description = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: #7E8BB6;
  @media(max-width: 576px) {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.02em;
    color: #7E8BB6;
  }
`;


export default CardText;
