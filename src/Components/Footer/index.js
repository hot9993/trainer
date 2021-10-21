import React from "react";
import styled from "styled-components";
import { appleIcon, fbIcon, googleIcon, instIcon, LogoIcon, vkIcon } from "./icons";

const Footer = () => {
  return (
    <Container>
      <WrapperContent>
        <LogoContainer>
          <LogoIcon />
          <SubLogo margin="20px 0 5px">
            ООО "Бласкор"
          </SubLogo>
          <SubLogo>ИНН: 7729491590 | ОГРН: 1167746124270</SubLogo>
        </LogoContainer>
        <MenuContainer>
          <MenuItem>
            <LabelMenu>СМИ, предложения сотрудничества</LabelMenu>
            <MenuLink href="mailto:info@active-friends.ru">info@active-friends.ru</MenuLink>
            <OtherLink  href="/">Пользовательское соглашение</OtherLink>
          </MenuItem>
          <MenuItem>
            <LabelMenu>Техническая поддержка</LabelMenu>
            <MenuLink href="mailto:support@active-friends.ru">support@active-friends.ru</MenuLink>
            <OtherLink  href="/">Политика конфиденциальности</OtherLink>
          </MenuItem>
        </MenuContainer>
        <SocialContainer>
          <ContainerApps>
            <ContainerLink href="/">
              {appleIcon}
            </ContainerLink>
            <ContainerLink href="/">
              {googleIcon}
            </ContainerLink>
          </ContainerApps>
          <SocialIcons>
            <ContainerLink href="/" small>{instIcon}</ContainerLink>
            <ContainerLink href="/" small>{vkIcon}</ContainerLink>
            <ContainerLink href="/" small>{fbIcon}</ContainerLink>
          </SocialIcons>
        </SocialContainer>
      </WrapperContent>
    </Container>
  );
};

const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 15px;
`
const ContainerApps = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media(max-width: 350px) {
    flex-wrap: wrap;
    grid-template-columns: 1fr;
  }
`
const ContainerLink = styled.a`
  display: flex;
  align-items: center;
  padding: ${p => p.small ? "7px" : "9px 19px"};
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  transition: all 0.4s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;
const SocialContainer = styled.div`
  @media(max-width: 992px) {
    max-width: 270px;
  }
`;
const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 90px;
  @media(max-width: 1300px) {
    grid-gap: 50px;
  }
  @media(max-width: 576px) {
    grid-template-columns: 1fr;
    grid-gap: 40px;
  }
`;

const OtherLink = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #CCD2E9;
  margin-top: 16px;
  transition: all 0.4s ease;
  text-decoration: none;
  display: block;
  &:hover {
    color: #448AFF;
  }
`;
const MenuItem = styled.div`

`;

const LabelMenu = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #CCD2E9;
`;

const MenuLink = styled.a`
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #448AFF;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SubLogo = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #7782AA;
  margin: ${p => p.margin};
`;
const LogoContainer = styled.div``;
const WrapperContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 1150px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
  }
`;

const Container = styled.div`
  background: #162044;
  padding: 24px 15px;
`;

export default Footer;
