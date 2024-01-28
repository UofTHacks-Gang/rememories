import React, { useState } from "react";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageRefs, setimageRefs] = useState([]);

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
        onChange={async (event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
          const url = "http://127.0.0.1:8000/getfaces";

          const imageFile = event.target.files[0];
          //   // Data to be sent in the request body
          const formData = new FormData();
          formData.append("file", imageFile);

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

          // const reader = response.body.getReader();

          // // Function to process each chunk of data
          // async function processChunk({ done, value }) {
          //   if (done) {
          //     console.log("Data stream complete");
          //     return;
          //   }

          //   // Update the UI with the received data
          //   console.log(value);

          //   // Continue reading the next chunk
          //   return reader.read().then(processChunk);
          // }

          // // Start reading the stream
          // return reader.read().then(processChunk);
        }}
      />
      {imageRefs.length && <h1>Search results</h1>}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {imageRefs.map((url, index) => (
          <img
            key={index}
            src={url}
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
