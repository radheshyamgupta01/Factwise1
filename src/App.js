import React from "react";
import FAQSection from "./FaqSection";
import celebritiesData from "./celebrities.json";
import Modal from "./Modal/Modal";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FAQSection celebritiesData={celebritiesData} />} />
          <Route path="/modal" element={<Modal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
