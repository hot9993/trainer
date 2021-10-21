import styled from "styled-components";
import Index from "../Components/MainPage/TrainAndEarn";
import BrowserWindow from "../Components/MainPage/Browser/BrowserWindow";
import TargetGroup from "../Components/MainPage/TargetGroup";
import About from "../Components/MainPage/About";
import StartForm from "../Components/MainPage/StartForm";
import BlockInfo from "../Components/MainPage/BlockInfo";

export default function Home() {
  return (
    <Container>
      <Index />
      <BrowserWindow />
      <TargetGroup />
      <About />
      <StartForm title="Готовы попробовать?" description="Участвуйте в закрытом тестировании платформы для частных тренеров" />
      <BlockInfo />
      <StartForm subTitle="готовы начать?" title="Стать частным тренером"  />
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
`
