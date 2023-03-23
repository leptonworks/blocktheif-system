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
  ReviewPage,
  AddProduct,
  ManuDashboard,
  Manulogin,
  ViewProduct,
  RemoveProducts,
  ReviewProducts,
  WebCam,
  ML,
  UserDashboard,
  History,
  ProductList,
  Home,
  CustomNav,
  Login,
  Registration,
  Logout

  // ManuDashboard
} from "./components/section";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Protector } from "./helper";

// import ScanQR from "./pages/user/scanQR";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Routes>
          <Route path="/scanQR" element={<ScanQrPage />} />
          <Route path="/Manufacturer" element={<ManufacturerPage />} />
          <Route path="/AboutUs" element={<AboutUsPage />} />

          <Route path="/Reviews" element={<ReviewPage />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/ManuDashboard" element={<ManuDashboard />} />
          <Route path="/Manulogin" element={<Manulogin />} />
          <Route path="/ViewProduct" element={<ViewProduct />} />
          <Route path="/RemoveProducts" element={<RemoveProducts />} />
          <Route path="/ReviewProducts" element={<ReviewProducts />} />
          <Route path="/WebCam" element={<WebCam />} />
          <Route path="/ML" element={<ML />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />

          <Route path="/History" element={<History />} />
          <Route path="/ProductList" element={<ProductList />} />

          <Route path="/Home" element={<Protector Component={Home} />} />
          <Route path="/CustomNav" element={<CustomNav />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Logout" element={<Logout />} />

          <Route path="/Profile" element={<Profile />} />

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
        <ToastContainer className="nav-spacing" />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
