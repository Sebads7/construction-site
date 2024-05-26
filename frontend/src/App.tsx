"use client";

import Modal from "./components/Modal";
import { useState } from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./pages/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import SeeOurWork from "./pages/SeeOurWork";
import Reviews from "./pages/Reviews";
import BathRemodeling from "./pages/What we do/BathRemodeling";
import Carpentry from "./pages/What we do/Carpentry";
import KitchenRemodeling from "./pages/What we do/KitchenRemodeling";
import PaintingPage from "./pages/What we do/PaintingPage";
import ScrollToTop from "./pages/ScrollToTop";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Router>
        <ScrollToTop />
        <NavBar handleShowModal={handleShowModal} />
        {showModal && <Modal handleShowModal={handleShowModal} />}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/seeourwork" element={<SeeOurWork />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/bathremodeling" element={<BathRemodeling />} />
          <Route path="/carpentry" element={<Carpentry />} />
          <Route path="/kitchenremodeling" element={<KitchenRemodeling />} />
          <Route path="/painting" element={<PaintingPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
