import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <App />
  // </StrictMode>
);

const main = () => {
  return (
    <main>
      <h1>Main Content</h1>
    </main>
  )
}

export default main