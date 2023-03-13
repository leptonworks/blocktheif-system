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
  ManuDashboard,
  Manulogin,
  ViewProduct,
  RemoveProducts,
  ReviewProducts


  // ManuDashboard
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
        <Route path="/Manulogin" element={<Manulogin />} />
        <Route path="/ViewProduct" element={<ViewProduct />} />
        <Route path="/RemoveProducts" element={<RemoveProducts />} />
        <Route path="/ReviewProducts" element={<ReviewProducts />} />



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
