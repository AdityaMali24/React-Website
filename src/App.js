import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Home from "./components/Home";
import OurShop from "./components/OurShop";
import ProductDetails from "./components/ProductDetails";
import ContactUs from "./components/ContactUs";
import FooterHome from "./components/Footer-Home/FooterHome";

function App() {
  return (
    <>
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<OurShop />}></Route>
          <Route path="/product" element={<ProductDetails />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>
        <FooterHome/>
      </Router>
    </>
  );
}

export default App;
