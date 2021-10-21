import React from "react";
import CardText from "../../Card/CardText";
import styled from "styled-components";

const BlockInfo = () => {
  return (
    <Container>
      <ContainerText>
        <CardText
          title="Аналитика "
          description="Просматривайте подробную аналитику
по своим тренировкам, как финансовую,
так и статистическую.  <br /> <br /> Встроенные инструменты помогут проанализировать всю информацию и наглядно продемонстрировать ее с помощью графиков. "
        >
          <WrapperImage>
            <Image>
              <source media="(max-width: 799px)" srcSet="/adw/4mobile.png" />
              <source media="(min-width: 800px)" srcSet="/adw/4.png" />
              <img src="/adw/4.png" alt="" />
            </Image>
          </WrapperImage>
        </CardText>
        <CardText
          reverse
          title="Онлайн-чат с клиентами"
          description="Будьте на связи со своими учениками.
Чат мобильного приложения позволяет
всегда быть на связи. Ведь это так важно
для Ваших клиентов."
        >
          <WrapperImage>
            <Image>
              <source media="(max-width: 799px)" srcSet="/adw/5mobile.png" />
              <source media="(min-width: 800px)" srcSet="/adw/5.png" />
              <img src="/adw/5.png" alt="" />
            </Image>
          </WrapperImage>
        </CardText>
      </ContainerText>
    </Container>
  );
};

const ContainerText = styled.div`
  margin-top: 30px;

  & > div {
    margin-bottom: 60px;
  }
`;

const Image = styled.picture`
  width: 100%;
  max-width: 550px;

  img {
    width: 100%;
    max-width: 550px;
  }
`;

const WrapperImage = styled.div`
  position: relative;
  @media (max-width: 1100px) {
    transform: scale(0.8);
  }
  @media (max-width: 992px) {
    transform: inherit;
  }
`;

const ContainerCardLeft = styled.div`
  position: absolute;
  bottom: 30px;
  right: 70px;
  max-width: 460px;
`;

const ContainerCard = styled.div`
  position: absolute;
  bottom: 30px;
  left: 70px;
  max-width: 460px;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 100px auto 50px;
  grid-gap: 80px;
  padding: 0 15px;
`;


export default BlockInfo;
