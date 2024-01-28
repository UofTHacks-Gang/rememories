import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { useNavigate } from "react-router-dom";
import PageImage from "./PageImage";
import "./Pages.css";

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <h1>Page Header</h1>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});

const Pages = ({ setImageRef, imageRef }) => {
  const [query, setQuery] = useState();
  const [images, setImages] = useState([]);
  let navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleViewClick = () => {
    // Navigate to the upload page
    navigate("/collection");
  };

  return (
    <div className="pages-container">
      <div className="button-container">
        <button onClick={handleViewClick} className="viewMemoriesButton">
          View your memories
        </button>
      </div>
      <div className="flip-book-container">
        <HTMLFlipBook
          width={400}
          height={600}
          maxShadowOpacity={0.5}
          showCover={false}
          className="demo-book"
        >
          <div className="demoPage">
            <div className="outerSpace">
              <h4 className="haiku">helloo</h4>
              <img
                src="https://image.ibb.co/mmyvrc/anniversary_balloons_birthday_68369.jpg"
                alt=""
                className="polaroidImage"
              />
              <h5 className="description-text">winter winteriwnter</h5>
            </div>
          </div>
          <div className="demoPage">Page 2</div>
          <div className="demoPage">Page 3</div>
          <div className="demoPage">Page 4</div>

          <div className="demoPage">
            <PageImage images={imageRef} />
          </div>
        </HTMLFlipBook>
      </div>

      <h4 className="project-name">rememories.</h4>
    </div>
  );
};

export default Pages;
