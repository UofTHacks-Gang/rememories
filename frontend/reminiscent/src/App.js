import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DragAndDrop from "./components/DragAndDrop/DragAndDrop";
import OpenCV from "./components/OpenCV/OpenCV";
import Pages from "./components/Pages/Pages";
import UploadAndDisplayImage from "./components/UploadImage/UploadImage";
import CollectionPage from "./components/collection/CollectionPage";
import ContinuePage from "./components/continue/continue";
import Home from "./components/home/Home";
import LoadingPage from "./components/loading/LoadingPage";

function App() {
  const [imageRefs, setimageRefs] = useState([]);
  return (
    <Router>
      <div className="App">
        {/* <UploadAndDisplayImage /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/opencv"
            element={
              <OpenCV setimageRefs={setimageRefs} imageRefs={imageRefs} />
            }
          />
          <Route path="/upload" element={<DragAndDrop />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route
            path="/pages"
            element={
              <Pages setimageRefs={setimageRefs} imageRefs={imageRefs} />
            }
          />
          <Route path="/ContinuePage" element={<ContinuePage />} />
          <Route path="/uploadpage" element={<UploadAndDisplayImage />} />
          <Route
            path="/collection"
            element={
              <CollectionPage
                setimageRefs={setimageRefs}
                imageRefs={imageRefs}
              />
            }
          />
        </Routes>
        {/* <Route path="/about" component={Upload} />
        <Route path="/contact" component={Opencv} /> */}
      </div>
    </Router>
  );
}

export default App;
