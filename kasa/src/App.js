import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import MainApropos from "./components/MainApropos.jsx";
import Footer from "./components/Footer.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import CardDetails from "./components/CardDetails.jsx";

function App() {
  const [isAProposClicked, setIsAProposClicked] = useState(false);

  return (
    <Router>
      <ErrorBoundary>
        <div>
          <Header setIsAProposClicked={setIsAProposClicked} />
          <Routes>
          <Route index element={<Main />} />
          <Route path="a-propos" element={<MainApropos />} />
          <Route path="card/:id" element={<CardDetails />} />
          </Routes>
          <Footer isAProposClicked={isAProposClicked} />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;