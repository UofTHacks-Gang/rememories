import React, { useState } from "react";
import "./Pages.css";

const PageImage = ({ images }) => {
  return (
    <div>
      <div class="page-image-wrapper">
        {images.map(({ img, caption }) => {
          return (
            <>
              <div className="item">
                <div className="polaroid">
                  <img src={img} />
                  <div className="caption">{caption}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default PageImage;
