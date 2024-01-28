import React from "react";
import "./ContinuePage.css";

function continuePage() {

  export const ContinuePage = ({ className, ...props }) => {
    return (
      <div className={"continue-page " + className}>
        <div className="frame-4">
          <div className="now-let-s-see-your-beautiful-face">
            Now, let&#039;s see your beautiful face...{" "}
          </div>
          <div className="rectangle-1">
            <div className="proceed">Proceed </div>
          </div>
        </div>
        <div className="frame-6">
          <div className="frame-5">
            <svg
              className="star"
              width="116"
              height="113"
              viewBox="0 0 116 113"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M57.5846 10.7065L70.1445 43.7921C70.2998 44.2013 70.6262 44.5223 71.0379 44.6708L104.858 56.8695L71.0379 69.0682C70.6262 69.2167 70.2998 69.5377 70.1445 69.9469L57.5846 103.033L45.0247 69.9469C44.8693 69.5377 44.543 69.2167 44.1313 69.0682L10.3108 56.8695L44.1313 44.6708C44.543 44.5223 44.8693 44.2013 45.0247 43.7921L57.5846 10.7065Z"
                fill="white"
                stroke="#3F3D3D"
                strokeWidth="3"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="star2"
              width="75"
              height="73"
              viewBox="0 0 75 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5001 7.95458L45.1904 28.1832C45.346 28.5923 45.6724 28.9131 46.0842 29.0614L66.7378 36.5002L46.0842 43.9389C45.6724 44.0872 45.346 44.408 45.1904 44.8171L37.5001 65.0457L29.8097 44.8171C29.6542 44.408 29.3277 44.0872 28.9159 43.9389L8.26233 36.5002L28.9159 29.0614C29.3277 28.9131 29.6542 28.5923 29.8097 28.1832L37.5001 7.95458Z"
                fill="white"
                stroke="#3F3D3D"
                strokeWidth="3"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <svg
            className="star3"
            width="91"
            height="88"
            viewBox="0 0 91 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.1692 8.73859L54.6773 33.8626C54.8322 34.272 55.1582 34.5933 55.5698 34.7422L81.1577 44.0002L55.5698 53.2582C55.1582 53.4071 54.8322 53.7284 54.6773 54.1377L45.1692 79.2618L35.6612 54.1377C35.5063 53.7284 35.1803 53.4071 34.7687 53.2582L9.1808 44.0002L34.7687 34.7422C35.1803 34.5933 35.5063 34.272 35.6612 33.8626L45.1692 8.73859Z"
              fill="white"
              stroke="#3F3D3D"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    );
  };
  
  }
  export default continuePage;