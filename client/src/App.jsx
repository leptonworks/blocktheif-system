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
  AddProd
} from "./components/section";
import { BrowserRouter, Routes, Route } from "react-router-dom";``
// import ScanQR from "./pages/user/scanQR";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
      </div>
      <Routes>
        <Route path="/scanQR" element={<ScanQrPage />} />
        <Route path="/addProd" element={<AddProd />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Reviews" element={<ReviewPage />} />

        <Route
          path="/"
          element={
            <>
              <Hero />
              <QR />
              <Manufacturer />
              <Review />
              <AboutUS />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
