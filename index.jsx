import React from "react";
import { createRoot } from "react-dom/client";
function App() {
  return (<div>Hello, React!</div>)
}
createRoot(document.getElementById("root")).render(<App />)
