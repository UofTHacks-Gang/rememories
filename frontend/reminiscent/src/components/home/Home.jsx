import React from "react";
import "./Home.css";
// import { ChakraProvider, Button, ButtonGroup } from "@chakra-ui/react";
import Button from '../button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // Get the history object
  let navigate = useNavigate(); 

  // Function to handle button click and navigate to the upload page
  const handleProceedClick = () => {
    // Navigate to the upload page
    navigate("/upload");
  };
  return (
    <div className="home-container">
      <h4 className="project-name title">rememories.</h4>
      <h1 className="title-home title">...Are you ready to make your story?</h1>
      <Button onClick={handleProceedClick}>Proceed</Button>
    </div>
  );
};

export default Home;
