import React, {useState} from "react";
import "./Pages.css";
import HTMLFlipBook from "react-pageflip";
import { PageFlip } from "page-flip";
import PageImage from "./PageImage";
import { useNavigate } from "react-router-dom";

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <h1>Page Header</h1>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});


const Pages = (props) => {
  const [query, setQuery] = useState();
  const [images, setImages] = useState([]);
  let navigate = useNavigate(); 

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    setImages([
      {
        img: "https://image.ibb.co/mmyvrc/anniversary_balloons_birthday_68369.jpg",
        caption: "12/12/12",
      },
      {
        img: "https://image.ibb.co/mmyvrc/anniversary_balloons_birthday_68369.jpg",
        caption: "",
      },
      {
        img: "https://image.ibb.co/mmyvrc/anniversary_balloons_birthday_68369.jpg",
        caption: "",
      },
    ]);
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

          <div>
            <PageImage images={images} />
          </div>
        </HTMLFlipBook>
      </div>

      <h4 className="project-name">rememories.</h4>
    </div>
  );
};

export default Pages;
