import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
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
  const [isCardDetailsVisible, setIsCardDetailsVisible] = useState(false);
  const [isErrorPageVisible, setIsErrorPageVisible] = useState(false);


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
            <Route path="*" element={<ErrorPage 
                           setIsErrorPageVisible={setIsErrorPageVisible}
                           setIsCardDetailsVisible={setIsCardDetailsVisible} 
                         />} />
            <Route path="404" element={<ErrorPage message="Oups! La page que vous demandez n'existe pas." errorCode="404" />} />
            <Route path="*" element={<Navigate to="/404" replace />} />

          </Routes>
          <Footer 
            isAProposClicked={isAProposClicked}
            isCardDetailsVisible={isCardDetailsVisible}
            isErrorPageVisible={isErrorPageVisible}
          />
        </div>
      </ErrorBoundary>
    </Router>
  );
}


export default App;
