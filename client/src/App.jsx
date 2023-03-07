import {
  Navbar,
  Hero,
  QR,
  Manufacturer,
  Review,
  AboutUS,
  Footer,
  ScanQrPage,
  ManufacturerPage,
  AboutUsPage,
  LoginPage,
  ReviewPage,
  AddProduct,
  readQR,
  createQR
} from "./components/section";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
// import ScanQR from "./pages/user/scanQR";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
      </div>
      <Routes>
        <Route path="/scanQR" element={<ScanQrPage />} />
        <Route path="/Manufacturer" element={<ManufacturerPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Reviews" element={<ReviewPage />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/readQR" element={<readQR />} />
        <Route path="/createQR" element={<createQR />} />

        <Route
          path="/"
          element={
            <>
              <Hero />
              <QR />
              <Manufacturer />
              <Review />
              <AboutUS />
              <LoginPage/>
              <Footer />
            </>
          }
        />
      </Routes>

      <CookieConsent 
      debug = {true}
      location = "bottom"
      style={{background : "#000" , textAlign : "left"}}
      buttonStyle ={{color : "#000" , background : "#fff" , fontSize : "14px"}}
      buttonText = "OK Great!"
      > 
      This site uses cookies.see our <a href="/privacy">privacy policy</a> for more 
      
      </CookieConsent>

    </div>
  </BrowserRouter>
);

export default App;
