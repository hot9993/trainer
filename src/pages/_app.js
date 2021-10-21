import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "normalize.css"
import { globalFonts } from "../base/fonts";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #F7F9FF;
    font-family: "RF Dewi", sans-serif;
  }
  a {
    text-decoration: none;
    &:hover {
      color: #448AFF;
    }
  }
  ${globalFonts};
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ContainerPage>
          <header>
            <Header />
          </header>
          <main>
            <Component {...pageProps} />
          </main>
          <footer>
            <Footer />
          </footer>
        </ContainerPage>
      </ThemeProvider>
    </>
  );
}

const ContainerPage = styled.div`
  @media(max-width: 1300px) {
    main {
      overflow: hidden;
    }
  }
`
