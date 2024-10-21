// export * from "./components/App";
// export { default } from "./components/App";
// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App"; // Adjusted path
import "./reset.css"; // Ensure styles are imported

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
