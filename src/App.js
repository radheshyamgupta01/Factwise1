import React from "react";
import FAQSection from "./FaqSection";
import celebritiesData from "./celebrities.json";

function App() {
  return (
    <div>
      <FAQSection celebritiesData={celebritiesData} />
    </div>
  );
}

export default App;
