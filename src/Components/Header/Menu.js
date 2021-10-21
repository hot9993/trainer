import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { arrowMenu, burgerMenu, closeBurger, userIcon } from "./icons";
import UiButton from "../Ui/Button/UiButton";
import ModalQr from "../Modal";

const Menu = () => {
  const [state, setState] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const body = document.body;
    if (state) {
      window.scrollTo(0, 0);
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [state]);

  return (
    <ContainerMenu className="menu">
      <MenuContainer>
        <MenuItem href="/">Тренировки</MenuItem>
        <MenuItem href="/">Мероприятия и события</MenuItem>
        <MenuItem href="/">Для студентов</MenuItem>
        <Divider />
        <MenuItem href="/" className="active">Для бизнеса и тренеров</MenuItem>
      </MenuContainer>
      {!state && (
        <UserLinkMenu href="/">
          {userIcon}
        </UserLinkMenu>
      )}
      <BurgerMenu onClick={() => setState(!state)}>
        {!state ? (burgerMenu) : (closeBurger)}
      </BurgerMenu>
      {state && (
        <MenuFixed>
          <ContainerMinifixed>
            <MenuItemMobile href="/">Тренировки</MenuItemMobile>
            <MenuItemMobile href="/">Мероприятия и события</MenuItemMobile>
            <MenuItemMobile href="/">Для студентов</MenuItemMobile>
            <SubmenuContainer>
              <SubMenuItemcontainer>
                <MenuItemMobile className={subMenu && "active__submenu"} href="/">Для бизнеса и
                  тренеров</MenuItemMobile>
                <ArrowMenu onClick={() => setSubMenu(!subMenu)} className={subMenu && "active__submenu"}>
                  {arrowMenu}
                </ArrowMenu>
              </SubMenuItemcontainer>
              {subMenu && (
                <SubMenuItems>
                  <MenuItemMobile href="/">Для тренеров</MenuItemMobile>
                  <MenuItemMobile href="/">Для организаций</MenuItemMobile>
                  <MenuItemMobile href="/">Для ВУЗов</MenuItemMobile>
                </SubMenuItems>
              )}
            </SubmenuContainer>
            <MenuItemMobile href="/">О проекте</MenuItemMobile>
            <MenuItemMobile href="/">Личный кабинет</MenuItemMobile>
            <ButtonContainer>
              <UiButton onClick={() => setVisible(true)} type="light">
                Скачать приложение
              </UiButton>
            </ButtonContainer>
          </ContainerMinifixed>
        </MenuFixed>
      )}
      <ModalQr visible={visible} onClose={() => setVisible(false)} />
    </ContainerMenu>
  );
};

const ButtonContainer = styled.div`
  margin-top: 50px;

  button {
    width: 100%;
  }
`;
const ArrowMenu = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;

  &.active__submenu {
    svg path {
      stroke: #7E8BB6;
    }

    svg {
      transform: rotate(-180deg);
    }
  }
`;

const SubMenuItemcontainer = styled.div`
  position: relative;
`;
const SubmenuContainer = styled.div`
  padding: 20px 0;
  border-top: 1px solid rgb(152 166 199 / 30%);
  border-bottom: 1px solid rgb(152 166 199 / 30%);
  margin-bottom: 20px;
`;
const MenuFixed = styled.div`
  background: #fff;
  position: fixed;
  top: 69px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  min-width: 320px;
  padding-top: 15px;
  padding-right: 10px;
  padding-left: 10px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  @media(min-width: 1200px) {
    display: none;
  }
`;
const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
`;

const SubMenuItems = styled.div`
  margin-top: 20px;

  & > a {
    margin-bottom: 20px;
  }
`;
const ContainerMinifixed = styled.div`
  padding: 20px;
  //overflow-y: auto;
  //-webkit-overflow-scrolling: touch;
  & > a {
    margin-bottom: 20px;
  }
`;
const UserLinkMenu = styled.a`
  display: none;
  background: #F6F9FF;
  border-radius: 8px;
  margin-right: 20px;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    display: flex;
  }
`;
const BurgerMenu = styled.div`
  display: none;
  background: #F6F9FF;
  border-radius: 8px;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    display: flex;
  }
`;

const Divider = styled.div`
  background: #98A6C7;
  opacity: 0.3;
  width: 2px;
  height: 16px;
  margin-bottom: 10px;
`;

const MenuItem = styled.a`
  font-family: "RF Dewi", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #273464;
  transition: all 0.4s ease;
  border-bottom: 2px solid transparent;
  padding-bottom: 10px;
  cursor: pointer;

  &.active {
    color: #448AFF;
    border-bottom: 2px solid #448AFF;
  }

  &:hover {
    color: #448AFF;
    border-bottom: 2px solid #448AFF;
  }
`;
const MenuItemMobile = styled.a`
  font-family: "RF Dewi", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #273464;
  transition: all 0.4s ease;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  &.active__submenu {
    color: #7E8BB6;
  }

  &.active {
    color: #448AFF;
  }

  &:hover {
    color: #448AFF;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: -10px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export default Menu;
