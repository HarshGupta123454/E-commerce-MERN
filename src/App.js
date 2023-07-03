import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./ErrorPage";
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Register from "./Register";
import Home from "./Home";
import About from "./About";
import Product from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import Protected from "./components/Protected";
import Login from "./Login";
import Forgot from "./Forgot";
import Otp from "./Otp";
import ResetPassword from "./Resetpassword";
import { Uselogincontext } from "./context/Logincontext";
import { useEffect } from "react";
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
  const { isloading, checkAuth } = Uselogincontext();
  useEffect(() => {
    console.log("calling");
    checkAuth();
  }, []);
  if (isloading) {
    console.log("returning loading");
    return <h1>loading....</h1>;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/register/otp" element={<Otp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/forgot/otp" element={<Otp />} />
            <Route path="/forgot/otp/reset" element={<ResetPassword />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={
              <Protected>
                <Cart />
              </Protected>
            } />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
