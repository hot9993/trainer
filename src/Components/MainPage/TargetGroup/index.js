import React from "react";
import styled from "styled-components";

const TargetGroup = () => {
  return (
    <Container>
      <Box>
        <Title>
          Целевая аудитория
        </Title>
        <Description>
          Мы объединяем множество людей, занимающихся спортом!
          <br />
          Наши пользователи постоянно создают активности и желают развиваться и тренироваться!
        </Description>
      </Box>
      <div>
        <Image src="/images/targetGroupImage.png" alt="" />
      </div>
    </Container>
  );
};

const Image = styled.img`
  max-width: 530px;
  max-height: 420px;
  @media(max-width: 576px) {
    width: 100%;
    height: auto;
  }
`

const Box = styled.div`
  grid-column: 2 / 10;
  @media(max-width: 1110px) {
   margin-bottom: 30px;
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
const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 64px;
  letter-spacing: -0.03em;
  color: #273464;
  margin-bottom: 20px;
  @media(max-width: 576px) {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: -0.03em;
    color: #273464;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  max-width: 1440px;
  margin: 100px auto 50px;
  grid-gap: 80px;
  padding: 0 15px;
  @media(max-width: 1250px) {
    grid-gap: 40px;
  }
  @media(max-width: 1110px) {
    display: block;
  }
`;


export default TargetGroup;
