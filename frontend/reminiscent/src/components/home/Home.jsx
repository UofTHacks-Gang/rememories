import React from "react";
import "./Home.css";
// import { ChakraProvider, Button, ButtonGroup } from "@chakra-ui/react";
import Button from '../button';

const Home = () => {
  return (
    <div className="home-container">
      <h4 className="project-name title">rememories.</h4>
      <h1 className="title-home title">...Are you ready to make your story?</h1>
      <Button>Proceed</Button>
    
    </div>
  );
};

export default Home;
