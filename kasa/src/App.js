import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import MainApropos from "./components/MainApropos.jsx";
import Footer from "./components/Footer.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import CardDetails from "./components/CardDetails.jsx";
import ErrorPage from "./components/ErrorPage.jsx";


function App() {
  const [isAProposClicked, setIsAProposClicked] = useState(false);
  const [currentComponent] = useState("false");
  const [isCardDetailsVisible, setIsCardDetailsVisible] = useState(false);


  return (
    <Router>
      <ErrorBoundary>
        <div>
          <Header setIsAProposClicked={setIsAProposClicked} />
          <Routes>
            <Route index element={<Main />} />
            <Route path="a-propos" element={<MainApropos />} />
            <Route path="card/:id" element={<CardDetails setIsCardDetailsVisible={setIsCardDetailsVisible} />} />

            <Route path="main" element={<Main/>}/>
            <Route path="*" element={<ErrorPage message="Page not found" />} />
          </Routes>
          <Footer 
            isAProposClicked={isAProposClicked}
            isCardDetailsVisible={isCardDetailsVisible}
            isErrorPage={currentComponent === "isErrorPage"}
/>
        </div>
      </ErrorBoundary>
    </Router>
  );
}


export default App;
