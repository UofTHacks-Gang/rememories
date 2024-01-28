import React, { useRef, useState, useEffect } from 'react';
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import './DragAndDrop.css';

const DragAndDrop = ({onUpload}) => {
    const upload = React.useRef(null);
    const [files, setFiles] = useState(); 
    
    let navigate = useNavigate(); 

    useEffect(() => {
        upload.current?.addEventListener('dragover', handleDragOver);
        upload.current?.addEventListener('drop', handleDrop);
      
        return () => {
          upload.current?.removeEventListener('dragover', handleDragOver);
          upload.current?.removeEventListener('drop', handleDrop);
        };
      }, []);
      
      const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
      };
      
      const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {files} = e.dataTransfer;

        if (files && files.length) {
            console.log(files);
            // onUpload(files);
        }
      };

      const handleFileChange = (event) => {
            const files = event.target.files;
            setFiles([...files]);
            console.log(files)
      };

      const handleProceedClick = () => {
        // Navigate to the upload page
        navigate("/ContinuePage");
      };

    return (
      <div className="drag-and-drop-page">
        <div className="drag-and-drop-title title">
          Before we begin, let's connect your photos.
        </div>
        <div className="drag-and-drop-files" ref={upload}>
          Drag and drop files here or select to upload.
          <form>
            <label>
              <input type="file" onChange={handleFileChange} multiple />
            </label>
          </form>
        </div>
        <button onClick={handleProceedClick} className="btn">
          Continue
        </button>
      </div>
    );
}

export default DragAndDrop;