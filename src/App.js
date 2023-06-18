import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./ErrorPage";
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Register from "./Register";
import Protectedroutes from "./Protectedroutes";

function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#e7eff7",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };


  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Protectedroutes />} />
            <Route path="/*" element={<ErrorPage />} />

          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
