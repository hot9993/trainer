import React from "react";
import styled from "styled-components";
import UiField from "../../Ui/Form/UiField";
import UiButton from "../../Ui/Button/UiButton";

const Index = () => {
  return (
    <Container>
      <TitleBlock>
        <TitleH1>
          Тренируйте <br />
          и зарабатывайте
        </TitleH1>
        <Description>
          Размещайте тренировки, планируйте и проводите занятия по расписанию и зарабатывайте
        </Description>
      </TitleBlock>
      <FormBlock>
        <TitleForm>
          Участвовать в закрытом тестировании
        </TitleForm>
        <FormWrapper>
          <Form>
            <UiField />
            <UiButton type="light" arrow>
              Участвовать
            </UiButton>
          </Form>
          <Accept>
            Нажимая «Участвовать», Вы даёте <a href="">Согласие на обработку персональных данных</a>
          </Accept>
        </FormWrapper>
      </FormBlock>
    </Container>
  );
};

const Accept = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #7E8BB6;

  a {
    display: inline-block;
    color: #448AFF;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FormWrapper = styled.div``;

const Form = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
  margin-bottom: 15px;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;
const TitleForm = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: #273464;
  margin-bottom: 20px;
  @media(max-width: 576px) {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.02em;
    color: #273464;
  }
`;
const FormBlock = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 6px 60px rgba(32, 39, 61, 0.04);
  border-radius: 16px;
  grid-column: 8 / 13;
  padding: 30px;
  height: fit-content;
  max-width: 550px;
  @media(max-width: 576px) {
  padding: 20px;
  }
`;
const Description = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: #7E8BB6;
  @media (max-width: 576px) {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.02em;
    color: #7E8BB6;
  }
`;
const TitleH1 = styled.h1`
  font-family: "RF Dewi", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.03em;
  color: #273464;
  margin-bottom: 25px;
  margin-top: 0;
  @media (max-width: 576px) {
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: -0.03em;
    color: #273464;
  }
`;
const TitleBlock = styled.div`
  grid-column: 2 / 8;
  @media (max-width: 1200px) {
    grid-column: 1 / 8;
  }
  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  max-width: 1280px;
  margin: 100px auto 50px;
  grid-gap: 80px;
  padding: 0 15px;
  @media (max-width: 1024px) {
    display: block;
  }
  @media (max-width: 576px) {
    margin-top: 40px;
  }
`;

export default Index;
