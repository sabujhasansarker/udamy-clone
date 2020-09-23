import React from "react";

const Alert = ({ setAlert }) => {
  return (
    <div className="alert">
      <p className="text-center text">
        <b> Start solving your challenge now</b> | Enroll today and learn
        risk-free with our 30-day money-back guarantee.
      </p>
      <p className="text-right text" onClick={() => setAlert(false)}>
        &#x2715;
      </p>
    </div>
  );
};

export default Alert;
