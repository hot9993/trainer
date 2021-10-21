import React from "react";
import styled from "styled-components";
import CardText from "../../Card/CardText";
import { CalendarIcon, ServiceIcon, TrainIcon } from "./icons";
import CardBrowser from "../../Card/CardBrowser";

const About = () => {
  return (
    <Container>
      <TitleMain>О НАС</TitleMain>
      <SubTitleDescription>Возможности</SubTitleDescription>
      <ContainerText>
        <CardText
          title="Создание тренировок"
          description="Вы можете создавать тренировки по любым видам спорта, выбирать место и время их проведения и сами устанавливать цену!"
        >
          <WrapperImage>
            <Image>
              <source media="(max-width: 799px)" srcSet="/adw/1mobile.png" />
              <source media="(min-width: 800px)" srcSet="/adw/1.png" />
              <img src="/adw/1.png" alt="" />
            </Image>
          </WrapperImage>
        </CardText>
        <CardText
          reverse
          title="Система календарей"
          description="Продуманная система календарей поможет грамотно организовать свое время, а система уведомлений не позволит вам забыть о предстоящем занятии. "
        >
          <WrapperImage>
            <Image>
              <source media="(max-width: 799px)" srcSet="/adw/2mobile.png" />
              <source media="(min-width: 800px)" srcSet="/adw/2.png" />
              <img src="/adw/2.png" alt="" />
            </Image>
          </WrapperImage>
        </CardText>
        <CardText
          title="Сервис приема платежей"
          description="Пользователи заранее оплачивают тренировки, мы замораживаем деньги ваших клиентов до проведения тренировки. Это гарантирует вам 100% оплату оказанных услуг."
        >
          <WrapperImage>
            <Image>
              <source media="(max-width: 799px)" srcSet="/adw/3mobile.png" />
              <source media="(min-width: 800px)" srcSet="/adw/3.png" />
              <img src="/adw/3.png" alt="" />
            </Image>
          </WrapperImage>
        </CardText>
      </ContainerText>
    </Container>
  );
};

const Image = styled.picture`
  width: 100%;
  max-width: 550px;
  img {
    width: 100%;
    max-width: 550px;
    object-fit: contain;
  }
`;
const ContainerText = styled.div`
  margin-top: 0;

  & > div {
    margin-bottom: 20px;
  }
  @media(max-width: 576px) {
    margin-top: 30px;
    & > div {
      margin-bottom: 40px;
    }
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
const SubTitleDescription = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 64px;
  text-align: center;
  letter-spacing: -0.03em;
  color: #273464;
  margin-top: 0;
  @media (max-width: 576px) {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;
    text-align: center;
    letter-spacing: -0.03em;
    color: #273464;
  }
`;
const TitleMain = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #7E8BB6;
  margin-top: 0;
  margin-bottom: 4px;
  @media (max-width: 576px) {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #7E8BB6;
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 80px auto 50px;
  grid-gap: 80px;
  padding: 0 15px;
  @media (max-width: 576px) {
    margin: 60px auto 50px;
  }
`;
export default About;
