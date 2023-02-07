import React from "react";

function Banner({ children, status, handleGameStatus }) {
  return (
    <div className={`${status} banner`}>
      <p>{children}</p>
      <span className="cancel" onClick={() => handleGameStatus("running")}>
        X
      </span>
    </div>
  );
}

export default Banner;
