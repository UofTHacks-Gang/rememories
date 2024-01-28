import React from "react";
import "./home/Home";

const Button = ({ children }) => {
  return (
    <div className="center-container">
        <button colorScheme="teal" variant="outline" className="btn center-container">
            {children}
        </button>
    </div>
  );
};

export default Button;
