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
  ManuDashboard
} from "./components/section";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ScanQR from "./pages/user/scanQR";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
      <Routes>
        <Route path="/scanQR" element={<ScanQrPage />} />
        <Route path="/Manufacturer" element={<ManufacturerPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Reviews" element={<ReviewPage />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/ManuDashboard" element={<ManuDashboard />} />

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
    </div>
  </BrowserRouter>
);

export default App;
