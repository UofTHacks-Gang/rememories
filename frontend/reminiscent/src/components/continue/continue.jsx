import React from "react";
import "./ContinuePage.css";

function ContinuePage() {
      return (
        <div className="bg-orange-100 flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
          <header className="flex w-full max-w-[1231px] flex-col items-center mt-40 max-md:max-w-full max-md:mt-10">
            <div className="justify-between items-stretch self-stretch z-10 flex gap-5 pr-2 pt-5 max-md:max-w-full max-md:flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd479bcd3d0447459e80fbf7a8e9e6487dff4ccef4597373a6ae57e99bed7344?apiKey=6e21b3676e574010bf34bc3c7118367e&"
                className="aspect-[0.62] object-contain object-center w-[115px] items-start shrink-0 max-w-full"
                alt="Logo 1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b86c9fe6cd9c58d9d00e634f073273d674f75eb99ab146bac046af60b1630491?apiKey=6e21b3676e574010bf34bc3c7118367e&"
                className="aspect-[1.02] object-contain object-center w-[90px] shrink-0 mt-24 self-end max-md:mt-10"
                alt="Logo 2"
              />
            </div>
            <h1
              className="continue-text title"
              aria-label="Now, let's see your beautiful face..."
            >
              Now, let's see your beautiful face...
            </h1>
            <form>
              <label htmlFor="proceed" className="continue-btn btn">
                Proceed
                <input type="submit" id="proceed" style={{ display: "none" }} />
              </label>
            </form>
          </header>
        </div>
      );
    }        
  export default ContinuePage;