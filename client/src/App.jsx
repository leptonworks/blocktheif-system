import {
  NavBar,
  Hero,
  QR,
  Manufacturer,
  Review,
  AboutUS,
  Footer,
} from "./components/section";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <NavBar />
      <Hero />
    </div>
    <QR />
    <Manufacturer />
    <Review />
    <AboutUS />
    <Footer />
  </div>
);

export default App;
