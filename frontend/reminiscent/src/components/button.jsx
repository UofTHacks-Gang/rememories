import React from "react";
import "./home/Home";

const Button = (props) => {
  return (
    <div className="center-container">
      <button
        colorScheme="teal"
        variant="outline"
        className="btn center-container"
        {...props}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
