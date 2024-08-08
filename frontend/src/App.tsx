"use client";

import { useState } from "react";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./pages/ScrollToTop";
import AppRoutes from "./routes";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter as Router } from "react-router-dom";
import ButtonUp from "./components/ButtonUp";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Router>
      <ScrollToTop />
      <NavBar handleShowModal={handleShowModal} />
      {showModal && <Modal handleShowModal={handleShowModal} />}
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
      <ButtonUp />
      <Footer />
    </Router>
  );
};

export default App;
