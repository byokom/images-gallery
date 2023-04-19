import React from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  // Use existing root
  //console.log('Use existing root')
  createRoot(rootElement, { hydrate: true }).render(<App />);
} else {
  // Create new root
  //console.log('Create new root')
  createRoot(rootElement).render(<App />);
}
