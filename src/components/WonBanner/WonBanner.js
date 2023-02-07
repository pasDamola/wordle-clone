import React from "react";
import Banner from "../Banner";

function WonBanner({ numOfGuesses, handleGameStatus }) {
  return (
    <Banner status="happy" handleGameStatus={handleGameStatus}>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>{numOfGuesses} guesses</strong>.
    </Banner>
  );
}

export default WonBanner;
