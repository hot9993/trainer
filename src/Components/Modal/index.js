import React from "react";
import styled from "styled-components";

const ModalQr = ({ visible, onClose }) => {
  if (!visible) {
    return false
  }
  const arrow = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 13V20L20 12L12 4V11H4V13H12Z" fill="#448AFF" />
    </svg>
  );
  const close = (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.9769 11.6832L8.2937 6.99993L12.9769 2.31671L12.9838 2.30988L12.99 2.30254C13.1402 2.12718 13.2187 1.90161 13.2098 1.67091C13.2009 1.44021 13.1052 1.22137 12.942 1.05811C12.7787 0.894858 12.5599 0.79922 12.3292 0.790309C12.0985 0.781398 11.8729 0.85987 11.6975 1.01004L11.6902 1.01633L11.6834 1.02315L7.00027 5.70626L2.31704 1.01661L2.31016 1.00971L2.30276 1.00338C2.1274 0.853203 1.90183 0.774731 1.67113 0.783642C1.44042 0.792554 1.22158 0.888191 1.05833 1.05144C0.895074 1.2147 0.799435 1.43354 0.790524 1.66425C0.781613 1.89495 0.860085 2.12052 1.01026 2.29588L1.01648 2.30315L1.02325 2.30992L5.70659 6.99969L1.02306 11.6768C0.930675 11.7577 0.855471 11.8564 0.801949 11.9671C0.746929 12.0808 0.716009 12.2047 0.711132 12.3309C0.706256 12.4572 0.727528 12.583 0.773613 12.7007C0.819699 12.8183 0.889602 12.9251 0.978935 13.0145C1.06827 13.1038 1.17511 13.1737 1.29274 13.2198C1.41037 13.2659 1.53625 13.2872 1.6625 13.2823C1.78874 13.2774 1.91261 13.2465 2.02634 13.1915C2.13691 13.138 2.23556 13.0628 2.31648 12.9705L7.00002 8.29336L11.6834 12.9767L11.6902 12.9835L11.6975 12.9898C11.8729 13.14 12.0985 13.2185 12.3292 13.2096C12.5599 13.2006 12.7787 13.105 12.942 12.9417C13.1052 12.7785 13.2009 12.5597 13.2098 12.3289C13.2187 12.0982 13.1402 11.8727 12.99 11.6973L12.9838 11.69L12.9769 11.6832Z"
        fill="#7E8BB6" stroke="#7E8BB6" strokeWidth="0.5" />
    </svg>
  );
  return (
    <Container>
      <Modal>
        <ContentModal>
          <Close onClick={onClose}>
            {close}
          </Close>
          <Title>
            Скачать приложение
          </Title>
          <CardWrapper>
            <CardItem>
              <TitleCard>
                App Store
                <Icon>
                  {arrow}
                </Icon>
              </TitleCard>
              <Image src="/appstore.png" />
            </CardItem>
            <CardItem>
              <TitleCard>
                Google Play
                <Icon>
                  {arrow}
                </Icon>
              </TitleCard>
              <Image src="/appstore.png" />
            </CardItem>
          </CardWrapper>
        </ContentModal>
      </Modal>
      <Overlay onClick={onClose} />
    </Container>
  );
};

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
const Image = styled.img`
  width: 100%;
`;

const TitleCard = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -0.03em;
  color: #448AFF;
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardItem = styled.div``;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  line-height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: -0.03em;
  color: #273464;
  margin: 0 0 30px;
`;

const Close = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;
const ContentModal = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 6px 60px rgba(83, 86, 105, 0.07);
  border-radius: 20px;
  padding: 40px;
  position: relative;
`;

const Container = styled.div``;
const Overlay = styled.div`
  background: rgba(26, 35, 67, 0.6);
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
`;
const Modal = styled.div`
  position: fixed;
  width: 636px;
  height: 480px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;
`;

export default ModalQr;
