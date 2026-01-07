import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import AttachCar from "./pages/AttachCar";
import Fleet from "./pages/Fleet";

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/attach-car" element={<AttachCar />} />
        </Routes>
      </Layout>

      <Footer />
    </>
  );
}

export default App;
