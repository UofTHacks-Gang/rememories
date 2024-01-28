import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UploadAndDisplayImage from "./UploadImage/UploadImage";
import Home from "./components/home/Home";
import LoadingPage from "./components/loading/LoadingPage";
import OpenCV from "./components/OpenCV/OpenCV";
import DragAndDrop from "./components/DragAndDrop/DragAndDrop";
import Pages from "./components/Pages/Pages";
import ContinuePage from "./components/continue/continue";
import UploadPage from "./UploadImage/UploadImage";
import CollectionPage from './components/collection/CollectionPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <UploadAndDisplayImage /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opencv" element={<OpenCV />} />
          <Route path="/upload" element={<DragAndDrop />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/ContinuePage" element={<ContinuePage />} />
          <Route path="/uploadpage" element={<UploadPage/>} />
          <Route path="/collection" element={<CollectionPage/>} />
          
        </Routes>
        {/* <Route path="/about" component={Upload} />
        <Route path="/contact" component={Opencv} /> */}
      </div>
    </Router>
  );
}

export default App;
