import React, {useState, useRef, useEffect} from "react";
import Button from "../button";
import "./OpenCV.css";
import { Camera } from "react-camera-pro";

const OpenCV = () => {
  const camera = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState(null);

  return (
    <div
      className="opencv-container"
      numberOfCamerasCallback={setNumberOfCameras}
    >
      <h4 className="project-name">rememories.</h4>
      <div className="borderCamera">
        <div className="innerCamera">
          <Camera ref={camera} numberOfCamerasCallback={setNumberOfCameras} />
          <img src={image} alt="Taken photo" className="takenPhoto" />
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
          onClick={() => {
            const url = "http://127.0.0.1:8000/getfaces";

            //   // Data to be sent in the request body
            const formData = new FormData();
            formData.append("file", image);

            const response = fetch(url, {
              method: "POST",
              body: formData,
            });
            if (!response.ok) {
              console.error("Error fetching data:", response.statusText);
              return;
            }

            const reader = response.body.getReader();

            // Function to process each chunk of data
            async function processChunk({ done, value }) {
              if (done) {
                console.log("Data stream complete");
                return;
              }

              // Update the UI with the received data
              console.log(value);

              // Continue reading the next chunk
              return reader.read().then(processChunk);
            }

            // Start reading the stream
            return reader.read().then(processChunk);
            
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
