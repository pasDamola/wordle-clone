import React from "react";
import Banner from "../Banner";

function LostBanner({ answer, handleGameStatus }) {
  return (
    <Banner status="sad" handleGameStatus={handleGameStatus}>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </Banner>
  );
}

export default LostBanner;
