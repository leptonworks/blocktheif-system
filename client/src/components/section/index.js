import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

// SECTIONS
export { default as Navbar } from "./NavBar";
export { default as Hero } from "./heroSection";
export { default as Footer } from "./footer";
export { default as QR } from "./qrSection";
export { default as Review } from "./reviewSection";
export { default as AboutUS } from "./aboutUsSection";
export { default as Manufacturer } from "./manuSection";
export { default as Loader } from "./Loader";

// PAGES

export { default as ScanQrPage } from "../../pages/user/scanQR";
export { default as WebCamPage } from "../../pages/user/webCam";



export { default as ManufacturerPage } from "../../pages/manufacturer/manuacturer";
export { default as AboutUsPage } from "../../pages/aboutUs";


export { default as ReviewPage } from "../../pages/review";
export { default as AddProduct } from "../../pages/manufacturer/addProduct"
export { default as ViewProduct } from "../../pages/manufacturer/dashboardPages/viewProducts"
export { default as RemoveProducts } from "../../pages/manufacturer/dashboardPages/removeProducts"
export { default as ReviewProducts } from "../../pages/manufacturer/dashboardPages/reviewProducts"
export { default as ManuDashboard } from "../../pages/manufacturer/manuDashboard"


export { default as UserDashboard } from "../../pages/user/userDashboard"
export { default as History } from "../../pages/user/history"
export { default as ProductList } from "../../pages/user/productList"




export { default as Manulogin } from "../../pages/manufacturer/manuLogin"
export { default as WebCam } from "../../pages/user/webCam" 
export { default as ML } from "../../pages/ML"



export { default as Home } from "../../pages/strapi/home"
export { default as CustomNav } from "../../pages/strapi/customNav"
export { default as Login } from "../../pages/strapi/login"
export { default as Registration } from "../../pages/strapi/registration"
export { default as Logout } from "../../pages/strapi/logout"
export { default as ManufacturerRegistration } from "../../pages/strapi/manufacturerRegistration"
export { default as ManufacturerLogin } from "../../pages/strapi/manufacturerLogin"
export { default as ManufacturerProfile } from "../../pages/strapi/manufacturerProfile"


export { default as Profile } from "../../pages/user/Profile"

