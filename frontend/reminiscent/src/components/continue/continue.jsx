import React from "react";
import Button from "../button";
import "./ContinuePage.css";
import { useNavigate } from "react-router-dom";


function ContinuePage() {
      let navigate = useNavigate(); 

      const handleProceedClick = () => {
        // Navigate to the upload page
        navigate("/opencv");
      };
      return (
        <div className="centered">
          <header className="flex w-full max-w-[1231px] flex-col items-center mt-40 max-md:max-w-full max-md:mt-10">
            <div className="justify-between items-stretch self-stretch z-10 flex gap-5 pr-2 pt-5 max-md:max-w-full max-md:flex-wrap"></div>
            <h1
              className="continue-text title"
              aria-label="Now, let's see your beautiful face..."
            >
              Now, let's see your beautiful face...
            </h1>
            <div className="continue-container">
              <Button onClick={handleProceedClick}>Proceed</Button>
              {/* <form>
                  <label htmlFor="proceed" className="continue-btn btn">
                    {/* <input type="submit" id="proceed" style={{ display: "none" }} /> */}
              {/* </label> */}
              {/* </form> */}
            </div>
          </header>
        </div>
      );
    }        
  export default ContinuePage;

