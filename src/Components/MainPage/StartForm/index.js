import React from "react";
import styled from "styled-components";
import UiField from "../../Ui/Form/UiField";
import UiButton from "../../Ui/Button/UiButton";

const StartForm = ({ subTitle, title, description }) => {
  return (
    <WrapperForm>
      <Container>
        {subTitle && (
          <Subtitle>{subTitle}</Subtitle>
        )}
        <Title>{title}</Title>
        {description && (
          <Description>{description}</Description>
        )}
        <FormContainer>
          <FormWrapper>
            <Form>
              <UiField />
              <UiButton arrow type="dark">
                Участвовать
              </UiButton>
            </Form>
            <Accept>
              Нажимая «Участвовать», Вы даёте <a href="">Согласие на обработку персональных данных</a>
            </Accept>
          </FormWrapper>
        </FormContainer>
      </Container>
    </WrapperForm>
  );
};


const Accept = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.7);

  a {
    display: inline-block;
    color: #ffff;
    text-decoration: none;

    &:hover {
      color: #ffff;
      text-decoration: underline;
    }
  }
`;

const FormWrapper = styled.div`
  text-align: center;
`;

const Form = styled.div`
  max-width: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  width: 100%;
  margin: 0 auto 15px;
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FormContainer = styled.div`
  margin: 20px auto;
`;
const Subtitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  @media (max-width: 576px) {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
`;

const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  letter-spacing: -0.03em;
  color: #FFFFFF;
  margin-bottom: 8px;
  @media (max-width: 576px) {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 40px;
    text-align: center;
    letter-spacing: -0.03em;
    color: #FFFFFF;
  }
`;

const Description = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.7);
  @media (max-width: 576px) {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.02em;
  }
`;

const WrapperForm = styled.div`
  padding: 0 15px;
`;
const Container = styled.div`
  background: #448AFF;
  border-radius: 20px;
  padding: 40px 20px;
  margin: 100px auto;
  max-width: 1060px;
  @media (max-width: 576px) {
    padding: 20px;
    margin: 50px 0;
  }
`;

export default StartForm;
