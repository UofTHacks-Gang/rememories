import React, { useState } from "react";
import Button from "../button";
import "./Collection.css";
import CollectionImage from "./CollectionImage";

const CollectionPage = ({ setimageRefs, imageRefs }) => {
  const [query, setQuery] = useState();
  const [filtered, setfiltered] = useState([]);

  let search;

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="collection-container">
      <h4 className="project-name title">rememories.</h4>
      <div className="title collection-title collection-padding">
        Enter a tag here:
      </div>
      <input
        type="text"
        className="collection-input"
        value={search}
        onChange={handleChange}
      />
      <div className="collection-padding">
        <Button
          onClick={async () => {
            console.log("CLICKED");
            setimageRefs([
              "/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/database/photo.jpg",
              "/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/database/IMG_1466.png",
              "/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/database/IMG_1456.png",
              "/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/database/IMG_1433.png",
              "/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/database/IMG_1432.png",
              "/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/database/IMG_1463.png",
              "/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/database/IMG_1510.png",
              "/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/database/IMG_1461.png",
              "/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/database/IMG_1467.png",
              "/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/database/IMG_1506.png",
              "/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/database/IMG_1464.png",
              "/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/database/IMG_1469.png",
              "/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/database/IMG_1512.png",
              "/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/database/IMG_1462.png",
              "/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/database/IMG_1511.png",
            ]);
            const url = "http://127.0.0.1:8000/getemotions";

            //   // Data to be sent in the request body
            const data = { query: query };

            const response = await fetch(url, {
              method: "POST",
              body: data,
            });
            if (!response.ok) {
              console.error("Error fetching data:", response.statusText);
              return;
            }

            const indices = await response.json();
            let filter = [];
            for (let i of indices) {
              filtered.append(imageRefs[i]);
            }
            setfiltered(filter);
            console.log(filtered);
            // for image in imageRefs:
          }}
        >
          Submit
        </Button>
      </div>
      <div>
        <CollectionImage images={filtered} />
      </div>
    </div>
  );
};

export default CollectionPage;
