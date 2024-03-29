import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
const Welcome = () => (
  <Jumbotron>
    <h1>Images Gallery</h1>
    <p>Enter a search term in the input field.</p>
    <p>
      <Button variant="primary" href="http://unsplash.com" target="_blank">
        {" "}
        Learn More{" "}
      </Button>
    </p>
  </Jumbotron>
);
export default Welcome;
