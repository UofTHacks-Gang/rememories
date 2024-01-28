import React from "react";
import "./LoadingPage.css";
import sun from "../../asset/sun.png"

function LoadingPage() {
  return (
    // <form className="sun-color">
    <div className="loading-container">
      <img
        loading="lazy"
        // src={sun}
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/934a97d23c079ce976904ba390cffb63071abbebe8051f280ab749170a02c996?apiKey=6e21b3676e574010bf34bc3c7118367e&"
        className="sun"
        aria-label="Image"
      />
      <div className="loading-text title"> 
        Loading...
      </div>
      </div>
    // </form>
  );
}

export default LoadingPage;