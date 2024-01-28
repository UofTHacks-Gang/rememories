import React, { useRef, useState } from "react";
import { Camera } from "react-camera-pro";
import "./OpenCV.css";

const OpenCV = ({ setimageRefs, imageRefs }) => {
  const camera = useRef(null);
  const [image, setImage] = useState(null);

  return (
    <div className="opencv-container">
      <h4 className="project-name">rememories.</h4>
      <div className="borderCamera">
        <div className="innerCamera">
          <Camera ref={camera} />
          <img
            src={image}
            hidden={!image}
            alt="Taken photo"
            className="takenPhoto"
          />
        </div>
      </div>

      <div className="buttonContainer">
        <button
          className="circularButton"
          onClick={() => {
            const photo = camera.current.takePhoto();
            setImage(photo);
          }}
        ></button>
        {/* <button
        hidden={numberOfCameras <= 1}
        onClick={() => {
          camera.current.switchCamera();
        }}
        /> */}
        <button
          onClick={async () => {
            const url = "http://127.0.0.1:8000/getfaces";

            const blob = await fetch(image).then((res) => res.blob());

            const formData = new FormData();
            formData.append("file", blob, "photo.jpg");

            const response = await fetch(url, {
              method: "POST",
              body: formData,
            });
            if (!response.ok) {
              console.error("Error fetching data:", response.statusText);
              return;
            }

            const jba = await response.json();

            setimageRefs(jba);
            console.log(imageRefs);
            console.log(jba);
          }}
          className="proceedButton"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default OpenCV;
