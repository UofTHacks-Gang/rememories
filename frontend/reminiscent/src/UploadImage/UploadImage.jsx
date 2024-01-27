import React, { useState } from "react";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageData, setImageData] = useState([]);

  return (
    <div>
      <h1>The Facebook</h1>

      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <br />
      <br />

      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
          const url = "http://127.0.0.1:8000/getfaces";

          const imageFile = event.target.files[0];
          //   // Data to be sent in the request body
          const formData = new FormData();
          formData.append("file", imageFile);

          fetch(url, {
            method: "POST",
            body: formData,
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
            })
            .then((data) => {
              setImageData(data.images);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }}
      />
      {imageData.length && <h1>Search results</h1>}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {imageData.map((base64String, index) => (
          <img
            key={index}
            src={`data:image/png;base64,${base64String}`}
            alt={`Image ${index}`}
            style={{
              width: "150px",
              height: "150px",
              margin: "10px",
              objectFit: "cover",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default UploadAndDisplayImage;
